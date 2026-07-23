# 퍼블리싱 가이드

> 사내 퍼블리싱 작업의 공통 규칙 문서입니다.
> **목적은 "잘 만드는 것"이 아니라 "누가 만들어도 같게 만드는 것"입니다.**
> 다른 사람의 작업물을 열었을 때 구조를 짐작할 수 있고, 인수인계 없이 이어받을 수 있으면 성공입니다.

**문서 체계에서의 위치**

| 문서 | 다루는 것 |
|---|---|
| **퍼블리싱 가이드** (이 문서) | 마크업·네이밍·구조 컨벤션 — 어떻게 쓸 것인가 |
| 공통 UI 라이브러리 | 재사용 컴포넌트 — 무엇을 쓸 것인가 |
| UI패턴 모음 | 화면 단위 조합 패턴 |
| 접근성 체크리스트 | KWCAG 2.2 기준 점검 항목 |
| JS 최적화 체크리스트 | 성능 점검 항목 |
| guide.html | 위 내용의 실행 가능한 예시 |

접근성과 성능은 각 체크리스트에 있으므로 이 문서에서는 반복하지 않습니다.

---

## 1. 기본 원칙

1. **의미가 먼저, 모양은 나중** — 태그는 역할로 고르고 생김새는 CSS로 만듭니다
2. **규칙 > 취향** — 더 나은 방법이 있어도 팀 규칙을 따릅니다. 바꾸고 싶으면 문서를 먼저 고칩니다
3. **예측 가능하게** — 남이 파일 이름만 보고 내용을 짐작할 수 있어야 합니다
4. **적을수록 좋다** — 불필요한 wrapper `div`, 안 쓰는 클래스, 죽은 코드는 남기지 않습니다
5. **결정은 문서에** — "왜 이렇게 했더라"를 두 번 묻게 되면 그건 문서에 없다는 뜻입니다

---

## 2. 폴더 구조

### 2-1. 정적 프로젝트 (HTML / SCSS / JS)

```
project/
├── src/
│   ├── html/
│   │   ├── index.html
│   │   ├── sub/                  # depth별 하위 폴더
│   │   └── include/              # header, footer 등 공통 조각
│   ├── scss/
│   │   ├── base/                 # reset, typography, base
│   │   ├── abstracts/            # variables, mixins, functions
│   │   ├── layout/               # header, footer, container, grid
│   │   ├── components/           # button, form, modal, tab...
│   │   ├── pages/                # 특정 페이지 전용
│   │   └── style.scss            # 엔트리 (@use만 나열)
│   ├── js/
│   │   ├── common.js             # 전 페이지 공통
│   │   ├── modules/              # 기능 단위 모듈
│   │   └── pages/                # 페이지 전용
│   ├── images/
│   │   ├── common/
│   │   ├── icon/
│   │   └── sub/
│   └── fonts/
├── dist/                         # 빌드 결과물 (git 제외)
├── docs/
│   └── guide.html                # 마크업 가이드 페이지
└── README.md
```

### 2-2. React / Next.js 프로젝트

```
src/
├── app/                          # App Router
├── components/
│   ├── ui/                       # 공통 UI 라이브러리에서 가져온 것
│   ├── layout/                   # Header, Footer, Container
│   └── features/                 # 도메인별 컴포넌트
├── hooks/
├── lib/                          # 유틸, API 클라이언트
├── stores/                       # Zustand
├── styles/
│   ├── abstracts/
│   ├── base/
│   └── globals.scss
├── types/
└── constants/
```

**규칙**
- `components/ui/`는 **직접 수정하지 않습니다.** 고쳐야 하면 라이브러리 레포에서 고치고 다시 가져옵니다
- 한 폴더에 파일이 10개를 넘으면 하위 폴더로 분리합니다
- `utils.ts` 같은 만능 파일을 만들지 않습니다. 용도별로 나눕니다 (`format.ts`, `validate.ts`)

---

## 3. 네이밍

### 3-1. 파일 · 폴더

| 대상 | 규칙 | 예시 |
|---|---|---|
| HTML | 케밥 케이스 | `company-intro.html` |
| SCSS 파셜 | 언더스코어 + 케밥 | `_button-group.scss` |
| JS 모듈 | 케밥 케이스 | `scroll-observer.js` |
| React 컴포넌트 | 파스칼 케이스 | `ProductCard.tsx` |
| React 훅 | `use` + 카멜 | `useScrollLock.ts` |
| 이미지 | 케밥 + 용도 접두 | `bg-main-visual.jpg`, `ico-arrow-right.svg` |
| 폴더 | 케밥 케이스, 복수형 | `components/`, `images/` |

