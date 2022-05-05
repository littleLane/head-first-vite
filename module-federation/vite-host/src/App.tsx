/*
 * @Author: qianzhi
 * @Date: 2022-05-05 08:03:33
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-05 08:36:53
 * @FilePath: /head-first-vite/module-federation/vite-host/src/App.tsx
 */
import React from 'react';
import './App.css';

import RemoteApp from 'vite-remote-app/App';
import { add } from 'vite-remote-app/utils';

const AysncRemoteButton = React.lazy(() => import('vite-remote-app/Button'));

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <RemoteApp />
      <AysncRemoteButton onClick={() => setCount(add(2 + count))}>
        {count}
      </AysncRemoteButton>
    </div>
  );
}

export default App;
