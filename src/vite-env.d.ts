/*
 * @Author: qianzhi
 * @Date: 2022-04-22 23:35:58
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-28 09:52:34
 * @FilePath: /head-first-vite/src/vite-env.d.ts
 */
/// <reference types="vite/client" />

import { AttributifyAttributes } from "windicss/types/jsx";

declare module "react" {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
