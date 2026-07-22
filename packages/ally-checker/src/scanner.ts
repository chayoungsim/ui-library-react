import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { chromium, type Browser } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';
import axe, { type AxeResults, type RunOptions, type Locale } from 'axe-core';
import koLocale from 'axe-core/locales/ko.json' with { type: 'json' };
import * as ejs from 'ejs';

interface ScanOptions {
  url: string;
  /** HTML 리포트를 저장할 경로 */
  output?: string;
  /** axe-core에 전달할 옵션 */
  axeOptions?: RunOptions;
}

/**
 * 지정된 URL의 웹 접근성을 검사하고 결과를 반환합니다.
 * @param options 검사 옵션 (URL 등)
 * @returns Axe-core 검사 결과
 */
export async function scanUrl(options: ScanOptions): Promise<AxeResults> {
  let browser: Browser | null = null;
  try {
    // 1. Playwright 브라우저 실행
    browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // 2. 지정된 URL로 이동
    await page.goto(options.url, { waitUntil: 'networkidle' });

    // 3. AxeBuilder를 사용하여 접근성 검사 실행 (일반적인 WCAG AA 표준 기준)
    const axeBuilder = new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);

    const results = await axeBuilder.options(options.axeOptions || {}).analyze();

    // 4. 검사 결과(위반 사항)를 콘솔에 간단히 출력
    // Node 쪽 axe-core 인스턴스에 한국어 locale을 적용하여 규칙 설명을 한국어로 가져옵니다.
    axe.configure({ locale: koLocale as unknown as Locale });
    const axeRules = axe.getRules(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice']);

    console.log('\n--- 접근성 위반 항목 ---');
    if (results.violations.length === 0) {
      console.log('🎉 위반 사항이 발견되지 않았습니다!');
    } else {
      results.violations.forEach((violation, index) => {
        const rule = axeRules.find(r => r.ruleId === violation.id);
        console.log(`\n${index + 1}. [${violation.impact?.toUpperCase()}] ${rule?.help || violation.id}`);
        console.log(`   - 설명: ${violation.help}`);
        console.log(`   - 도움말: ${violation.helpUrl}`);
        console.log(`   - 영향 받는 요소: ${violation.nodes.length}개`);
      });
    }

    // 5. HTML 리포트 생성 (output 경로가 지정된 경우)
    if (options.output) {
      const currentDir = path.dirname(fileURLToPath(import.meta.url));
      const templatePath = path.resolve(currentDir, 'templates', 'report.ejs');
      const template = fs.readFileSync(templatePath, 'utf-8');

      const reportHtml = ejs.render(template, {
        url: results.url,
        timestamp: new Date(results.timestamp).toLocaleString('ko-KR'),
        violations: results.violations,
        passes: results.passes,
        incomplete: results.incomplete,
        inapplicable: results.inapplicable,
      });

      fs.writeFileSync(options.output, reportHtml);
      console.log(`\n📄 HTML 리포트가 생성되었습니다: ${options.output}`);
    }

    return results;
  } finally {
    // 5. 브라우저 종료
    await browser?.close();
  }
}