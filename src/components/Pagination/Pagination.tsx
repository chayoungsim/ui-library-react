import { forwardRef, useMemo } from 'react'
import type { PaginationProps } from './Pagination.types'
import useMediaQuery from '@/hooks/useMediaQuery'
import './Pagination.scss'

// src/styles/abstracts/_breakpoints.scss의 'lg'(1024px)와 동일한 기준입니다.
const DESKTOP_QUERY = '(min-width: 1024px)'

// 생략기호 없이, 현재 페이지가 포함된 연속된 페이지 번호 묶음을 계산합니다.
function getPageItems(currentPage: number, totalPages: number, maxVisible: number) {
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const start = Math.min(
    Math.max(currentPage - Math.floor((maxVisible - 1) / 2), 1),
    totalPages - maxVisible + 1,
  )

  return Array.from({ length: maxVisible }, (_, i) => start + i)
}

const Pagination = forwardRef<HTMLElement, PaginationProps>(function Pagination(
  {
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1,
    showEdges = true,
    variant = 'default',
    size = 'md',
    className,
    ...props
  },
  ref,
) {
  // 데스크톱은 5개(형제 1개), 모바일은 3개(형제 0개)의 페이지 번호를 보여줍니다.
  const isDesktop = useMediaQuery(DESKTOP_QUERY)
  const effectiveSiblingCount = isDesktop ? siblingCount : Math.max(siblingCount - 1, 0)
  const maxVisible = effectiveSiblingCount * 2 + 3

  const pageItems = useMemo(
    () => getPageItems(currentPage, totalPages, maxVisible),
    [currentPage, totalPages, maxVisible],
  )

  const isFirstPage = currentPage <= 1
  const isLastPage = currentPage >= totalPages

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    onPageChange(page)
  }

  // 클래스 이름을 동적으로 조합합니다.
  const paginationClasses = [
    'pagination',
    `pagination--${variant}`,
    `pagination--${size}`,
    className || '',
  ]
    .join(' ')
    .trim()

  return (
    <nav ref={ref} className={paginationClasses} aria-label="페이지네이션" {...props}>
      <ul className="pagination__list">
        {showEdges && (
          <li>
            <button
              type="button"
              className="pagination__link"
              aria-label="첫 페이지"
              disabled={isFirstPage}
              onClick={() => goToPage(1)}
            >
              «
            </button>
          </li>
        )}
        <li>
          <button
            type="button"
            className="pagination__link"
            aria-label="이전 페이지"
            disabled={isFirstPage}
            onClick={() => goToPage(currentPage - 1)}
          >
            ‹
          </button>
        </li>

        {pageItems.map((item) => (
          <li key={item}>
            <button
              type="button"
              className="pagination__link"
              aria-label={`${item} 페이지`}
              aria-current={item === currentPage ? 'page' : undefined}
              onClick={() => goToPage(item)}
            >
              {item}
            </button>
          </li>
        ))}

        <li>
          <button
            type="button"
            className="pagination__link"
            aria-label="다음 페이지"
            disabled={isLastPage}
            onClick={() => goToPage(currentPage + 1)}
          >
            ›
          </button>
        </li>
        {showEdges && (
          <li>
            <button
              type="button"
              className="pagination__link"
              aria-label="마지막 페이지"
              disabled={isLastPage}
              onClick={() => goToPage(totalPages)}
            >
              »
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
})

Pagination.displayName = 'Pagination'

export default Pagination
