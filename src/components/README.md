# 컴포넌트 작성 표준

모든 컴포넌트는 아래 폴더 구조를 따릅니다 (`Button`을 참고 구현으로 사용하세요).

```
src/components/<ComponentName>/
  index.ts                    # 배럴: export { default } / export type
  <ComponentName>.tsx          # forwardRef 구현, 스타일 import
  <ComponentName>.types.ts     # Props 인터페이스 (JSDoc 포함)
  <ComponentName>.scss         # BEM 스타일
```

## 규칙

- **forwardRef**: DOM 엘리먼트에 접근해야 하는 컴포넌트는 `forwardRef`로 ref를 전달합니다.
- **타입 분리**: Props 인터페이스는 `<ComponentName>.types.ts`에 정의하고 컴포넌트 파일에서 `import type`으로 가져옵니다.
- **배럴 export**: 외부에서는 항상 `./components/<ComponentName>` 형태로 import합니다 (`<ComponentName>.tsx`를 직접 참조하지 않음).
- **스타일**: BEM 네이밍(`block__element--modifier`)을 사용한 SCSS. 디자인 토큰은 `src/styles/foundation`의 CSS 커스텀 프로퍼티(`var(--color-primary)` 등)를 사용합니다.

