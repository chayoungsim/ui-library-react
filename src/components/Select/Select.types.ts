import type { ComponentPropsWithoutRef } from 'react'

export interface SelectProps extends Omit<ComponentPropsWithoutRef<'select'>, 'size'> {
  /**
   * 아무 값도 선택되지 않았을 때 보여줄 placeholder 텍스트입니다.
   * 선택할 수 없는 숨김 옵션으로 렌더링됩니다.
   */
  placeholder?: string
  /**
   * Select의 크기를 결정합니다.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * 에러(유효성 검증 실패) 상태 여부를 결정합니다.
   * @default false
   */
  error?: boolean
}