이미지 접두사: `bg-` 배경 / `ico-` 아이콘 / `img-` 콘텐츠 이미지 / `logo-` 로고 / `btn-` 버튼 이미지

### 3-2. 클래스 네이밍

**BEM 기반의 축약형**을 씁니다.

```
.block__element--modifier
```

```html
<div class="card">
  <div class="card__thumb">
    <img class="card__image" src="..." alt="...">
  </div>
  <div class="card__body">
    <h3 class="card__title">제목</h3>
    <p class="card__text">설명</p>
  </div>
</div>
```

**접두사 규칙**

| 접두사 | 용도 | 예시 |
|---|---|---|
| `ui-` | 공통 UI 라이브러리 컴포넌트 | `.ui-button`, `.ui-input` |
| (없음) | 프로젝트 전용 컴포넌트 | `.card`, `.main-visual` |
| `l-` | 레이아웃 | `.l-header`, `.l-container` |
| `js-` | **JS에서만 사용하는 훅** (스타일 금지) | `.js-modal-open` |
| `is-` / `has-` | 상태 | `.is-active`, `.has-error` |

```html
<!-- 스타일과 동작의 관심사 분리 -->
<button class="ui-button ui-button--primary js-modal-open" data-target="#login">
```

`js-` 클래스에는 절대 스타일을 주지 않습니다. 디자인 변경 시 JS가 깨지는 걸 막기 위해서입니다.

**금지**

```html
<!-- ❌ 모양을 이름에 넣지 않기 -->
<p class="red-text font-14 mt-20">

<!-- ❌ 의미 없는 이름 -->
<div class="box1"> <div class="wrap2"> <div class="txt">
```

`red-text`는 색이 바뀌는 순간 거짓말이 됩니다. 역할로 이름을 붙이세요 (`.notice-text`, `.error-message`).

### 3-3. 상태 클래스

```scss
.ui-accordion {
  &__panel { max-height: 0; }
  &.is-open &__panel { max-height: 500px; }
}
```

`is-active`, `is-open`, `is-disabled`, `is-loading`, `is-fixed`, `has-error`, `has-children`

---

## 4. HTML 마크업

### 4-1. 문서 기본 골격

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>페이지명 | 사이트명</title>
  <meta name="description" content="">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <a href="#main" class="skip-nav">본문 바로가기</a>
  <header class="l-header">...</header>
  <main id="main" tabindex="-1">...</main>
  <footer class="l-footer">...</footer>
  <script src="/js/common.js" defer></script>
</body>
</html>
```

`<title>`은 페이지마다 다르게, `lang` 속성 필수, `user-scalable=no` 금지.

### 4-2. 태그 선택 기준

| 상황 | 사용 | 사용 금지 |
|---|---|---|
| 클릭 시 페이지 이동 | `<a href>` | `<button>`, `<div>` |
| 클릭 시 동작 실행 | `<button type="button">` | `<a href="#">`, `<div>` |
| 폼 전송 | `<button type="submit">` | `<button>` (type 생략) |
| 목록 | `<ul>` / `<ol>` / `<dl>` | `<div>` 반복 |
| 데이터 표 | `<table>` | `<div>` 그리드 |
| 레이아웃 | `<div>`, flex/grid | `<table>` |
| 강조 | `<strong>` / `<em>` | `<b>` / `<i>` (아이콘 폰트 제외) |
| 본문 영역 | `<main>` (페이지당 1개) | `<div id="container">` |

**`<a href="#">`에 `preventDefault()`를 거는 패턴은 쓰지 않습니다.** 동작이라면 `<button>`입니다.

### 4-3. 속성 작성 순서

```html
<a
  class="..."          <!-- 1. class -->
  id="..."             <!-- 2. id -->
  data-*="..."         <!-- 3. data -->
  href="..."           <!-- 4. 기능 속성 (href, src, type, value) -->
  title="..."          <!-- 5. 부가 속성 -->
  aria-*="..."         <!-- 6. 접근성 속성 -->
  role="..."
