/*
 * @Author: qianzhi
 * @Date: 2022-05-03 23:38:34
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-03 23:38:42
 * @FilePath: /head-first-vite/rollup-plugin/rollup.config.js
 */
import alias from '@rollup/plugin-alias';

module.exports = {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [
    alias({
      entries: [
        // 将把 import xxx from 'module-a'
        // 转换为 import xxx from './module-a'
        { find: 'module-a', replacement: './module-a.js' }
      ]
    })
  ]
};
