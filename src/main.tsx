/*
 * @Author: qianzhi
 * @Date: 2022-04-22 23:35:58
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-30 09:46:42
 * @FilePath: /head-first-vite/src/main.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

import 'virtual:windi.css';

import App from './pages/App';
import './index.css';

const container = document.getElementById('root');

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
