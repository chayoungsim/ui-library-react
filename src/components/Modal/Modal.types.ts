import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface ModalProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  /**
   * 모달이 열려있는지 여부를 결정합니다.
   */
  isOpen: boolean
  /**
   * 모달을 닫아야 할 때(배경 클릭, ESC, 닫기 버튼) 호출되는 콜백입니다.
   */
  onClose: () => void
  /**
   * 모달 상단에 표시할 제목입니다.
   */
  title?: ReactNode
  /**
   * 모달의 크기를 결정합니다.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * 배경(backdrop) 클릭 시 닫힘 여부를 결정합니다.
   * @default true
   */
  closeOnBackdropClick?: boolean
  /**
   * 우측 상단 닫기(X) 버튼 노출 여부를 결정합니다.
   * @default true
   */
  showCloseButton?: boolean
}
