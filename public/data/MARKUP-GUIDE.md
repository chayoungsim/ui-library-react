# 마크업 가이드 (Markup Guide)

정적 HTML/SCSS/JS 퍼블리싱 프로젝트의 마크업 컨벤션 문서입니다.
컴포넌트별 실제 마크업 예시는 `guide.html`에서 확인합니다.

---

## 1. 기본 원칙

- **시맨틱 우선**: 의미에 맞는 태그를 먼저 고르고, 마땅한 태그가 없을 때만 `div`/`span`을 쓴다.
- **구조와 표현의 분리**: HTML은 구조만, 스타일은 SCSS, 동작은 JS가 담당한다. 인라인 스타일 금지.
- **접근성은 기본값**: 스크린 리더와 키보드만으로 모든 콘텐츠에 접근 가능해야 한다.
- **일관성 > 취향**: 이 문서와 다른 방식이 더 낫다고 판단되면 문서를 먼저 고치고 코드에 적용한다.

---

## 2. 문서 기본 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="페이지 설명">
  <title>페이지명 | 사이트명</title>
  <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
  <p id="accessibility"><a href="#content">본문 바로가기</a></p>
  <div class="wrap">
    <header class="header">...</header>
    <div id="container">
      <main id="content">...</main>
    </div>
    <footer class="footer">...</footer>
  </div>
  <script src="./assets/js/common.js" defer></script>
</body>
</html>
```

- `lang="ko"` 필수. 다국어 페이지는 해당 언어 코드로 지정.
- `<title>`은 `페이지명 | 사이트명` 순서로 통일.
- 스크립트는 `defer`를 붙여 `</body>` 직전 또는 `<head>`에 배치.

---

## 3. 시맨틱 마크업

| 용도 | 태그 |
| --- | --- |
| 페이지/섹션 머리말 | `header` |
| 주요 내비게이션 | `nav` |
| 페이지 핵심 콘텐츠 (페이지당 1개) | `main` |
| 주제 단위 구획 | `section` (반드시 제목 요소 포함) |
| 독립적으로 배포 가능한 콘텐츠 | `article` |
| 부가 콘텐츠 | `aside` |
| 바닥글 | `footer` |
| 클릭 동작 | `button` (`div`에 클릭 이벤트 금지) |
| 페이지 이동 | `a` |

### 제목(heading) 규칙

- `h1`은 페이지당 1개.
- 레벨을 건너뛰지 않는다 (`h2` 다음에 `h4` 금지).
- 디자인상 제목이 안 보여야 하면 `display: none`이 아니라 `.sr-only`로 숨긴다.

---

## 4. 클래스 네이밍

**BEM 변형(kebab-case)** 을 사용한다.

```
.block {}                /* 컴포넌트 */
.block__element {}       /* 컴포넌트의 하위 요소 */
.block--modifier {}      /* 변형 */
```

### 접두사 규칙

| 접두사 | 용도 | 예시 |
| --- | --- | --- |
| `l-` | 레이아웃 | `.l-container`, `.l-grid` |
| `is-` / `has-` | JS로 토글되는 상태 | `.is-active`, `.is-open`, `.has-error` |
| `u-` | 단일 목적 유틸리티 | `.u-hidden`, `.u-text-center` |
| `js-` | JS 훅 전용 (스타일 금지) | `.js-modal-open` |

### 금지 사항

- 스타일 값 자체를 이름에 쓰지 않는다: `.mt20`, `.red-text` ❌
- 축약어 남발 금지: `.btn`, `.nav`처럼 통용되는 것만 허용.
- `js-` 클래스에 CSS를 걸지 않는다. 스타일용 클래스와 훅용 클래스를 분리한다.

---

## 5. 접근성 (A11y)

- **이미지**: 정보성 이미지는 내용을 설명하는 `alt`, 장식용은 `alt=""`.
- **폼**: 모든 입력 요소는 `label`과 `for`/`id`로 연결. placeholder는 label의 대체제가 아니다.
- **버튼/링크**: 아이콘만 있는 버튼은 `.sr-only` 텍스트 또는 `aria-label` 제공.
- **포커스**: `outline: none` 단독 사용 금지. 제거하면 반드시 대체 포커스 스타일 제공.
- **건너뛰기 링크**: 본문 시작(`#content`)으로 가는 skip link를 `body` 최상단에 배치.
- **ARIA 최소 사용**: 네이티브 태그로 해결되면 ARIA를 쓰지 않는다. (예: `role="button"`인 `div` 대신 `button`)

