/*
 * @Author: qianzhi
 * @Date: 2022-05-04 15:44:40
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 16:09:33
 * @FilePath: /head-first-vite/vite-ssr/src/App.tsx
 */
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props: any) {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="app-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
