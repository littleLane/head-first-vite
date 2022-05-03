/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: qianzhi
 * @Date: 2022-05-03 11:43:45
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-03 11:45:32
 * @FilePath: /head-first-vite/esbuild/transform.js
 */
const { transform } = require('esbuild');

async function runTransform() {
  // 第一个参数是代码字符串，第二个参数为编译配置
  const content = await transform(
    'const isNull = (str: string): boolean => str.length > 0;',
    {
      sourcemap: true,
      loader: 'tsx'
    }
  );
  console.log(content);
}

runTransform();
