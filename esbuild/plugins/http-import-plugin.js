/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: qianzhi
 * @Date: 2022-05-03 12:05:12
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-03 12:22:37
 * @FilePath: /head-first-vite/esbuild/plugins/http-import-plugin.js
 */
module.exports = () => ({
  name: 'esbuild:http-import',
  setup(build) {
    // 1. 拦截 CDN 请求
    build.onResolve({ filter: /^https?:\/\// }, (args) => ({
      path: args.path,
      namespace: 'http-url'
    }));

    // 拦截间接依赖的路径，并重写路径
    // tip: 间接依赖同样会被自动带上 `http-url`的 namespace
    build.onResolve({ filter: /.*/, namespace: 'http-url' }, (args) => ({
      // 重写路径
      path: new URL(args.path, args.importer).toString(),
      namespace: 'http-url'
    }));

    // 2. 通过 fetch 请求加载 CDN 资源
    build.onLoad({ filter: /.*/, namespace: 'http-url' }, async (args) => {
      const contents = await new Promise((resolve, reject) => {
        function fetch(url) {
          console.log(`Downloading: ${url}`);

          const lib = url.startsWith('https')
            ? require('https')
            : require('http');

          const req = lib
            .get(url, (res) => {
              if ([301, 302, 307].includes(res.statusCode)) {
                // 重定向
                fetch(new URL(res.headers.location, url).toString());
                req.destroy();
              } else if (res.statusCode === 200) {
                // 响应成功
                const chunks = [];
                res.on('data', (chunk) => chunks.push(chunk));
                res.on('end', () => resolve(Buffer.concat(chunks)));
              } else {
                reject(
                  new Error(`GET ${url} failed: status ${res.statusCode}`)
                );
              }
            })
            .on('error', reject);
        }

        fetch(args.path);
      });

      return { contents };
    });
  }
});
