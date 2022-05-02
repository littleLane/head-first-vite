/*
 * @Author: qianzhi
 * @Date: 2022-04-22 23:35:58
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-02 09:54:45
 * @FilePath: /head-first-vite/src/pages/App.tsx
 */
import { useState } from 'react';
import LoadableComponent from '@loadable/component';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
// import { WindiComponent } from '../components/WindiComponent';
import { WindiAttributify } from '../components/WindiAttributify';
import { WindiShortcuts } from '../components/WindiShortcuts';
import logo from '../assets/logo.svg';
import './App.css';

const WindiComponent = LoadableComponent(
  () => import('../components/WindiComponent')
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <WindiComponent />
      <WindiAttributify />
      <header className="app-header">
        <WindiShortcuts />
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
      <Footer />
    </div>
  );
}

export default App;
