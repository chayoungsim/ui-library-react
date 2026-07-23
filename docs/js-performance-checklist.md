# JS 최적화 체크리스트

> 목표 지표: **INP < 200ms** (경고 160ms) / **LCP < 2.5s** (경고 2.0s) / **JS 번들 < 200KB (gzip)**
> Core Web Vitals는 실사용자 필드 데이터(CrUX, p75, 28일)로 평가됩니다.
> Lighthouse 점수는 진단용이지 성적표가 아닙니다.

**우선순위 표기**
`[필수]` 모든 프로젝트 적용 · `[권장]` 여유 있으면 · `[상황]` 해당 케이스만

---

## 0. 측정 — 추측하지 말 것

최적화 전에 반드시 현재 상태를 숫자로 남깁니다. Before/After 없으면 작업이 아니라 취미입니다.

- [ ] `[필수]` **번들 분석 리포트 확보**
  - Next.js: `ANALYZE=true npm run build` (`@next/bundle-analyzer`)
  - Vite: `rollup-plugin-visualizer`
  - 확인: 상위 5개 모듈이 무엇인지, 예상과 다른 게 1등은 아닌지

- [ ] `[필수]` **Performance 패널로 긴 태스크 확인**
  - DevTools → Performance → CPU 4x slowdown + Fast 3G
  - 확인: **50ms 넘는 태스크**(Long Task)에 빨간 삼각형 표시

- [ ] `[필수]` **INP 실측**
  - DevTools → Performance → 실제로 클릭·탭·입력해보며 측정
  - 확인: 인터랙션 후 다음 페인트까지 200ms 이내인지

- [ ] `[권장]` **Coverage 패널로 미사용 JS 비율 확인**
  - DevTools → 더보기 → Coverage → 새로고침
  - 확인: 미사용 비율 50% 이상이면 코드 스플리팅 대상

- [ ] `[권장]` **필드 데이터 확인** — PageSpeed Insights, Search Console
  - 랩 데이터와 크게 다르면 실사용 환경(저사양 기기·느린 망)에 문제가 있는 것

---

## 1. 번들 크기 — 의존성 정리

- [ ] `[필수]` **라이브러리 전체 import 금지**
  ```js
  // ❌ lodash 전체 (~70KB)
  import _ from 'lodash';
  // ✅ 필요한 것만
  import debounce from 'lodash-es/debounce';
  ```
  대상: lodash, date-fns, rxjs, 아이콘 라이브러리 등

- [ ] `[필수]` **무거운 레거시 의존성 교체 검토**

  | 교체 대상 | 대안 |
  |---|---|
  | moment.js (300KB+) | date-fns, dayjs, Temporal |
  | axios (전역에서 한 번만 쓸 때) | fetch |
  | jQuery | 순수 DOM API |
  | 전체 아이콘 팩 | 개별 SVG 컴포넌트 |

- [ ] `[권장]` **번들 크기 검사 자동화**
  - `size-limit` 또는 CI의 번들 예산으로 회귀 차단
  - 확인: PR에서 번들이 커지면 경고가 뜨는지

- [ ] `[권장]` **중복 의존성 확인**
  - `npm ls <패키지명>` — 같은 라이브러리가 버전 다르게 두 번 들어있는지
  - 확인: React, date 라이브러리, polyfill류에서 자주 발생

- [ ] `[상황]` **polyfill 과잉 여부**
  - `browserslist`가 필요 이상으로 넓게 잡혀 있지 않은지
  - 확인: IE 대응이 필요 없는 프로젝트인데 core-js가 통째로 들어있지 않은지

---

## 2. 로딩 전략 — 코드 스플리팅

- [ ] `[필수]` **첫 화면에 필요 없는 컴포넌트는 동적 import**
  ```js
  const Modal = dynamic(() => import('@/components/Modal'), { ssr: false });
  ```
  대상: 모달, 탭 하위 콘텐츠, 아코디언 내부, 차트, 에디터, 지도

