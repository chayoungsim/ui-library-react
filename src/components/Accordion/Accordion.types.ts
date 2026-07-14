import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface AccordionItemData {
  /**
   * 항목을 식별하는 고유 키입니다.
   */
  id: string
  /**
   * 헤더에 표시할 제목입니다.
   */
  title: ReactNode
  /**
   * 펼쳤을 때 표시할 내용입니다.
   */
  content: ReactNode
  /**
   * 이 항목의 펼침/접기를 비활성화할지 여부입니다.
   * @default false
   */
  disabled?: boolean
}

export interface AccordionProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /**
   * 아코디언에 표시할 항목 목록입니다.
   */
  items: AccordionItemData[]
  /**
   * 여러 항목을 동시에 펼칠 수 있는지 여부를 결정합니다. false면 한 번에 하나만 펼쳐집니다.
   * @default false
   */
  multiple?: boolean
  /**
   * 처음에 펼쳐진 상태로 시작할 항목 id 목록입니다.
   * @default []
   */
  defaultOpenIds?: string[]
  /**
   * 펼침 상태가 바뀔 때 호출되는 콜백입니다.
   */
  onChange?: (openIds: string[]) => void
  /**
   * 아코디언의 시각적 스타일을 결정합니다. 클래스 조합만으로 여러 디자인을 만들 수 있습니다.
   * @default 'default'
   */
  variant?: 'default' | 'bordered' | 'separated' | 'filled' | 'underline'
}
