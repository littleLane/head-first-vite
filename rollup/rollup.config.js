/*
 * @Author: qianzhi
 * @Date: 2022-05-03 12:43:44
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-03 12:46:04
 * @FilePath: /head-first-vite/rollup/rollup.config.js
 */
/**
 * @type { import('rollup').RollupOptions }
 */
const buildOptions = {
  input: ['src/index.js'],
  output: [
    {
      // 产物输出目录
      dir: 'dist/es',
      // 产物格式
      format: 'esm'
    },
    {
      dir: 'dist/cjs',
      format: 'cjs'
    }
  ]
};

export default buildOptions;
