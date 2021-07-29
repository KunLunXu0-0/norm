#!/usr/bin/env node
import { $, chalk } from 'zx';

$.quote = v => v;

// 获取 standard-version 参数
const option = {
  '100': 'major',
  '010': 'minor',
  '001': 'patch',
}[process.argv[2]]

if (!option) {
  console.log(chalk.red('参数错误, 可选参数: 100 | 010 | 001'));
  process.exit(0);
}

$`
  git pull
  git fetch
  standard-version --release-as ${option}
  git push
  npm publish --access public
`;