>
```

### 4-4. 들여쓰기 · 주석

- 들여쓰기 **2 스페이스**
- 속성이 5개를 넘거나 한 줄이 120자를 넘으면 줄바꿈

```html
<!-- // 주요 콘텐츠 영역 -->
<section class="main-content">
  ...
</section>
<!-- //. 주요 콘텐츠 영역 -->
```

여는 주석은 `<!-- // 이름 -->`, 닫는 주석은 `<!-- //. 이름 -->`. 대형 영역에만 사용하고 모든 블록에 달지 않습니다.

### 4-5. 금지 패턴

```html
<!-- ❌ 인라인 스타일 -->
<div style="margin-top:20px">

<!-- ❌ 인라인 이벤트 -->
<button onclick="openModal()">

<!-- ❌ 의미 없는 wrapper 중첩 -->
<div><div><div><p>텍스트</p></div></div></div>

<!-- ❌ 빈 요소로 여백 만들기 -->
<br><br><br>
<div class="blank"></div>

<!-- ❌ id 중복 -->
```

---

## 5. CSS / SCSS

### 5-1. 엔트리 구조

```scss
// style.scss — @use만 나열, 실제 스타일 작성 금지
@use 'abstracts/variables';
@use 'abstracts/mixins';

@use 'base/reset';
@use 'base/typography';

@use 'layout/header';
@use 'layout/footer';

@use 'components/button';
@use 'components/form';
@use 'components/modal';

@use 'pages/main';
```

**CSS 파일 안에서 `@import`를 쓰지 않습니다** (직렬 로딩 발생). SCSS의 `@use`/`@forward`는 빌드 시 합쳐지므로 문제없습니다.

### 5-2. 토큰

색상·간격·radius·그림자·z-index는 **반드시 토큰을 경유**합니다.

```scss
// ❌
.card { background: #2563eb; padding: 16px; z-index: 100; }

// ✅
.card {
  background: var(--color-primary);
  padding: var(--space-4);
  z-index: var(--z-dropdown);
}
```

토큰은 primitive → semantic 2단계이며, 컴포넌트에서는 **semantic만** 참조합니다.

```css
:root {
  /* primitive */
  --blue-500: #2563eb;
  --gray-200: #e5e7eb;

  /* semantic */
  --color-primary: var(--blue-500);
  --color-border-default: var(--gray-200);

  /* z-index — 전역 관리 필수 */
  --z-base: 1;
  --z-sticky: 100;
  --z-dropdown: 200;
  --z-header: 300;
  --z-modal-backdrop: 900;
  --z-modal: 1000;
  --z-toast: 1100;
}
```

**`z-index: 9999`를 쓰는 순간 규칙이 무너집니다.** 필요한 층이 없으면 토큰을 추가하세요.

### 5-3. 중첩 깊이

**최대 3단계.** 그 이상은 선택자가 길어지고 재사용이 불가능해집니다.

```scss
// ✅
.card {
  &__title { ... }
  &__body {
    p { ... }
  }
  &.is-active { ... }
}

// ❌
.wrap { .inner { .list { li { a { span { ... } } } } } }
```

`&__element` 형태의 BEM 연결은 파일 내 검색이 안 되므로, **주요 블록은 전체 이름을 한 번씩 적어두거나** 주석을 답니다.

### 5-4. 단위

| 용도 | 단위 |
|---|---|
| 글자 크기 | `rem` |
| 여백 (margin, padding) | `rem` 또는 토큰 |
| 테두리, 미세 조정 | `px` |
| 컴포넌트 내부 상대 크기 | `em` |
| 레이아웃 너비 | `%`, `vw`, `fr` |
| 미디어쿼리 | `px` |

`html { font-size: 62.5% }` 트릭은 쓰지 않습니다. 사용자 브라우저 폰트 설정을 무시하게 됩니다.

### 5-5. 반응형

**모바일 퍼스트**(`min-width`)를 기본으로 합니다.

```scss
$breakpoints: (
  'sm':  640px,   // 대형 모바일
  'md':  768px,   // 태블릿
  'lg':  1024px,  // 소형 데스크톱
  'xl':  1280px,  // 데스크톱
  'xxl': 1536px   // 대형 데스크톱
);

@mixin mq($key) {
  @media (min-width: map-get($breakpoints, $key)) { @content; }
}

.card {
  padding: var(--space-4);
  @include mq('md') { padding: var(--space-6); }
}
```

