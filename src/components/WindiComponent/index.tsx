/*
 * @Author: qianzhi
 * @Date: 2022-04-28 09:27:42
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-02 09:56:13
 * @FilePath: /head-first-vite/src/components/WindiComponent/index.tsx
 */
import packageInfo from '../../../package.json';

export default function WindiComponent() {
  return (
    <div className="p-20px text-center">
      <h1 className="font-bold text-2xl mb-2">
        vite version: {packageInfo.devDependencies.vite}
      </h1>
    </div>
  );
}
