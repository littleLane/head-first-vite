/*
 * @Author: qianzhi
 * @Date: 2022-05-04 09:25:13
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 09:31:11
 * @FilePath: /head-first-vite/plugins/virtualFibModulePlugin.ts
 */
import { Plugin } from 'vite';

// 虚拟模块名称
const virtualFibModuleId = 'virtual:fib';

// Vite 中约定对于虚拟模块，解析后的路径需要加上 '\0' 前缀
const resolvedFibVirtualModuleId = '\0' + virtualFibModuleId;

export function virtualFibModulePlugin(): Plugin {
  return {
    name: 'vite-plugin-virtual-module',
    resolveId(id) {
      if (id === virtualFibModuleId) {
        return resolvedFibVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedFibVirtualModuleId) {
        return 'export default function fib(n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }';
      }
    }
  };
}
