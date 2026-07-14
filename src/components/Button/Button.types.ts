import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * 버튼의 시각적 스타일을 결정합니다.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  /**
   * 버튼의 크기를 결정합니다.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * 버튼이 로딩 상태인지 여부를 결정합니다. 로딩 상태에서는 버튼이 비활성화됩니다.
   * @default false
   */
  loading?: boolean
  /**
   * 버튼 왼쪽에 표시될 아이콘입니다.
   */
  startIcon?: ReactNode
  /**
   * 버튼 오른쪽에 표시될 아이콘입니다.
   */
  endIcon?: ReactNode
  /**
   * 텍스트 없이 아이콘만 표시하는 버튼인지 여부를 결정합니다. true인 경우 정사각형 형태로 렌더링되며,
   * children으로 아이콘을 전달해야 합니다. 스크린 리더 사용자를 위해 반드시 `aria-label`을 함께 지정하세요.
   * @default false
   */
  iconOnly?: boolean
}
