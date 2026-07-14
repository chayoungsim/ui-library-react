import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface TooltipProps extends ComponentPropsWithoutRef<'span'> {
  /**
   * 툴팁에 표시할 내용입니다.
   */
  content: ReactNode
  /**
   * 트리거 기준으로 툴팁이 표시될 위치를 결정합니다.
   * @default 'top'
   */
  position?: 'top' | 'bottom' | 'left' | 'right'
}
