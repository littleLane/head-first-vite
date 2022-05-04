/*
 * @Author: qianzhi
 * @Date: 2022-05-04 15:48:56
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 16:00:24
 * @FilePath: /head-first-vite/vite-ssr/src/entry-server.tsx
 */
import App from './App';
import './index.css';

export async function fetchData() {
  return { user: 'xxx' };
}

function ServerEntry() {
  return <App />;
}

export { ServerEntry };
