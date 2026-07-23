import { forwardRef } from 'react'
import { createPortal } from 'react-dom'
import type { ModalProps } from './Modal.types'
import Button from '@/components/Button'
import Icon from '@/components/Icon/Icon'
import { useEscapeKey, useBodyScrollLock } from '@/hooks'
import './Modal.scss'

const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  {
    isOpen,
    onClose,
    title,
    size = 'md',
    closeOnBackdropClick = true,
    showCloseButton = true,
    className,
    children,
    ...props
  },
  ref,
) {
  // ESC 키로 닫기 + 모달이 열려있는 동안 배경 스크롤을 잠급니다.
  useEscapeKey(onClose, isOpen)
  useBodyScrollLock(isOpen)

  if (!isOpen) return null

  // 클래스 이름을 동적으로 조합합니다.
  const modalClasses = ['ui-modal', `ui-modal--${size}`, className || ''].join(' ').trim()

  return createPortal(
    <div className="ui-modal__backdrop" onClick={closeOnBackdropClick ? onClose : undefined}>
      <div
        ref={ref}
        className={modalClasses}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        onClick={(event) => event.stopPropagation()}
        {...props}
      >
        {(title || showCloseButton) && (
          <div className="ui-modal__head">
            {title && (
              <h2 id="modal-title" className="ui-modal__title">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <Button iconOnly variant="text" size="sm" aria-label="닫기" onClick={onClose}>
                <Icon text="" className="icon--x" />
              </Button>
            )}
          </div>
        )}
        <div className="ui-modal__body">{children}</div>
        <div className='ui-modal__foot'>
          <Button variant = 'outline' onClick={closeOnBackdropClick ? onClose : undefined}>취소</Button>
          <Button>저장하기</Button>
        </div>
      </div>
    </div>,
    document.body,
  )
})

Modal.displayName = 'Modal'

export default Modal