- [ ] `[필수]` **페이지 전용 라이브러리는 조건부 로드**
  ```js
  if (document.querySelector('[data-scroll-section]')) {
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);
  }
  ```
  대상: GSAP 플러그인, Swiper, 차트, 에디터, 캘린더

- [ ] `[필수]` **`<script>`에 `defer` 또는 `async`**
  ```html
  <script src="/js/main.js" defer></script>
  ```
  - `defer`: 실행 순서 보장, DOM 파싱 후 실행 (대부분 이것)
  - `async`: 순서 무관, 독립 스크립트만
  - 확인: `<head>`에 속성 없는 `<script>`가 남아 있지 않은지

- [ ] `[권장]` **라우트 단위 프리페치 조정**
  - Next.js `<Link prefetch>`는 기본 활성 — 링크가 아주 많은 목록 페이지에서는 과할 수 있음

- [ ] `[상황]` **Barrel 파일(`index.ts` 재export) 주의**
  - 하나만 import해도 전부 끌려오는 경우가 있음
  - 확인: 번들 분석에서 안 쓰는 모듈이 딸려 들어왔는지

---

## 3. 서드파티 스크립트 — 대부분 여기가 진짜 범인

- [ ] `[필수]` **서드파티 스크립트 목록화 + 용량 측정**
  - DevTools → Network → 도메인별 정렬
  - 대상: GA/GTM, 채팅 위젯, 광고 태그, 히트맵, A/B 테스트, 픽셀
  - 확인: **자사 번들보다 서드파티 총량이 크지 않은지**

- [ ] `[필수]` **로딩 전략 지정**
  ```jsx
  import Script from 'next/script';
  <Script src="..." strategy="lazyOnload" />
  ```

  | 전략 | 용도 |
  |---|---|
  | `beforeInteractive` | 동의 관리 등 극히 예외적인 경우만 |
  | `afterInteractive` | 분석 도구 (기본값) |
  | `lazyOnload` | 채팅 위젯, 히트맵, 소셜 임베드 |

  정적 프로젝트: `defer` + 필요시 `load` 이벤트 이후 삽입

- [ ] `[권장]` **유튜브·지도 임베드는 facade 패턴**
  - 썸네일만 먼저 표시 → 클릭 시 실제 iframe 삽입
  - 확인: iframe 하나가 500KB 이상 나오지 않는지

- [ ] `[권장]` **영향도를 수치로 기록**
  - 스크립트 제거 전후 LCP/INP 비교
  - 퍼블 파트가 통제할 수 없는 영역이므로, **협상 근거로 숫자를 남기는 것**이 목적

---

## 4. 실행 성능 — INP 개선

가장 어렵지만 가장 많이 실패하는 지표입니다.

- [ ] `[필수]` **50ms 넘는 긴 태스크 쪼개기**
  ```js
  for (const item of hugeList) {
    process(item);
    if (navigator.scheduling?.isInputPending()) {
      await (scheduler.yield?.() ?? new Promise(r => setTimeout(r, 0)));
    }
  }
  ```

- [ ] `[필수]` **고빈도 이벤트에 debounce / throttle**
  - 대상: `scroll`, `resize`, `mousemove`, 검색 입력
  - `scroll`/`resize`는 `requestAnimationFrame`으로 묶는 것이 더 정확

- [ ] `[필수]` **스크롤 리스너에 `{ passive: true }`**
  ```js
  el.addEventListener('scroll', onScroll, { passive: true });
  ```
  `preventDefault()`를 쓰지 않는 리스너라면 필수. 모바일 스크롤 체감이 달라집니다.

- [ ] `[필수]` **레이아웃 스래싱 제거**
  ```js
  // ❌ 읽기/쓰기 교차 → 매번 강제 리플로우
  els.forEach(el => { el.style.height = el.offsetHeight + 10 + 'px'; });
  // ✅ 읽기 먼저, 쓰기 나중
  const hs = els.map(el => el.offsetHeight);
  els.forEach((el, i) => { el.style.height = hs[i] + 10 + 'px'; });
  ```
  강제 동기 레이아웃 유발 속성: `offsetTop/Height`, `getBoundingClientRect()`, `scrollTop`, `getComputedStyle()`

