/*
 * @Author: qianzhi
 * @Date: 2022-04-28 09:27:42
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-28 09:27:42
 * @FilePath: /head-first-vite/src/components/WindiComponent/index.tsx
 */
import { devDependencies } from "../../../package.json";

export function WindiComponent() {
  return (
    <div className="p-20px text-center">
      <h1 className="font-bold text-2xl mb-2">
        vite version: {devDependencies.vite}
      </h1>
    </div>
  );
}