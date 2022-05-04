/* eslint-disable @typescript-eslint/ban-ts-comment */
/*
 * @Author: qianzhi
 * @Date: 2022-05-04 15:47:04
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 16:07:26
 * @FilePath: /head-first-vite/vite-ssr/src/entry-client.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export async function fetchData() {
  return { user: 'xxx' };
}

// @ts-ignore
const data = window.__SSR_DATA__;

ReactDOM.hydrate(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);
