/*
 * @Author: qianzhi
 * @Date: 2022-05-04 13:32:34
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 13:50:38
 * @FilePath: /head-first-vite/vite-code-splitting/vite.config.ts
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          lodash: ['lodash-es'],
          library: ['antd']
        }
      }
    }
  },
  plugins: [react()]
});