미디어쿼리는 **해당 선택자 안에** 작성합니다. 파일 하단에 몰아쓰면 유지보수가 어렵습니다.

기존 프로젝트가 데스크톱 퍼스트라면 일관성을 위해 그대로 유지하되, 신규 프로젝트는 모바일 퍼스트로 시작합니다.

### 5-6. Tailwind와 병행할 때

| 용도 | 도구 |
|---|---|
| 컴포넌트 스타일 | SCSS 클래스 (`.ui-button`) |
| 레이아웃·간격·정렬 | Tailwind 유틸리티 |
| 디자인 토큰 | CSS 변수 (양쪽이 공유) |

컴포넌트를 Tailwind로 짜면 정적 프로젝트와 스타일을 공유할 수 없습니다. **컴포넌트는 SCSS, 배치는 Tailwind**가 기본 원칙입니다.

### 5-7. 작성 순서

한 선택자 안에서 속성을 이 순서로 씁니다.

1. 레이아웃 — `display`, `position`, `top/right/bottom/left`, `z-index`, `flex`, `grid`
2. 박스 — `width`, `height`, `margin`, `padding`
3. 타이포 — `font`, `line-height`, `color`, `text-*`
4. 배경·테두리 — `background`, `border`, `border-radius`, `box-shadow`
5. 기타 — `transform`, `transition`, `animation`, `cursor`, `overflow`

Stylelint의 `stylelint-config-idiomatic-order`로 자동화합니다.

### 5-8. 금지 패턴

```scss
// ❌ !important (유틸리티 클래스 제외)
.title { color: red !important; }

// ❌ 요소 선택자 단독 사용
div { margin: 0; }

// ❌ id 선택자로 스타일
#header { ... }

// ❌ 매직 넘버
.header { top: -37px; }   // 이 37은 어디서 왔는가?

// ❌ 애니메이션에 레이아웃 속성
.box { transition: left 0.3s, width 0.3s; }   // transform/opacity만
```

---

## 6. JavaScript

상세한 성능 규칙은 **JS 최적화 체크리스트**를 참고하고, 여기서는 작성 규칙만 다룹니다.

### 6-1. DOM 선택

```js
// ✅ js- 클래스 또는 data 속성을 훅으로
const openBtns = document.querySelectorAll('.js-modal-open');
const tabs = document.querySelectorAll('[data-tab]');

// ❌ 스타일 클래스를 훅으로 사용 (디자인 변경 시 깨짐)
const btn = document.querySelector('.ui-button--primary');
```

### 6-2. 이벤트

```js
// 이벤트 위임 — 개별 리스너 대신
list.addEventListener('click', (e) => {
  const item = e.target.closest('[data-item]');
  if (!item) return;
  // ...
});

// 스크롤 리스너는 passive
window.addEventListener('scroll', onScroll, { passive: true });
```

### 6-3. 모듈 구조

```js
// modules/accordion.js
export function initAccordion(root = document) {
  const items = root.querySelectorAll('[data-accordion]');
  if (!items.length) return;   // 해당 요소 없으면 즉시 종료

  items.forEach(/* ... */);

  return () => { /* cleanup */ };
}
```

- 파일 하나 = 기능 하나
- **요소가 없으면 즉시 반환** — 전 페이지 공통 파일에서 특히 중요합니다
- 초기화 함수는 정리(cleanup) 함수를 반환합니다

### 6-4. GSAP

```js
// 인스턴스는 반드시 정리
const ctx = gsap.context(() => {
  gsap.to('.box', { x: 100 });
  ScrollTrigger.create({ /* ... */ });
}, containerRef);

// 페이지 이탈 시
ctx.revert();
```

- 애니메이션 속성은 `x`/`y`/`opacity`/`scale`만 (`left`/`top`/`width` 금지)
- 반응형 분기는 `gsap.matchMedia()` 사용
- `prefers-reduced-motion` 대응 필수 (접근성 체크리스트 8번 참고)
- ScrollTrigger는 리스트마다 개별 생성하지 말고 `batch()` 사용

---

## 7. React / Next.js 추가 규칙

### 7-1. 컴포넌트 파일

```
components/features/ProductCard/
├── index.ts              # export만
├── ProductCard.tsx
├── ProductCard.module.scss
└── ProductCard.types.ts   # 타입이 길 때만 분리
```

