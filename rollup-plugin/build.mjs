/*
 * @Author: qianzhi
 * @Date: 2022-05-03 23:25:09
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-03 23:29:12
 * @FilePath: /head-first-vite/rollup-plugin/build.mjs
 */
import util from 'util';
import { rollup } from 'rollup';

async function build() {
  const bundle = await rollup({
    input: ['./src/index.js']
  });

  console.log(util.inspect(bundle, true, 4, true));

  const result = await bundle.generate({
    format: 'es'
  });

  console.log('result:', result);
}

build();
