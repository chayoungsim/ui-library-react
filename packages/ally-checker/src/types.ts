import type { RunOptions } from 'axe-core';

export interface AllyCheckerConfig {
  /** 검사할 페이지 URL 목록 */
  urls: string[];
  /** 결과 리포트를 저장할 폴더 */
  outputDir: string;
  /** axe-core에 전달할 옵션 */
  axe?: RunOptions;
}