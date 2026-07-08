import { forwardRef } from 'react'
import type { ButtonProps } from './Button.types'
import './Button.scss'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    leftIcon,
    rightIcon,
    className,
    type = 'button',
    ...props
  },
  ref,
) {
  const isDisabled = loading || disabled

  // 클래스 이름을 동적으로 조합합니다.
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    loading ? 'is-loading' : '',
    className || '',
  ]
    .join(' ')
    .trim()

  return (
    <button
      ref={ref}
      type={type}
      className={buttonClasses}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <span className="btn__loader" aria-label="로딩 중"></span>
      ) : (
        <>
          {leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
          <span className="btn__text">{children}</span>
          {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
        </>
      )}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
