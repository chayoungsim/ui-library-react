import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface BreadcrumbProps extends ComponentPropsWithoutRef<'nav'> {
  /**
   * 각 항목 사이에 표시할 구분자입니다.
   * @default '/'
   */
  separator?: ReactNode
}
