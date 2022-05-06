/*
 * @Author: qianzhi
 * @Date: 2022-05-06 08:00:29
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-06 08:00:34
 * @FilePath: /head-first-vite/high-level-esm/lib/src/index.tsx
 */
export interface Options {
  data: string;
}

export function init(options: Options) {
  console.log(options);
  console.log(import.meta.url);
}
