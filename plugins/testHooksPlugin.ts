/*
 * @Author: qianzhi
 * @Date: 2022-05-04 10:27:11
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 10:29:41
 * @FilePath: /head-first-vite/plugins/testHooksPlugin.ts
 */
export function testHooksPlugin() {
  return {
    name: 'test-hooks-plugin',

    // vite 独有钩子
    config(config) {
      console.log('config hook');
    },

    // vite 独有钩子
    configResolved(resolveConfig) {
      console.log('resolveConfig hook');
    },

    // 通用钩子
    options(opts) {
      console.log('options');
      return opts;
    },

    // Vite 独有钩子
    configureServer(server) {
      console.log('configureServer');
      setTimeout(() => {
        // 手动退出进程
        process.kill(process.pid, 'SIGTERM');
      }, 3000);
    },

    // 通用钩子
    buildStart() {
      console.log('buildStart');
    },

    // 通用钩子
    buildEnd() {
      console.log('buildEnd');
    },

    // 通用钩子
    closeBundle() {
      console.log('closeBundle');
    }
  };
}
