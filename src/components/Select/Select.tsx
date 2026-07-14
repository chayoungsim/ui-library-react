import { forwardRef } from 'react'
import type { SelectProps } from './Select.types'
import Icon from '@/components/Icon/Icon'
import './Select.scss'

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { placeholder, size = 'md', error = false, className, children, value, defaultValue, ...props },
  ref,
) {
  // 클래스 이름을 동적으로 조합합니다.
  const selectClasses = [
    'select',
    `select--${size}`,
    error ? 'is-error' : '',
    className || '',
  ]
    .join(' ')
    .trim()

  // value가 없으면 비제어(defaultValue) 모드로 동작하며, placeholder가 있으면 기본값을 빈 문자열로 지정해
  // disabled 옵션이라도 초기 선택되도록 합니다 (브라우저의 기본 선택 알고리즘은 disabled 옵션을 건너뜁니다).
  const valueProps =
    value !== undefined ? { value } : { defaultValue: defaultValue ?? (placeholder ? '' : undefined) }

  return (
    <div className={selectClasses}>
      <select
        ref={ref}
        className="select__control"
        aria-invalid={error}
        {...valueProps}
        {...props}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <Icon text="" className="select__arrow icon--arr-right" />
    </div>
  )
})

Select.displayName = 'Select'

export default Select
