# ui-library

React 19 + TypeScript + SCSS 기반 사내 UI 컴포넌트 라이브러리입니다.

## 시작하기

```bash
npm install
```

## 개발

컴포넌트를 브라우저에서 직접 확인할 수 있는 데모 앱(`src/App.tsx`)을 실행합니다.

```bash
npm run dev
```

## Storybook

컴포넌트 카탈로그와 문서를 확인합니다.

```bash
npm run storybook          # 개발 서버 (http://localhost:6006)
npm run build-storybook    # 정적 산출물 빌드 (storybook-static/)
```

## 테스트

```bash
npm run test          # 전체 테스트 1회 실행
npm run test:watch    # watch 모드
```

## 린트 / 포맷

```bash
npm run lint             # ESLint (ts/tsx)
npm run lint:style       # Stylelint (scss)
npm run lint:style:fix
npm run format           # Prettier 전체 적용
npm run format:check
```

## 빌드

```bash
npm run build       # 데모 앱(SPA) 빌드
npm run build:lib   # 라이브러리 배포용 빌드 (dist/에 ESM/CJS + 타입 선언 + CSS 생성)
```

> `package.json`은 현재 `"private": true`로 배포가 비활성화되어 있습니다. 배포처(사내 npm 레지스트리 등)가 정해지면 `private` 필드를 조정하세요.

## 컴포넌트 작성 표준

새 컴포넌트를 추가할 때는 [`src/components/README.md`](src/components/README.md)의 폴더 구조와 규칙(forwardRef, 타입 분리, 배럴 export, BEM 스타일)을 따르세요. `Button` 컴포넌트가 참고 구현입니다.

## 현재 구현 상태

- 실구현: `Button`
- 스캐폴딩(빈 폴더, 미구현): `Accordion`, `Breadcrumb`, `Checkbox`, `Input`, `Modal`, `Pagination`, `Radio`, `Select`, `Table`, `Tabs`, `Tooltip`

## 기타 문서

- [`docs/roadmap.md`](docs/roadmap.md): 사내 조직 차원의 로드맵/아이디어 메모
