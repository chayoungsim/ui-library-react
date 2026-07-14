import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface RadioProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size' | 'type'> {
  /**
   * 라디오 옆에 표시할 라벨 텍스트입니다. 생략하면 라디오 버튼만 표시됩니다.
   * 이 경우 스크린 리더 사용자를 위해 반드시 `aria-label`을 함께 지정하세요.
   */
  label?: ReactNode
  /**
   * 라디오의 크기를 결정합니다.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
}
