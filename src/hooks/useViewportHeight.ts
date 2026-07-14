import { useLayoutEffect } from 'react'

// 모바일 브라우저는 주소창 표시 여부에 따라 100vh 값이 실제 보이는 영역과 달라집니다.
// 실제 window.innerHeight 기준으로 --vh(1% 단위) 변수를 계산해 CSS에서 보정할 수 있게 합니다.
function setViewportHeightVar() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

/**
 * `--vh` CSS 변수를 설정/갱신합니다. `calc(var(--vh, 1vh) * 100)` 형태로 사용하세요
 * (src/styles/abstracts/_mixins.scss의 `vh` 믹스인 참고). 앱 루트에서 한 번만 호출합니다.
 */
export default function useViewportHeight() {
  useLayoutEffect(() => {
    setViewportHeightVar()

    window.addEventListener('resize', setViewportHeightVar)
    window.addEventListener('orientationchange', setViewportHeightVar)

    return () => {
      window.removeEventListener('resize', setViewportHeightVar)
      window.removeEventListener('orientationchange', setViewportHeightVar)
    }
  }, [])
}
