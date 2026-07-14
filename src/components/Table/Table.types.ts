import type { ComponentPropsWithoutRef } from 'react'

export interface TableProps extends ComponentPropsWithoutRef<'table'> {
  /**
   * 테이블의 시각적 스타일을 결정합니다. 클래스 조합만으로 여러 디자인을 만들 수 있습니다.
   * @default 'default'
   */
  variant?: 'default' | 'striped' | 'bordered' | 'ty1' | 'ty2'
  /**
   * 테이블 셀의 크기(패딩)를 결정합니다.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
}
