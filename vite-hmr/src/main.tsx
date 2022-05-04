/*
 * @Author: qianzhi
 * @Date: 2022-05-04 10:47:36
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 11:10:06
 * @FilePath: /head-first-vite/vite-hmr/src/main.tsx
 */
import { render } from './render';
import { initState } from './state';
render();
initState();

// if (import.meta.hot) {
//   import.meta.hot.accept('./render.ts', (module) => {
//     console.log('module', module);
//     module.render();
//   });
// }

if (import.meta.hot) {
  import.meta.hot.accept(['./render.ts', './state.ts'], (modules) => {
    console.log('modules', modules);

    const [renderModule, stateModule] = modules;
    if (renderModule) {
      renderModule.render();
    }
    if (stateModule) {
      stateModule.initState();
    }
  });
}
