# 프로젝트 컨벤션

## 필수 참조 문서
- 마크업/네이밍: ./docs/publishing-guide.md
- 접근성: ./docs/accessibility-checklist.md (KWCAG 2.2)
- 성능: ./docs/js-performance-checklist.md
- 컴포넌트: ./docs/guide.html

## 코드 생성 시 반드시 지킬 것
- 클래스 네이밍: BEM 축약형, 접두사 규칙(ui-/l-/js-/is-)
- 색상·간격·z-index는 토큰만 사용, 하드코딩 금지
- 모든 이미지에 width/height, 첫 화면은 fetchpriority="high"
- 버튼은 type 명시, div에 클릭 이벤트 금지
- GSAP은 cleanup 필수, transform/opacity만 애니메이션