/*
 * @Author: qianzhi
 * @Date: 2022-04-27 22:52:08
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-30 10:18:14
 * @FilePath: /head-first-vite/src/components/Header/index.tsx
 */
import logoSrc from '@assets/logo.svg';
import { ReactComponent as ReactLogo } from '@assets/logo.svg';
import styles from './index.module.scss';
import packageInfo from '../../../package.json';
import Worker from './worker.js?worker';
import React from 'react';

export function Header() {
  React.useEffect(() => {
    function wokerListener(event: MessageEvent<number>) {
      console.log(event);
    }

    // 1. 初始化 Worker 实例
    const worker = new Worker();

    // 2. 主线程监听 worker 的信息
    worker.addEventListener('message', wokerListener);

    return () => {
      worker.removeEventListener('message', wokerListener);
    };
  });

  return (
    <div className={`p-20px text-center ${styles.header}`}>
      <img width="32" className="m-auto mb-4" src={logoSrc} alt="" />
      <h3 className={styles.header}>This is Header v{packageInfo.version}</h3>
      <ReactLogo width={64} />
    </div>
  );
}
