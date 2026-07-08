import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * 버튼의 시각적 스타일을 결정합니다.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
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
  leftIcon?: ReactNode
  /**
   * 버튼 오른쪽에 표시될 아이콘입니다.
   */
  rightIcon?: ReactNode
}
