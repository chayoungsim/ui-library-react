import type { ComponentPropsWithoutRef } from 'react'

export interface HamburgerProps extends Omit<ComponentPropsWithoutRef<'button'>, 'type' | 'onClick'> {
  /**
   * 열림(X 등으로 전환된) 상태 여부입니다.
   */
  isOpen: boolean
  /**
   * 버튼 클릭 시 호출되는 토글 핸들러입니다.
   */
  onToggle: () => void
  /**
   * 디자인과 모션의 종류를 결정합니다. 마크업은 동일하고 클래스(`hamburger--{variant}`)만
   * 달라지므로, 프로젝트마다 원하는 느낌의 모션을 골라 쓸 수 있습니다.
   * @default 'spin'
   */
  variant?: 'spin' | 'squeeze' | 'arrow' | 'slider'
  /**
   * 버튼의 크기를 결정합니다.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * 스크린 리더용 라벨입니다.
   * @default '메뉴'
   */
  label?: string
}
