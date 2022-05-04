/*
 * @Author: qianzhi
 * @Date: 2022-05-04 14:07:17
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 14:19:53
 * @FilePath: /head-first-vite/vite-code-splitting/getDepInclude.ts
 */
import { GetModuleInfo } from 'rollup';

export function getDepInclude() {
  // 缓存对象
  const cache = new Map<string, boolean>();

  function getCacheKey(id: string, depPaths: string[]): string {
    return `${id}-${depPaths.join('|')}`;
  }

  function isDepInclude(
    id: string,
    depPaths: string[],
    importChain: string[],
    getModuleInfo: GetModuleInfo
  ): boolean {
    const key = getCacheKey(id, depPaths);

    // 出现循环依赖时不予考虑
    if (importChain.includes(id)) {
      cache.set(key, false);
      return false;
    }

    // 验证缓存
    if (cache.has(key)) {
      return cache.get(key);
    }

    // 命中依赖列表
    if (depPaths.includes(id)) {
      // 将引用恋中的文件都记录到缓存
      importChain.forEach((item) =>
        cache.set(getCacheKey(item, depPaths), true)
      );

      return true;
    }

    const moduleInfo = getModuleInfo(id);

    if (!moduleInfo || !moduleInfo.importers) {
      cache.set(key, false);
      return false;
    }

    // 核心逻辑，递归查找上层引用者
    const isInclude = moduleInfo.importers.some((importer) =>
      isDepInclude(importer, depPaths, importChain.concat(id), getModuleInfo)
    );

    // 设置缓存
    cache.set(key, isInclude);
    return isInclude;
  }

  return isDepInclude;
}
