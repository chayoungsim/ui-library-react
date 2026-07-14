import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface CardProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  /**
   * 카드 상단에 표시할 이미지 등의 미디어 영역입니다. 내부 여백 없이 꽉 차게 렌더링됩니다.
   */
  media?: ReactNode
  /**
   * 카드의 제목입니다.
   */
  title?: ReactNode
  /**
   * 제목 아래에 표시할 설명입니다.
   */
  description?: ReactNode
  /**
   * 카드 하단에 표시할 영역입니다 (버튼 등).
   */
  footer?: ReactNode
  /**
   * 카드의 시각적 스타일을 결정합니다. 클래스 조합만으로 여러 디자인을 만들 수 있습니다.
   * @default 'default'
   */
  variant?: 'default' | 'outline' | 'elevated'
  /**
   * 카드 내부 여백의 크기를 결정합니다.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
}
