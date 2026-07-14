import { useEffect } from 'react'

/**
 * locked가 true인 동안 body의 스크롤을 잠급니다. 모달 등 오버레이가 열려있을 때 사용합니다.
 */
export default function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [locked])
}
