import { forwardRef } from 'react'
import type { RadioProps } from './Radio.types'
import './Radio.scss'

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, size = 'md', disabled = false, className, ...props },
  ref,
) {
  // 클래스 이름을 동적으로 조합합니다.
  const radioClasses = [
    'radio',
    `radio--${size}`,
    disabled ? 'is-disabled' : '',
    className || '',
  ]
    .join(' ')
    .trim()

  return (
    <label className={radioClasses}>
      <input ref={ref} type="radio" className="radio__input" disabled={disabled} {...props} />
      <span className="radio__control" aria-hidden="true" />
      {label && <span className="radio__label">{label}</span>}
    </label>
  )
})

Radio.displayName = 'Radio'

export default Radio
