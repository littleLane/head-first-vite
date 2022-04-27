/*
 * @Author: qianzhi
 * @Date: 2022-04-22 23:35:58
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-27 23:01:48
 * @FilePath: /head-first-vite/vite.config.ts
 */
import path from "path";

import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";

// 全局的 scss 文件路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve("./src/styles/variable.scss"));

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname, "src"),
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`,
      },
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    outDir: path.join(__dirname, "dist"),
  },
});
