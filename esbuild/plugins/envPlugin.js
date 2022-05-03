/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: qianzhi
 * @Date: 2022-05-03 11:46:45
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-03 11:48:03
 * @FilePath: /head-first-vite/esbuild/plugins/envPlugin.js
 */
const envPlugin = {
  name: 'env',
  setup(build) {
    build.onResolve({ filter: /^env$/ }, (args) => ({
      path: args.path,
      namespace: 'env-ns'
    }));

    build.onLoad({ filter: /.*/, namespace: 'env-ns' }, () => ({
      contents: JSON.stringify(process.env),
      loader: 'json'
    }));
  }
};

module.exports = envPlugin;
