/*
 * @Author: qianzhi
 * @Date: 2022-05-02 10:20:26
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 14:56:07
 * @FilePath: /head-first-vite/plugins/esbuildPatchPlugin.ts
 */
import fs from 'fs';
import { PluginBuild } from 'esbuild';

/**
 * @type { import('esbuild').Plugin }
 * @returns
 */
export function esbuildPatchPlugin() {
  return {
    name: 'react-virtualized-patch',
    setup(build: PluginBuild) {
      build.onLoad(
        {
          filter:
            /react-virtualized\/dist\/es\/WindowScroller\/utils\/onScroll.js$/
        },
        async (args) => {
          const text = await fs.promises.readFile(args.path, 'utf8');

          return {
            contents: text.replace(
              'import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";',
              ''
            )
          };
        }
      );
    }
  };
}