- [ ] `[권장]` **개별 리스너 대신 이벤트 위임**
  - 리스트 아이템 수백 개에 각각 리스너를 붙이지 않기

- [ ] `[권장]` **무거운 연산은 Web Worker로**
  - 대상: 대용량 파싱, 이미지 처리, 정렬/필터링

- [ ] `[상황]` **`IntersectionObserver`로 scroll 리스너 대체**
  - 등장 감지, 무한 스크롤, lazy 처리는 거의 전부 대체 가능

---

## 5. React / Next.js 특화

- [ ] `[필수]` **불필요한 리렌더 확인**
  - React DevTools → Profiler → "Highlight updates when components render"
  - 확인: 관계없는 컴포넌트가 같이 렌더되는지

- [ ] `[필수]` **Zustand는 selector로 구독**
  ```js
  // ❌ 스토어 전체 구독 → 아무 값이나 바뀌면 리렌더
  const store = useStore();
  // ✅ 필요한 값만
  const count = useStore(s => s.count);
  ```

- [ ] `[필수]` **Server Component 우선, `'use client'`는 최소 경계에**
  - 확인: 페이지 최상단에 `'use client'`가 붙어 트리 전체가 클라이언트로 넘어가지 않았는지

- [ ] `[권장]` **급하지 않은 업데이트는 `useTransition`**
  ```js
  const [isPending, startTransition] = useTransition();
  startTransition(() => setFilter(value)); // 입력 반응성 유지
  ```
  대상: 검색 필터링, 대량 리스트 정렬

- [ ] `[권장]` **TanStack Query 캐시 설정 점검**
  - `staleTime` 미설정 시 불필요한 재요청 발생
  - 서버 상태(Query)와 클라이언트 상태(Zustand)가 섞여 있지 않은지

- [ ] `[권장]` **긴 리스트는 가상화**
  - 100개 이상 렌더 시 `@tanstack/react-virtual` 검토

- [ ] `[상황]` **`useMemo`/`useCallback`은 측정 후에**
  - 남용하면 오히려 메모리와 비교 비용이 늘어납니다. 프로파일러로 확인된 지점에만.

---

## 6. GSAP / 애니메이션

- [ ] `[필수]` **`transform` / `opacity`만 애니메이션**
  ```js
  gsap.to(el, { x: 100 });        // ✅ 컴포지터 처리
  gsap.to(el, { left: 100 });     // ❌ 매 프레임 리플로우
  ```

- [ ] `[필수]` **인스턴스 cleanup**
  ```js
  useGSAP(() => {
    const st = ScrollTrigger.create({ /* ... */ });
    return () => st.kill();
  }, { scope: containerRef });
  ```
  확인: 페이지 이동을 반복해도 `ScrollTrigger.getAll().length`가 누적되지 않는지

- [ ] `[필수]` **ScrollTrigger 과다 생성 방지**
  ```js
  ScrollTrigger.batch('.card', { onEnter: batch => gsap.to(batch, { opacity: 1 }) });
  ```
  리스트 아이템마다 개별 생성하면 스크롤마다 전부 계산합니다.

- [ ] `[권장]` **`scrub: true` 대신 숫자값**
  - `scrub: 0.5` — 스무딩이 들어가면서 프레임 부하도 줄어듦

- [ ] `[권장]` **`refresh()` 호출 디바운스**
  - `resize`에서 직접 호출하지 말 것. 모바일 주소창 높이 변화로 과도하게 트리거됩니다.

- [ ] `[권장]` **`matchMedia()`로 조건부 초기화**
  - 모바일에서 불필요한 무거운 모션은 아예 생성하지 않기
  - `prefers-reduced-motion` 대응도 함께 (접근성 항목과 연결)

