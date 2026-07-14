import { forwardRef, useId, useState } from 'react'
import type { KeyboardEvent } from 'react'
import type { TooltipProps } from './Tooltip.types'
import './Tooltip.scss'

const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(function Tooltip(
  { content, position = 'top', className, children, ...props },
  ref,
) {
  const [isVisible, setIsVisible] = useState(false)
  const tooltipId = useId()

  const show = () => setIsVisible(true)
  const hide = () => setIsVisible(false)

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Escape') hide()
  }

  // 클래스 이름을 동적으로 조합합니다.
  const wrapperClasses = ['tooltip', className || ''].join(' ').trim()

  return (
    <span
      ref={ref}
      className={wrapperClasses}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
      {isVisible && (
        <span
          id={tooltipId}
          role="tooltip"
          className={`tooltip__bubble tooltip__bubble--${position}`}
        >
          {content}
        </span>
      )}
    </span>
  )
})

Tooltip.displayName = 'Tooltip'

export default Tooltip
