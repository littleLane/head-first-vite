/*
 * @Author: qianzhi
 * @Date: 2022-04-22 23:35:58
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-30 09:22:13
 * @FilePath: /head-first-vite/vite.config.ts
 */
import path from 'path';

import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';

import autoprefixer from 'autoprefixer';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';

// 全局的 scss 文件路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/styles/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname, 'src'),
  css: {
    modules: {
      // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  },
  plugins: [
    viteStylelint({
      // 对某些文件排除检查
      exclude: /windicss|node_modules/
    }),
    viteEslint(),
    react()
  ],
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  build: {
    outDir: path.join(__dirname, 'dist')
  }
});
