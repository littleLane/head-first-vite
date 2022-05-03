/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: qianzhi
 * @Date: 2022-05-03 11:37:04
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-03 11:49:39
 * @FilePath: /head-first-vite/esbuild/serve.js
 */
const { serve } = require('esbuild');

function runBuild() {
  serve(
    {
      port: 8000,
      // 静态资源目录
      servedir: './dist'
    },
    {
      absWorkingDir: process.cwd(),
      entryPoints: ['./src/index.jsx'],
      bundle: true,
      format: 'esm',
      splitting: true,
      sourcemap: true,
      ignoreAnnotations: true,
      metafile: true
    }
  ).then((server) => {
    console.log('HTTP Server starts at port', server.port);
  });
}

runBuild();
