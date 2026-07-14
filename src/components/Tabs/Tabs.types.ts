import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface TabItemData {
  /**
   * 탭을 식별하는 고유 키입니다.
   */
  id: string
  /**
   * 탭 버튼에 표시할 라벨입니다.
   */
  label: ReactNode
  /**
   * 탭이 선택됐을 때 표시할 내용입니다.
   */
  content: ReactNode
  /**
   * 이 탭의 선택을 비활성화할지 여부입니다.
   * @default false
   */
  disabled?: boolean
}

export interface TabsProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /**
   * 탭에 표시할 항목 목록입니다.
   */
  items: TabItemData[]
  /**
   * 처음에 선택된 상태로 시작할 탭 id입니다. 생략하면 첫 번째 탭이 선택됩니다.
   */
  defaultActiveId?: string
  /**
   * 선택된 탭이 바뀔 때 호출되는 콜백입니다.
   */
  onChange?: (id: string) => void
  /**
   * 탭의 시각적 스타일을 결정합니다. 클래스 조합만으로 여러 디자인을 만들 수 있습니다.
   * 'responsive'는 PC에서는 일반 탭으로, 모바일 너비에서는 select처럼 하나만 보이는 드롭다운으로 전환됩니다.
   * 이 경우 label은 문자열을 권장합니다(option 태그에 그대로 들어갑니다).
   * @default 'default'
   */
  variant?: 'default' | 'pill' | 'boxed' | 'responsive'
  /**
   * 탭의 크기를 결정합니다.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
}
