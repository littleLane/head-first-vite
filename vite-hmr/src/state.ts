/*
 * @Author: qianzhi
 * @Date: 2022-05-04 10:49:38
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 11:05:28
 * @FilePath: /head-first-vite/vite-hmr/src/state.ts
 */
let timer: NodeJS.Timer | undefined;

if (import.meta.hot) {
  // 初始化 count
  if (!import.meta.hot.data.count) {
    import.meta.hot.data.count = 0;
  }

  import.meta.hot.dispose(() => {
    if (timer) {
      clearInterval(timer);
    }
  });
}

// 负责记录当前的页面状态
export function initState() {
  const getAndIncCount = () => {
    const data = import.meta.hot?.data || { count: 0 };
    data.count = data.count + 1;
    return data.count;
  };

  timer = setInterval(() => {
    const countEle = document.getElementById('count');
    if (countEle) {
      countEle.innerText = getAndIncCount() + '';
    }
  }, 1000);
}
