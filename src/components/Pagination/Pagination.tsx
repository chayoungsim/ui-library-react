import { forwardRef, useMemo } from 'react'
import type { PaginationProps } from './Pagination.types'
import './Pagination.scss'

const ELLIPSIS = 'ellipsis' as const

// 현재 페이지를 중심으로 표시할 페이지 번호 목록을 계산합니다 (양 끝은 "..."으로 생략).
function getPageItems(currentPage: number, totalPages: number, siblingCount: number) {
  const totalVisible = siblingCount * 2 + 5 // 처음, 끝, 현재, 좌우 형제, 생략(...) 2개

  if (totalPages <= totalVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1)
  const rightSibling = Math.min(currentPage + siblingCount, totalPages)
  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < totalPages - 1

  const items: (number | typeof ELLIPSIS)[] = [1]

  if (showLeftEllipsis) items.push(ELLIPSIS)
  for (let page = leftSibling; page <= rightSibling; page += 1) {
    if (page !== 1 && page !== totalPages) items.push(page)
  }
  if (showRightEllipsis) items.push(ELLIPSIS)

  items.push(totalPages)

  return items
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
  const pageItems = useMemo(
    () => getPageItems(currentPage, totalPages, siblingCount),
    [currentPage, totalPages, siblingCount],
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

        {pageItems.map((item, index) =>
          item === ELLIPSIS ? (
            <li key={`ellipsis-${index}`}>
              <span className="pagination__ellipsis">…</span>
            </li>
          ) : (
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
          ),
        )}

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
