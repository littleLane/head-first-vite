/*
 * @Author: qianzhi
 * @Date: 2022-05-04 13:32:34
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 13:49:49
 * @FilePath: /head-first-vite/vite-code-splitting/src/main.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { add } from 'lodash-es';

import App from './App';
import './index.css';

console.log(add);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
