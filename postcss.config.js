/*
 * @Author: qianzhi
 * @Date: 2022-04-28 10:07:38
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-28 10:08:43
 * @FilePath: /head-first-vite/postcss.config.js
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // 指定目标浏览器
      overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"],
    },
  },
};
