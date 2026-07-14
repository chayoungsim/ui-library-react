import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Card from '@/components/Card/Card'
import type { CardSwiperProps } from './CardSwiper.types'

import 'swiper/css'
import 'swiper/css/navigation'
import './CardSwiper.scss'

const CardSwiper = ({
  items,
  slidesPerView = 5,
  spaceBetween = 24,
  slidesPerGroup = 1,
  loop = false,
  navigation = true,
  className,
}: CardSwiperProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // 영역이 화면에 20% 이상 들어오면 카드가 우측에서 순차적으로 나타나는 모션을 1회 트리거합니다.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const wrapperClasses = ['cardSwiper', isVisible ? 'is-visible' : '', className || ''].join(' ').trim()

  return (
    <div ref={containerRef} className={wrapperClasses}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        slidesPerGroup={slidesPerGroup}
        loop={loop}
        navigation={navigation}
        className="cardSwiper__swiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="cardSwiper__item" style={{ '--card-index': index } as CSSProperties}>
              <Card {...item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CardSwiper
