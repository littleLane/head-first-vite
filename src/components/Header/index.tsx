/*
 * @Author: qianzhi
 * @Date: 2022-04-27 22:52:08
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-30 10:07:04
 * @FilePath: /head-first-vite/src/components/Header/index.tsx
 */
import logoSrc from '@assets/logo.svg';
import { ReactComponent as ReactLogo } from '@assets/logo.svg';
import styles from './index.module.scss';
import { version } from '../../../package.json';

export function Header() {
  return (
    <div className={`p-20px text-center ${styles.header}`}>
      <img width="32" className="m-auto mb-4" src={logoSrc} alt="" />
      <h3 className={styles.header}>This is Header v{version}</h3>
      <ReactLogo width={64} />
    </div>
  );
}
