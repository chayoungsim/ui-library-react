import { forwardRef } from 'react'
import type { CheckboxProps } from './Checkbox.types'
import './Checkbox.scss'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, size = 'md', disabled = false, className, ...props },
  ref,
) {
  // 클래스 이름을 동적으로 조합합니다.
  const checkboxClasses = [
    'checkbox',
    `checkbox--${size}`,
    disabled ? 'is-disabled' : '',
    className || '',
  ]
    .join(' ')
    .trim()

  return (
    <label className={checkboxClasses}>
      <input ref={ref} type="checkbox" className="checkbox__input" disabled={disabled} {...props} />
      <span className="checkbox__control" aria-hidden="true" />
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox
