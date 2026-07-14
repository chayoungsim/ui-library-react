import { useEffect, useState } from 'react'

/**
 * CSS media query 결과를 boolean으로 구독합니다. 예) useMediaQuery('(min-width: 1024px)')
 */
export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)
    const handleChange = () => setMatches(mediaQueryList.matches)

    handleChange()
    mediaQueryList.addEventListener('change', handleChange)
    return () => mediaQueryList.removeEventListener('change', handleChange)
  }, [query])

  return matches
}
