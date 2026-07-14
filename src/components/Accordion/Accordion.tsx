import { forwardRef, useState } from 'react'
import type { AccordionProps } from './Accordion.types'
import Icon from '@/components/Icon/Icon'
import './Accordion.scss'

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(function Accordion(
  {
    items,
    multiple = false,
    defaultOpenIds = [],
    onChange,
    variant = 'default',
    className,
    ...props
  },
  ref,
) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds)

  const toggle = (id: string) => {
    const isOpen = openIds.includes(id)
    const nextOpenIds = multiple
      ? isOpen
        ? openIds.filter((openId) => openId !== id)
        : [...openIds, id]
      : isOpen
        ? []
        : [id]

    setOpenIds(nextOpenIds)
    onChange?.(nextOpenIds)
  }

  // 클래스 이름을 동적으로 조합합니다.
  const accordionClasses = ['accordion', `accordion--${variant}`, className || ''].join(' ').trim()

  return (
    <div ref={ref} className={accordionClasses} {...props}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        const headerId = `accordion-header-${item.id}`
        const panelId = `accordion-panel-${item.id}`

        return (
          <div key={item.id} className={`accordion__item ${isOpen ? 'is-open' : ''}`.trim()}>
            <div className="accordion__heading">
              <button
                type="button"
                id={headerId}
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                disabled={item.disabled}
                onClick={() => toggle(item.id)}
              >
                <span className="accordion__title">{item.title}</span>
                <Icon text="" className="accordion__icon icon--arr-right" />
              </button>
            </div>
            <div id={panelId} role="region" aria-labelledby={headerId} className="accordion__panel">
              <div className="accordion__content">
                <div className="accordion__content-inner">{item.content}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
})

Accordion.displayName = 'Accordion'

export default Accordion
