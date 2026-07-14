import { forwardRef } from 'react'
import type { InputProps } from './Input.types'
import './Input.scss'

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = 'md', error = false, className, type = 'text', ...props },
  ref,
) {
  // 클래스 이름을 동적으로 조합합니다.
  const inputClasses = ['input', `input--${size}`, error ? 'is-error' : '', className || '']
    .join(' ')
    .trim()

  return (
    <input ref={ref} type={type} className={inputClasses} aria-invalid={error} {...props} />
  )
})

Input.displayName = 'Input'

export default Input
