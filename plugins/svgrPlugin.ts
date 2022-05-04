/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: qianzhi
 * @Date: 2022-05-04 09:50:14
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 10:20:34
 * @FilePath: /head-first-vite/plugins/svgrPlugin.ts
 */
import * as fs from 'fs';
import resolve from 'resolve';

interface SvgrOptions {
  // svg 资源模块默认导出，url 或者组件
  defaultExport?: 'url' | 'component';
}

export function svgrPlugin(options: SvgrOptions = {}) {
  const { defaultExport = 'url' } = options;

  return {
    name: 'vite-plugin-svgr',
    async transform(
      code: string,
      id: string
    ): Promise<string | { code: string; map: any }> {
      // 1、根据 id 入参过滤出 svg 资源
      if (!id.endsWith('.svg')) {
        return code;
      }

      const svgrTransform = require('@svgr/core').transform;

      // 解析 esbuild 的路径，后续转译 jsx 会用到，我们这里直接拿 vite 中的 esbuild
      const esbuildPackagePath = resolve.sync('esbuild', {
        basedir: require.resolve('vite')
      });
      const esbuild = require(esbuildPackagePath);

      // 2、读取 svg 文件内容
      const svgContent = await fs.promises.readFile(id, 'utf8');

      // 3、利用 `@svgr/core` 将 svg 转换为 React 组件代码
      const svgrResult = await svgrTransform(
        svgContent,
        {},
        { componentName: 'ReactComponent' }
      );

      // 4、处理默认导出为 url 的情况
      let componentCode = svgrResult;

      if (defaultExport === 'url') {
        // 加上 Vite 默认的 `export default 资源路径`
        componentCode += code;
        componentCode = componentCode.replace(
          'export default ReactComponent',
          'export { ReactComponent }'
        );
      }

      // 5. 利用 esbuild，将组件中的 jsx 代码转译为浏览器可运行的代码;
      const result = await esbuild.transform(componentCode, {
        loader: 'jsx'
      });

      return { code: result.code, map: null };
    }
  };
}
