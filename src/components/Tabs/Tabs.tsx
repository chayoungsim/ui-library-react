import { forwardRef, useId, useState } from 'react'
import type { ChangeEvent, KeyboardEvent } from 'react'
import type { TabsProps } from './Tabs.types'
import Select from '@/components/Select'
import './Tabs.scss'

const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { items, defaultActiveId, onChange, variant = 'default', size = 'md', className, ...props },
  ref,
) {
  const [activeId, setActiveId] = useState(defaultActiveId ?? items[0]?.id)
  const baseId = useId()

  const select = (id: string) => {
    if (id === activeId) return
    setActiveId(id)
    onChange?.(id)
  }

  // ← / → 키로 활성화 가능한 탭 사이를 이동합니다 (WAI-ARIA Tabs 패턴).
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return

    const enabledItems = items.filter((item) => !item.disabled)
    const currentIndex = enabledItems.findIndex((item) => item.id === activeId)
    if (currentIndex === -1) return

    event.preventDefault()
    const direction = event.key === 'ArrowRight' ? 1 : -1
    const nextItem = enabledItems[(currentIndex + direction + enabledItems.length) % enabledItems.length]

    select(nextItem.id)
    document.getElementById(`${baseId}-tab-${nextItem.id}`)?.focus()
  }

  const handleMobileSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    select(event.target.value)
  }

  // 클래스 이름을 동적으로 조합합니다.
  const tabsClasses = ['tabs', `tabs--${variant}`, `tabs--${size}`, className || ''].join(' ').trim()

  const activeItem = items.find((item) => item.id === activeId)

  return (
    <div ref={ref} className={tabsClasses} {...props}>
      {variant === 'responsive' && (
        <Select
          className="tabs__mobile-select"
          aria-label="탭 선택"
          value={activeId}
          onChange={handleMobileSelectChange}
        >
          {items.map((item) => (
            <option key={item.id} value={item.id} disabled={item.disabled}>
              {item.label}
            </option>
          ))}
        </Select>
      )}
      <div className="tabs__list" role="tablist" onKeyDown={handleKeyDown}>
        {items.map((item) => {
          const isActive = item.id === activeId

          return (
            <button
              key={item.id}
              type="button"
              id={`${baseId}-tab-${item.id}`}
              role="tab"
              className={`tabs__tab ${isActive ? 'is-active' : ''}`.trim()}
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${item.id}`}
              disabled={item.disabled}
              tabIndex={isActive ? 0 : -1}
              onClick={() => select(item.id)}
            >
              {item.label}
            </button>
          )
        })}
      </div>
      {activeItem && (
        <div
          id={`${baseId}-panel-${activeItem.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${activeItem.id}`}
          className="tabs__panel"
        >
          {activeItem.content}
        </div>
      )}
    </div>
  )
})

Tabs.displayName = 'Tabs'

export default Tabs