- [ ] `[상황]` **`will-change` 남용 금지**
  - GSAP이 자동 처리하므로 수동 지정 불필요. 남용 시 GPU 메모리 압박.

---

## 7. 정적 HTML/JS 프로젝트

- [ ] `[필수]` **ES Module + 번들러 사용**
  - 스크립트 파일을 `<script>`로 10개씩 나열하지 않기

- [ ] `[필수]` **CDN 라이브러리 최소화**
  - jQuery 하나 때문에 CDN을 부르고 있다면 제거 검토
  - 확인: 실제로 몇 개 함수를 쓰는지

- [ ] `[권장]` **공통 모듈은 `defer`로 하나만**
  ```html
  <script type="module" src="/js/main.js"></script>
  ```
  `type="module"`은 기본적으로 defer 동작합니다.

- [ ] `[권장]` **페이지별 스크립트 분리**
  - 전 페이지 공통 파일에 특정 페이지 전용 로직을 넣지 않기

---

## 8. 빌드 / 배포 설정

- [ ] `[필수]` **프로덕션 빌드에서 측정**
  - 개발 서버 기준 측정은 의미 없음 (소스맵, HMR, 미압축)

- [ ] `[필수]` **압축 활성화** — Brotli 우선, gzip 폴백

- [ ] `[필수]` **정적 자산 캐시 헤더**
  - 해시 파일명 + `Cache-Control: max-age=31536000, immutable`

- [ ] `[권장]` **`sideEffects: false` 선언** (자체 패키지)
  - tree shaking이 실제로 동작하도록. CSS import가 있으면 배열로 예외 지정.

- [ ] `[권장]` **소스맵 프로덕션 노출 여부 결정**
  - 사내 툴이면 유지, 외부 서비스면 hidden 처리

---

## 9. 릴리스 전 최종 확인

- [ ] 프로덕션 빌드 + **모바일 + Fast 3G + CPU 4x slowdown**으로 측정
- [ ] Long Task 50ms 초과 항목이 남아 있는지
- [ ] 주요 인터랙션(메뉴 열기, 탭 전환, 검색, 폼 제출) INP 200ms 이내
- [ ] 번들 예산 초과 여부
- [ ] 페이지 이동 반복 후 메모리 누수 없는지 (DevTools → Memory)
- [ ] Before/After 수치를 문서에 기록

---

## 부록 A. 자주 쓰는 명령어

```bash
# 번들 분석
ANALYZE=true npm run build          # Next.js
npx vite-bundle-visualizer          # Vite

# 패키지 용량 확인
npx bundlephobia <패키지명>

# 중복 의존성
npm ls <패키지명>

# 프로덕션 빌드 로컬 실행
npm run build && npm start
```

## 부록 B. DevTools 단축 경로

| 목적 | 위치 |
|---|---|
| 긴 태스크 / INP | Performance 패널 |
| 미사용 JS 비율 | 더보기 → Coverage |
| 리렌더 추적 | React DevTools → Profiler |
| 메모리 누수 | Memory → Heap snapshot 비교 |
| 서드파티 용량 | Network → 도메인 정렬 |

## 부록 C. 판단 기준

| 상황 | 판단 |
|---|---|
| 번들에 예상 못 한 모듈이 1등 | 최우선 처리 |
| 미사용 JS 50% 이상 | 코드 스플리팅 |
| 서드파티 > 자사 번들 | 로딩 전략부터 조정 |
| INP만 나쁨 | 긴 태스크 · 이벤트 핸들러 |
| LCP만 나쁨 | JS보다 이미지 · 폰트 먼저 확인 |
| CLS만 나쁨 | JS 문제 아님 — 이미지 크기 · 폰트 메트릭 |

---

**버전** 1.0
**적용 범위** Next.js / React / 정적 HTML 프로젝트 공통
**연관 문서** 성능 예산(`performance-budget.md`), 접근성 체크리스트, 퍼블리싱 가이드
