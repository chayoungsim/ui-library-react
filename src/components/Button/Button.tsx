import { forwardRef } from 'react'
import type { ButtonProps } from './Button.types'
import Spinner from './Spinner'
import './Button.scss'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    startIcon,
    endIcon,
    iconOnly = false,
    className,
    type = 'button',
    ...props
  },
  ref,
) {
  const isDisabled = loading || disabled

  // 클래스 이름을 동적으로 조합합니다.
  const buttonClasses = [
    'ui-button',
    `ui-button--${variant}`,
    `ui-button--${size}`,
    iconOnly ? 'ui-button--icon' : '',
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
        <span className="ui-button__loader" aria-label="로딩 중">
          <Spinner />
        </span>
      ) : iconOnly ? (
        <span className="ui-button__icon">{children}</span>
      ) : (
        <>
          {startIcon && <span className="ui-button__icon ui-button__icon--start">{startIcon}</span>}
          <span className="ui-button__text">{children}</span>
          {endIcon && <span className="ui-button__icon ui-button__icon--end">{endIcon}</span>}
        </>
      )}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
