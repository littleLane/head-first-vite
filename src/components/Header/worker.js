/*
 * @Author: qianzhi
 * @Date: 2022-04-30 10:11:51
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-30 10:15:01
 * @FilePath: /head-first-vite/src/components/Header/worker.js
 */
const start = () => {
  let count = 0;

  setInterval(() => {
    // 给主线程传值
    postMessage(++count);
  }, 2000);
};

start();
