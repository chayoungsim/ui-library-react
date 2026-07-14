import type { ComponentPropsWithoutRef } from 'react'

export interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  /**
   * Input의 크기를 결정합니다.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * 에러(유효성 검증 실패) 상태 여부를 결정합니다.
   * @default false
   */
  error?: boolean
}
