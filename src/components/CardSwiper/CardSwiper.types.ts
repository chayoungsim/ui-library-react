import type { CardProps } from '@/components/Card/Card.types'

export type CardSwiperItem = Pick<CardProps, 'media' | 'title' | 'description' | 'footer' | 'variant' | 'size'>

export interface CardSwiperProps {
  /**
   * 슬라이드로 표시할 카드 목록입니다.
   */
  items: CardSwiperItem[]
  /**
   * 한 화면에 보여줄 카드 개수입니다.
   * @default 5
   */
  slidesPerView?: number
  /**
   * 카드 사이의 간격(px)입니다.
   * @default 24
   */
  spaceBetween?: number
  /**
   * 이전/다음 버튼 클릭 시 한 번에 이동할 카드 개수입니다.
   * @default 1
   */
  slidesPerGroup?: number
  /**
   * 마지막 카드 다음에 첫 카드로 순환할지 여부입니다.
   * @default false
   */
  loop?: boolean
  /**
   * 좌우 이동 네비게이션 버튼 표시 여부입니다.
   * @default true
   */
  navigation?: boolean
  /**
   * 최상위 엘리먼트에 추가할 클래스입니다.
   */
  className?: string
}
