import { forwardRef } from 'react'
import { Link, useMatches } from 'react-router-dom'
import type { UIMatch } from 'react-router-dom'
import type { RouteHandle } from '@/routes/router'
import type { BreadcrumbProps } from './Breadcrumb.types'
import './Breadcrumb.scss'

const hasTitle = (match: UIMatch<unknown, RouteHandle | undefined>): match is UIMatch<unknown, RouteHandle> =>
  Boolean(match.handle?.title)

const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(function Breadcrumb(
  { separator = '/', className, ...props },
  ref,
) {
  const matches = useMatches() as UIMatch<unknown, RouteHandle | undefined>[]
  const crumbs = matches.filter(hasTitle)

  // handle.title이 정의된 라우트가 없으면(예: 홈) breadcrumb를 표시하지 않습니다.
  if (crumbs.length === 0) return null

  const breadcrumbClasses = ['breadcrumb', className || ''].join(' ').trim()

  return (
    <nav ref={ref} className={breadcrumbClasses} aria-label="이동 경로" {...props}>
      <ol className="breadcrumb__list">
        <li className="breadcrumb__item">
          <Link to="/" className="breadcrumb__link">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1

          return (
            <li key={crumb.pathname} className="breadcrumb__item">
              <span className="breadcrumb__separator" aria-hidden="true">
                {separator}
              </span>
              {isLast ? (
                <span className="breadcrumb__current" aria-current="page">
                  {crumb.handle.title}
                </span>
              ) : (
                <Link to={crumb.pathname} className="breadcrumb__link">
                  {crumb.handle.title}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
})

Breadcrumb.displayName = 'Breadcrumb'

export default Breadcrumb
