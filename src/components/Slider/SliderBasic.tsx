import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import type { SliderBasicProps } from './SliderBasic.types'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './SliderBasic.scss'

const SliderBasic = ({
  slides,
  spaceBetween = 0,
  slidesPerView = 1,
  loop = false,
  navigation = true,
  pagination = true,
  className,
}: SliderBasicProps) => {
  const wrapperClasses = ['visualSlider', className || ''].join(' ').trim()

  return (
    <div className={wrapperClasses}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        pagination={pagination ? { clickable: true } : false}
        navigation={navigation}
        className="basicSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="visualSlider__slide" style={{ backgroundImage: `url(${slide.image})` }}>
              {(slide.title || slide.description) && (
                <div className="visualSlider__content">
                  {slide.title && <strong className="visualSlider__title">{slide.title}</strong>}
                  {slide.description && <p className="visualSlider__description">{slide.description}</p>}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderBasic
