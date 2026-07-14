import type { ComponentPropsWithoutRef } from 'react'

export interface PaginationProps extends Omit<ComponentPropsWithoutRef<'nav'>, 'onChange'> {
  /**
   * 현재 페이지 번호입니다. (1부터 시작)
   */
  currentPage: number
  /**
   * 전체 페이지 수입니다.
   */
  totalPages: number
  /**
   * 페이지가 변경될 때 호출되는 콜백입니다.
   */
  onPageChange: (page: number) => void
  /**
   * 현재 페이지 좌우로 표시할 페이지 번호 개수입니다.
   * @default 1
   */
  siblingCount?: number
  /**
   * 첫 페이지 / 마지막 페이지로 이동하는 버튼 노출 여부입니다.
   * @default true
   */
  showEdges?: boolean
  /**
   * 페이지네이션의 시각적 디자인을 결정합니다. 클래스 조합만으로 여러 디자인을 만들 수 있습니다.
   * @default 'default'
   */
  variant?: 'default' | 'outline' | 'rounded' | 'text'
  /**
   * 페이지네이션의 크기를 결정합니다.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
}
