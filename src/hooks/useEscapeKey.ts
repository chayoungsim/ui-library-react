import { useEffect } from 'react'

/**
 * ESC 키 입력을 감지해 콜백을 실행합니다. active가 false면 리스너를 등록하지 않습니다.
 */
export default function useEscapeKey(onEscape: () => void, active = true) {
  useEffect(() => {
    if (!active) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onEscape()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [active, onEscape])
}
