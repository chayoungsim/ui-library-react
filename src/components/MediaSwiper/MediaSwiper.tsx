import { useCallback, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperInstance } from 'swiper'
import Icon from '@/components/Icon/Icon'
import type { MediaSwiperProps } from './MediaSwiper.types'

import 'swiper/css'
import 'swiper/css/navigation'
import './MediaSwiper.scss'

const DEFAULT_IMAGE_DURATION = 5000
const RING_RADIUS = 16
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

const MediaSwiper = ({ slides, loop = true, navigation = true, className }: MediaSwiperProps) => {
  const swiperRef = useRef<SwiperInstance | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const rafIdRef = useRef<number | null>(null)
  const elapsedRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    const swiper = swiperRef.current
    if (!swiper) return

    const isLast = swiper.activeIndex >= slides.length - 1
    if (isLast) {
      if (loop) swiper.slideTo(0)
    } else {
      swiper.slideNext()
    }
  }, [loop, slides.length])

  // 활성 슬라이드가 바뀔 때마다 진행률/경과시간을 초기화하고, 영상이면 처음부터 재생할 준비를 합니다.
  const handleSlideChange = useCallback(
    (swiper: SwiperInstance) => {
      const newIndex = swiper.activeIndex
      setActiveIndex(newIndex)
      setProgress(0)
      elapsedRef.current = 0

      const slide = slides[newIndex]
      if (slide?.type === 'video') {
        const video = videoRefs.current[newIndex]
        if (video) video.currentTime = 0
      }
    },
    [slides],
  )

  // 일시정지 상태가 아닐 때만 타입에 맞는 진행 방식(타이머 또는 영상 재생)을 진행합니다.
  useEffect(() => {
    const slide = slides[activeIndex]
    if (!slide) return

    if (isPaused) {
      if (slide.type === 'video') {
        videoRefs.current[activeIndex]?.pause()
      }
      return
    }

    if (slide.type === 'image') {
      const duration = slide.duration ?? DEFAULT_IMAGE_DURATION
      const startTime = performance.now() - elapsedRef.current

      const tick = (now: number) => {
        const elapsed = now - startTime
        elapsedRef.current = elapsed
        const ratio = Math.min(elapsed / duration, 1)
        setProgress(ratio)
        if (ratio < 1) {
          rafIdRef.current = requestAnimationFrame(tick)
        } else {
          goToNext()
        }
      }

      rafIdRef.current = requestAnimationFrame(tick)
      return () => {
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
      }
    }

    const video = videoRefs.current[activeIndex]
    if (!video) return

    video.play().catch(() => {})

    const handleTimeUpdate = () => {
      if (video.duration) setProgress(video.currentTime / video.duration)
    }
    const handleEnded = () => goToNext()

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [activeIndex, isPaused, slides, goToNext])

  const wrapperClasses = ['mediaSwiper', className || ''].join(' ').trim()

  return (
    <div className={wrapperClasses}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={navigation}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={handleSlideChange}
        className="mediaSwiper__swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="mediaSwiper__slide"
              style={slide.type === 'image' ? { backgroundImage: `url(${slide.src})` } : undefined}
            >
              {slide.type === 'video' && (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el
                  }}
                  className="mediaSwiper__video"
                  src={slide.src}
                  poster={slide.poster}
                  muted
                  playsInline
                />
              )}
              {(slide.title || slide.description) && (
                <div className="mediaSwiper__content">
                  {slide.title && <strong className="mediaSwiper__title">{slide.title}</strong>}
                  {slide.description && <p className="mediaSwiper__description">{slide.description}</p>}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mediaSwiper__pagination">
        <button
          type="button"
          className="mediaSwiper__toggle"
          aria-label={isPaused ? '재생' : '일시정지'}
          onClick={() => setIsPaused((prev) => !prev)}
        >
          <Icon text="" className={isPaused ? 'icon--play' : 'icon--pause'} />
        </button>
        {slides.map((_, index) => {
          const ratio = index === activeIndex ? progress : index < activeIndex ? 1 : 0
          const offset = RING_CIRCUMFERENCE * (1 - ratio)

          return (
            <button
              key={index}
              type="button"
              className={['mediaSwiper__dot', index === activeIndex ? 'is-active' : ''].join(' ').trim()}
              aria-label={`${index + 1}번째 슬라이드로 이동`}
              onClick={() => swiperRef.current?.slideTo(index)}
            >
              <svg className="mediaSwiper__ring" viewBox="0 0 36 36">
                <circle className="mediaSwiper__ring-bg" cx="18" cy="18" r={RING_RADIUS} />
                <circle
                  className="mediaSwiper__ring-progress"
                  cx="18"
                  cy="18"
                  r={RING_RADIUS}
                  strokeDasharray={RING_CIRCUMFERENCE}
                  strokeDashoffset={offset}
                />
              </svg>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MediaSwiper
