import { forwardRef } from 'react'
import type { HamburgerProps } from './Hamburger.types'
import './Hamburger.scss'

const Hamburger = forwardRef<HTMLButtonElement, HamburgerProps>(function Hamburger(
  { isOpen, onToggle, variant = 'spin', size = 'md', label = '메뉴', className, ...props },
  ref,
) {
  // 클래스 이름을 동적으로 조합합니다.
  const hamburgerClasses = [
    'hamburger',
    `hamburger--${variant}`,
    `hamburger--${size}`,
    isOpen ? 'is-open' : '',
    className || '',
  ]
    .join(' ')
    .trim()

  return (
    <button
      ref={ref}
      type="button"
      className={hamburgerClasses}
      aria-expanded={isOpen}
      aria-label={label}
      onClick={onToggle}
      {...props}
    >
      <span className="hamburger__box">
        <span className="hamburger__inner" />
      </span>
    </button>
  )
})

Hamburger.displayName = 'Hamburger'

export default Hamburger
