/*
 * @Author: qianzhi
 * @Date: 2022-05-05 08:03:50
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-05 09:05:11
 * @FilePath: /head-first-vite/module-federation/vite-remote/vite.config.ts
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 3001,
    strictPort: true
  },
  plugins: [
    react(),
    // 模块联邦配置
    federation({
      name: 'vite-remote-app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.tsx',
        './App': './src/App.tsx',
        './utils': './src/utils.ts'
      },
      shared: [
        {
          react: {
            singleton: true,
            import: true
          }
        },
        'react-dom'
      ]
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});
