/*
 * @Author: qianzhi
 * @Date: 2022-05-04 09:25:13
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 14:57:54
 * @FilePath: /head-first-vite/plugins/virtualModulePlugin.ts
 */
import { Plugin, ResolvedConfig } from 'vite';

// 虚拟模块名称
const virtualFibModuleId = 'virtual:fib';

// Vite 中约定对于虚拟模块，解析后的路径需要加上 '\0' 前缀
const resolvedFibVirtualModuleId = '\0' + virtualFibModuleId;

const virtualEnvModuleId = 'virtual:env';
const resolvedEnvVirtualModuleId = '\0' + virtualEnvModuleId;

export function virtualModulePlugin(): Plugin {
  let config: ResolvedConfig | null = null;

  return {
    name: 'vite-plugin-virtual-module',
    configResolved(c: ResolvedConfig) {
      config = c;
    },
    resolveId(id) {
      if (id === virtualFibModuleId) {
        return resolvedFibVirtualModuleId;
      }

      if (id === virtualEnvModuleId) {
        return resolvedEnvVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedFibVirtualModuleId) {
        return 'export default function fib(n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }';
      }

      if (id === resolvedEnvVirtualModuleId) {
        return `export default ${JSON.stringify(config?.env ?? {})}`;
      }
    }
  };
}
