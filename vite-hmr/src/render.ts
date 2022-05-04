/*
 * @Author: qianzhi
 * @Date: 2022-05-04 10:49:18
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 11:12:18
 * @FilePath: /head-first-vite/vite-hmr/src/render.ts
 */
// 负责渲染文本内容
export const render = () => {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (app) {
    app.innerHTML = `
        <h1>Hello Vite!</h1>
        <p target="_blank">This is hmr test.123 这是增加的文本1</p>
      `;
  }
};

if (import.meta.hot) {
  import.meta.hot.accept((module) => {
    console.log('module', module);
    module.render();
  });
}
