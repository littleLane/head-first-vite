/*
 * @Author: qianzhi
 * @Date: 2022-04-28 09:33:19
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-28 10:03:07
 * @FilePath: /head-first-vite/windi.config.ts
 */
import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  // 开启 attributify
  attributify: true,

  shortcuts: {
    "flex-c": "flex justify-center items-center",
  },
});
