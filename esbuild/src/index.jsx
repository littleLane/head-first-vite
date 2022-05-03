/*
 * @Author: qianzhi
 * @Date: 2022-05-03 11:35:07
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-03 11:35:15
 * @FilePath: /head-first-vite/esbuild/src/index.jsx
 */
import Server from 'react-dom/server';

let Greet = () => <h1>Hello, juejin!</h1>;
console.log(Server.renderToString(<Greet />));
