export interface SliderBasicSlide {
  /**
   * 슬라이드 배경 이미지 URL입니다.
   */
  image: string
  /**
   * 배경 이미지 위에 표시할 제목입니다.
   */
  title?: string
  /**
   * 제목 아래에 표시할 설명입니다.
   */
  description?: string
}

export interface SliderBasicProps {
  /**
   * 배경 이미지와 텍스트로 구성된 슬라이드 목록입니다.
   */
  slides: SliderBasicSlide[]
  /**
   * 슬라이드 사이의 간격(px)입니다.
   * @default 0
   */
  spaceBetween?: number
  /**
   * 한 화면에 보여줄 슬라이드 개수입니다.
   * @default 1
   */
  slidesPerView?: number
  /**
   * 마지막 슬라이드 다음에 첫 슬라이드로 순환할지 여부입니다.
   * @default false
   */
  loop?: boolean
  /**
   * 좌우 이동 네비게이션 버튼 표시 여부입니다.
   * @default true
   */
  navigation?: boolean
  /**
   * 하단 페이지네이션(점) 표시 여부입니다.
   * @default true
   */
  pagination?: boolean
  /**
   * 최상위 엘리먼트에 추가할 클래스입니다.
   */
  className?: string
}