컴포넌트가 200줄을 넘으면 분리를 검토합니다.

### 7-2. 작성 순서

```tsx
export default function ProductCard({ product, onSelect }: Props) {
  // 1. 훅
  const [isOpen, setIsOpen] = useState(false);
  const price = useStore((s) => s.price);   // Zustand는 selector로

  // 2. 파생 값
  const discounted = product.price * 0.9;

  // 3. 이벤트 핸들러
  const handleClick = () => { ... };

  // 4. 이펙트
  useEffect(() => { ... }, []);

  // 5. 조기 반환
  if (!product) return null;

  // 6. JSX
  return ( ... );
}
```

### 7-3. 규칙

- `'use client'`는 **필요한 최소 컴포넌트에만.** 페이지 최상단에 붙이면 트리 전체가 클라이언트로 넘어갑니다
- 이벤트 핸들러는 `handle*`, props로 받는 콜백은 `on*`
- boolean props는 `is*` / `has*` / `can*`
- 절대 경로 import 사용 (`@/components/...`)
- `useMemo`/`useCallback`은 프로파일러로 확인한 뒤에만

---

## 8. 이미지 · 에셋

- 포맷: **AVIF > WebP > JPEG/PNG** 순 폴백, 아이콘은 SVG
- 모든 `<img>`에 `width`/`height` 속성 (CLS 방지)
- 첫 화면 이미지는 `fetchpriority="high"`, 그 외는 `loading="lazy"`
- Next.js에서는 `next/image` 사용, raw `<img>` 금지
- SVG 아이콘은 인라인 또는 스프라이트. 아이콘 폰트는 신규 사용 금지
- 이미지 파일명에 한글·공백·대문자 사용 금지

---

## 9. 지원 브라우저

| 브라우저 | 범위 |
|---|---|
| Chrome / Edge | 최신 2개 버전 |
| Safari | 최신 2개 버전 (iOS 포함) |
| Firefox | 최신 2개 버전 |
| Samsung Internet | 최신 2개 버전 |

IE는 지원하지 않습니다. 프로젝트별로 다르면 `.browserslistrc`에 명시하고 이 표를 갱신하세요.

> 지원 범위를 넓게 잡으면 polyfill이 늘어 번들이 커집니다. 실제 요구사항 없이 관성으로 넓히지 않습니다.

---

## 10. Git

**Conventional Commits**를 따릅니다.

```
feat: 상품 카드 컴포넌트 추가
fix: iOS에서 모달 스크롤 잠김 해제되지 않는 문제 수정
style: 버튼 hover 색상 토큰으로 교체
refactor: 아코디언 모듈 구조 정리
docs: 퍼블리싱 가이드 네이밍 규칙 추가
chore: 이미지 최적화 스크립트 추가
```

브랜치: `feature/product-card`, `fix/modal-scroll-lock`

---

## 11. 작업 완료 전 확인

작업물을 넘기기 전 이 5가지만 확인합니다. 상세 점검은 각 체크리스트로.

- [ ] Tab 키만으로 전체 조작 가능하고 초점이 항상 보이는가
- [ ] 브라우저 200% 확대 시 깨지지 않는가
- [ ] 마크업 문법 오류 · `id` 중복이 없는가
- [ ] 하드코딩된 색상·간격·z-index가 남아 있지 않은가
- [ ] 콘솔에 에러·경고가 없는가

전체 점검: [접근성 체크리스트](./accessibility-checklist.md) · [JS 최적화 체크리스트](./js-performance-checklist.md)

---

## 부록. 자주 쓰는 스니펫

**sr-only** (시각적으로 숨기되 스크린리더는 읽음)
```scss
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
```

**말줄임**
```scss
@mixin ellipsis($lines: 1) {
  @if $lines == 1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } @else {
    display: -webkit-box;
    -webkit-line-clamp: $lines;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
```

**종횡비 유지**
```scss
.thumb {
  aspect-ratio: 16 / 9;
  img { width: 100%; height: 100%; object-fit: cover; }
}
```

**모션 축소 대응**
```scss
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

**버전** 1.0
**적용 범위** 정적 HTML / React / Next.js 프로젝트 공통
**갱신 규칙** 규칙을 바꾸려면 이 문서를 먼저 수정하고 팀에 공유합니다. 코드가 먼저 바뀌고 문서가 따라오면 이 문서는 죽습니다.
