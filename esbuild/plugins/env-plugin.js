/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: qianzhi
 * @Date: 2022-05-03 11:46:45
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-03 12:04:41
 * @FilePath: /head-first-vite/esbuild/plugins/envPlugin.js
 */
const envPlugin = {
  name: 'esbuild:env',
  setup(build) {
    build.onStart(() => {
      console.log('build started');
    });

    // 控制路径解析
    build.onResolve({ filter: /^env$/ }, (args) => ({
      path: args.path,
      namespace: 'env-ns'
    }));

    // 控制模块加载
    build.onLoad({ filter: /.*/, namespace: 'env-ns' }, () => ({
      contents: JSON.stringify(process.env),
      loader: 'json'
    }));

    build.onEnd((buildResult) => {
      console.log('build end');

      if (buildResult.errors.length) {
        return;
      }
      // 构建元信息
      // 获取元信息后做一些自定义的事情，比如生成 HTML
      console.log(buildResult.metafile);
    });
  }
};

module.exports = envPlugin;
