export interface MediaSwiperImageSlide {
  type: 'image'
  /**
   * 이미지 URL입니다.
   */
  src: string
  /**
   * 이미지 위에 표시할 제목입니다.
   */
  title?: string
  /**
   * 제목 아래에 표시할 설명입니다.
   */
  description?: string
  /**
   * 다음 슬라이드로 넘어가기까지 머무는 시간(ms)입니다.
   * @default 5000
   */
  duration?: number
}

export interface MediaSwiperVideoSlide {
  type: 'video'
  /**
   * 영상 URL입니다. 영상 재생이 끝나면 자동으로 다음 슬라이드로 넘어갑니다.
   */
  src: string
  /**
   * 영상 로딩 전/재생 불가 시 보여줄 미리보기 이미지입니다.
   */
  poster?: string
  /**
   * 영상 위에 표시할 제목입니다.
   */
  title?: string
  /**
   * 제목 아래에 표시할 설명입니다.
   */
  description?: string
}

export type MediaSwiperSlide = MediaSwiperImageSlide | MediaSwiperVideoSlide

export interface MediaSwiperProps {
  /**
   * 이미지/영상이 혼합된 슬라이드 목록입니다.
   */
  slides: MediaSwiperSlide[]
  /**
   * 마지막 슬라이드 다음에 첫 슬라이드로 되돌아갈지 여부입니다.
   * @default true
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
