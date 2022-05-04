/*
 * @Author: qianzhi
 * @Date: 2022-05-04 13:32:34
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 14:30:04
 * @FilePath: /head-first-vite/vite-code-splitting/vite.config.ts
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { getDepInclude } from './getDepInclude';

const isDepInclude = getDepInclude();

const chunkGroups = {
  'react-vendor': [require.resolve('react'), require.resolve('react-dom')],
  'lodash-vendor': [require.resolve('lodash-es')],
  'library-vendor': [require.resolve('antd')]
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // 1、以对象的形式配置 split chunk
        // manualChunks: {
        //   'react-vendor': ['react', 'react-dom'],
        //   lodash: ['lodash-es'],
        //   library: ['antd']
        // }

        // 2、通过函数的形式配置 split chunk
        // 很可能存在循环依赖的问题，导致异常
        // manualChunks(id) {
        //   if (id.includes('antd')) {
        //     return 'library';
        //   }
        //   if (id.includes('lodash')) {
        //     return 'lodash';
        //   }
        //   if (id.includes('react')) {
        //     return 'react';
        //   }
        // }

        // 3、通过函数的形式配置 split chunk
        // 通过工具函数解决循环依赖问题
        manualChunks(id, { getModuleInfo }) {
          for (const group of Object.keys(chunkGroups)) {
            const deps = chunkGroups[group];

            if (
              id.includes('node_modules') &&
              isDepInclude(id, deps, [], getModuleInfo)
            ) {
              return group;
            }
          }
        }
      }
    }
  },
  plugins: [react()]
});
