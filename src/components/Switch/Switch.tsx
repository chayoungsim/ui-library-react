import { forwardRef } from 'react'
import type { SwitchProps } from './Switch.types'
import './Switch.scss'

const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, size = 'md', disabled = false, className, ...props },
  ref,
) {
  // 클래스 이름을 동적으로 조합합니다.
  const switchClasses = [
    'switch',
    `switch--${size}`,
    disabled ? 'is-disabled' : '',
    className || '',
  ]
    .join(' ')
    .trim()

  return (
    <label className={switchClasses}>
      <input
        ref={ref}
        type="checkbox"
        role="switch"
        className="switch__input"
        disabled={disabled}
        {...props}
      />
      <span className="switch__track" aria-hidden="true">
        <span className="switch__thumb" />
      </span>
      {label && <span className="switch__label">{label}</span>}
    </label>
  )
})

Switch.displayName = 'Switch'

export default Switch