```html
<!-- 화면에서 숨기고 스크린 리더에는 읽히는 유틸 -->
<span class="sr-only">메뉴 열기</span>
```

```scss
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip-path: inset(50%);
  overflow: hidden;
}
```

---

## 6. 이미지·미디어

- `img`에는 `width`/`height` 속성을 명시해 CLS(레이아웃 밀림)를 방지한다.
- 뷰포트 밖 이미지는 `loading="lazy"`.
- 포맷은 `picture` + WebP 우선, JPG/PNG 폴백.
- 배경 이미지(CSS)는 순수 장식일 때만 사용. 의미 있는 이미지는 `img`로.
- 자동재생 비디오는 `muted autoplay playsinline loop` 세트로. 소리는 사용자 동작으로만 켠다.

```html
<picture>
  <source srcset="./img/hero.webp" type="image/webp">
  <img src="./img/hero.jpg" alt="서비스 메인 화면" width="1200" height="600" loading="lazy">
</picture>
```

---

## 7. 폼 마크업

- 논리적 그룹은 `fieldset` + `legend`로 묶는다.
- 필수 입력은 `required` + 시각적 표시(`*`)를 함께 제공.
- 오류 메시지는 `aria-describedby`로 입력 요소와 연결하고, 오류 상태는 `.has-error` 클래스로 표시.

```html
<div class="form-field has-error">
  <label for="user-email" class="form-field__label">이메일 <em class="form-field__required">*</em></label>
  <input type="email" id="user-email" class="form-field__input"
         required aria-describedby="user-email-error">
  <p class="form-field__message" id="user-email-error">이메일 형식이 올바르지 않습니다.</p>
</div>
```

---

## 8. 포맷·주석

- 들여쓰기: **스페이스 4칸**.
- 속성 순서: `class` → `id` → `name` → `type/src/href` → 기타 → `aria-*`/`data-*`.
- 큰따옴표(`"`) 사용.
- 섹션 주석으로 구획을 표시한다.

```html
<!-- section : visual -->
<section class="visual">
  ...
</section>
<!-- // section : visual -->
```

---

## 9. 폴더 구조

```
project/
├── index.html              # 마크업 리스트
├── guide.html              # 마크업 가이드 페이지
├── assets/
│   ├── css/                # 컴파일된 CSS
│   ├── scss/
│   │   ├── abstracts/      # 변수, 믹스인
│   │   ├── base/           # reset, 타이포, 공통
│   │   ├── components/     # 버튼, 폼, 카드 ...
│   │   ├── layout/         # header, footer, grid
│   │   └── pages/          # 페이지 전용
│   ├── js/
│   └── images/
└── pages/
│    │── main/
│    │   └── index.html     # 메인페이지
│    ├── sub/               
└── docs/
    └── MARKUP-GUIDE.md     # 이 문서
```

---

## 10. 셀프 체크리스트

배포 전 아래를 확인한다.

- [ ] `h1`이 1개이고 heading 레벨이 순서대로인가
- [ ] 모든 `img`에 적절한 `alt`가 있는가
- [ ] 모든 폼 요소가 `label`과 연결되어 있는가
- [ ] 키보드(Tab)만으로 모든 기능을 쓸 수 있는가
- [ ] 포커스 표시가 눈에 보이는가
- [ ] 클릭 요소가 전부 `button`/`a`인가
- [ ] `is-*` 상태 클래스 외에 JS가 스타일을 직접 조작하지 않는가
- [ ] axe / Lighthouse 접근성 점검을 통과했는가
