/*
 * @Author: qianzhi
 * @Date: 2022-04-28 10:07:31
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-28 10:07:31
 * @FilePath: /head-first-vite/tailwind.config.js
 */

// 从中你可以看到，Tailwind CSS 的编译能力是通过 PostCSS 插件实现的
// 而 Vite 本身内置了 PostCSS，因此可以通过 PostCSS 配置接入 Tailwind CSS
// 注意: Vite 配置文件中如果有 PostCSS 配置的情况下会覆盖掉 post.config.js 的内容!
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
