import { forwardRef } from 'react'
import type { CardProps } from './Card.types'
import './Card.scss'

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    media,
    title,
    description,
    footer,
    variant = 'default',
    size = 'md',
    className,
    children,
    ...props
  },
  ref,
) {
  // 클래스 이름을 동적으로 조합합니다.
  const cardClasses = ['card', `card--${variant}`, `card--${size}`, className || ''].join(' ').trim()

  return (
    <div ref={ref} className={cardClasses} {...props}>
      {media && <div className="card__media">{media}</div>}
      {(title || description || children) && (
        <div className="card__body">
          {title && <h4 className="card__title">{title}</h4>}
          {description && <p className="card__description">{description}</p>}
          {children}
        </div>
      )}
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  )
})

Card.displayName = 'Card'

export default Card
