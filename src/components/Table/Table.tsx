import { forwardRef } from 'react'
import type { TableProps } from './Table.types'
import './Table.scss'

const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
  { variant = 'default', size = 'md', className, children, ...props },
  ref,
) {
  // 클래스 이름을 동적으로 조합합니다.
  const tableClasses = ['table', `table--${variant}`, `table--${size}`, className || '']
    .join(' ')
    .trim()

  return (
    <div className="table__wrapper">
      <table ref={ref} className={tableClasses} {...props}>
        {children}
      </table>
    </div>
  )
})

Table.displayName = 'Table'

export default Table
