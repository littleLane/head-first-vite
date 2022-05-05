/*
 * @Author: qianzhi
 * @Date: 2022-05-05 08:03:33
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-05 08:58:10
 * @FilePath: /head-first-vite/module-federation/vite-host/vite.config.ts
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        'vite-remote-app': 'http://localhost:3001/assets/remoteEntry.js'
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } }
    })
  ]
});
