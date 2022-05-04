/*
 * @Author: qianzhi
 * @Date: 2022-04-22 23:35:58
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 09:46:37
 * @FilePath: /head-first-vite/src/vite-env.d.ts
 */
/// <reference types="vite/client" />

import { AttributifyAttributes } from 'windicss/types/jsx';

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}

declare module 'virtual:*' {
  export default any;
}
