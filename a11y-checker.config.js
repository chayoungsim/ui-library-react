/** @type {import('@your-company/ally-checker').AllyCheckerConfig} */
module.exports = {
  // 검사할 페이지 URL 목록
  // 로컬 개발 서버를 실행한 후의 주소를 사용합니다.
  urls: [
    'http://localhost:6006/?path=/docs/components-button--docs',
    'http://localhost:6006/?path=/docs/components-input--docs',
    'http://localhost:6006/?path=/docs/components-pagination--docs',
  ],

  // 결과 리포트를 저장할 폴더
  outputDir: 'a11y-reports',

  // 특정 규칙 제외 (선택 사항)
  // axe: {
  //   rules: { 'color-contrast': { enabled: false } },
  // },
}
