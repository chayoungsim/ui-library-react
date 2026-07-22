#!/usr/bin/env node

import { promises as fs } from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';
import { Command } from 'commander';
import packageJson from '../package.json' with { type: 'json' };
import { scanUrl } from './scanner.js';
import type { AllyCheckerConfig } from './types.js';

const program = new Command();

program
  .name('ally-check')
  .description('웹 접근성 자동 검사 및 리포팅 도구')
  .version(packageJson.version);

program
  .command('check [url]')
  .description('지정한 URL의 웹 접근성을 검사합니다.')
  .option('-o, --output <file>', '검사 결과를 저장할 HTML 리포트 파일 경로 (단일 URL 검사 시)')
  .option('-c, --config <path>', '사용할 설정 파일 경로 (기본값: ./a11y-checker.config.js)')
  .action(async (url: string | undefined, options: { output?: string; config?: string }) => {
    if (url) {
      // 1. 단일 URL 검사
      await checkSingleUrl(url, options.output);
    } else {
      // 2. 설정 파일을 이용한 다중 URL 검사
      await checkFromConfig(options.config);
    }
  });

async function checkSingleUrl(url: string, output?: string) {
  try {
    console.log(`\n🔍 지정한 URL(${url})의 접근성을 검사합니다...`);
    const results = await scanUrl({ url, ...(output ? { output } : {}) });

    if (results.violations.length > 0) {
      console.error(`\n❌ 접근성 위반 항목이 ${results.violations.length}개 발견되었습니다. 리포트를 확인해주세요.`);
      process.exit(1);
    } else {
      console.log('\n✅ 검사가 완료되었습니다.');
    }
  } catch (error) {
    console.error('\n❌ 검사 중 오류가 발생했습니다:', error);
    process.exit(1);
  }
}

async function checkFromConfig(configPath?: string) {
  const finalConfigPath = path.resolve(process.cwd(), configPath || 'a11y-checker.config.js');

  try {
    await fs.access(finalConfigPath);
  } catch {
    console.error(`\n❌ 설정 파일을 찾을 수 없습니다: ${finalConfigPath}`);
    process.exit(1);
  }

  try {
    const configModule = (await import(pathToFileURL(finalConfigPath).href)) as {
      default: AllyCheckerConfig;
    };
    const config = configModule.default;
    const { urls, outputDir } = config;

    // outputDir이 없으면 생성합니다. (이미 있어도 에러 발생 안 함)
    await fs.mkdir(outputDir, { recursive: true });

    let totalViolations = 0;

    console.log(`\n🚀 설정 파일(${finalConfigPath})을 기반으로 검사를 시작합니다.`);

    for (const url of urls) {
      console.log(`\n🔍 URL 검사 중: ${url}`);
      // URL 경로를 기반으로 안전한 파일 이름 생성
      const safeFilename = new URL(url).pathname.replace(/[^a-zA-Z0-9]/g, '_') + '.html';
      const outputPath = path.join(outputDir, safeFilename);

      const results = await scanUrl({ url, output: outputPath, ...(config.axe ? { axeOptions: config.axe } : {}) });
      totalViolations += results.violations.length;
    }

    if (totalViolations > 0) {
      console.error(`\n\n❌ 총 ${totalViolations}개의 접근성 위반 항목이 발견되었습니다. '${outputDir}' 폴더의 리포트를 확인해주세요.`);
      process.exit(1);
    } else {
      console.log('\n\n✅ 모든 페이지에서 접근성 위반 항목이 발견되지 않았습니다!');
    }
  } catch (error) {
    console.error('\n❌ 설정 파일을 처리하는 중 오류가 발생했습니다:', error);
    process.exit(1);
  }
}

program.parse(process.argv);
