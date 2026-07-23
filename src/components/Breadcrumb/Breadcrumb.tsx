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
  // pathname이 '/'인 항목(홈)은 이미 아래 고정 Home 링크로 표시되므로 중복되지 않게 제외합니다.
  const crumbs = matches.filter(hasTitle).filter((match) => match.pathname !== '/')

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
