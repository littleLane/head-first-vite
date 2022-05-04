/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: qianzhi
 * @Date: 2022-05-04 15:50:30
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-04 16:20:44
 * @FilePath: /head-first-vite/vite-ssr/src/ssr-server/index.ts
 */
import path from 'path';
import fs from 'fs';
import express, {
  RequestHandler,
  Express,
  Request,
  Response,
  NextFunction
} from 'express';
import { ViteDevServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serve from 'serve-static';

const isProd = process.env.NODE_ENV === 'production';
const cwd = process.cwd();

function resolveTemplatePath() {
  return isProd
    ? path.join(cwd, 'dist/client/index.html')
    : path.join(cwd, 'index.html');
}

function matchPageUrl(url: string) {
  if (url === '/') {
    return true;
  }
  return false;
}

async function loadSsrEntryModule(vite: ViteDevServer | null) {
  // 生产模式下直接 require 打包后的产物
  if (isProd) {
    const entryPath = path.join(cwd, 'dist/server/entry-server.js');
    return require(entryPath);
  }

  // 开发环境下通过 no-bundle 方式加载
  const entryPath = path.join(cwd, 'src/entry-server.tsx');

  if (vite) {
    return vite.ssrLoadModule(entryPath);
  }
}

async function createSsrMiddleware(app: Express): Promise<RequestHandler> {
  let vite: ViteDevServer | null = null;

  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root: process.cwd(),
      server: {
        middlewareMode: 'ssr'
      }
    });

    // 注册 Vite Middlewares
    // 主要用来处理客户端资源
    app.use(vite.middlewares);
  }

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // SSR 的逻辑
      const url = req.originalUrl;

      if (!matchPageUrl(url)) {
        // 走静态资源的处理
        return await next();
      }

      // 1. 加载服务端入口模块
      const { ServerEntry, fetchData } = await loadSsrEntryModule(vite);

      // 2. 数据预取
      const data = await fetchData();

      // 3. 「核心」渲染组件
      const appHtml = renderToString(
        React.createElement(ServerEntry, { data })
      );

      // 4. 拼接 HTML，返回响应
      const templatePath = resolveTemplatePath();
      let template = await fs.readFileSync(templatePath, 'utf-8');

      // 开发模式下需要注入 HMR、环境变量相关的代码，因此需要调用 vite.transformIndexHtml
      if (!isProd && vite) {
        template = await vite.transformIndexHtml(url, template);
      }

      const html = template
        .replace('<!-- SSR_APP -->', appHtml)
        // 注入数据标签，用于客户端 hydrate
        .replace(
          '<!-- SSR_DATA -->',
          `<script>window.__SSR_DATA__=${JSON.stringify(data)}</script>`
        );

      res.status(200).setHeader('Content-Type', 'text/html').end(html);
    } catch (error: any) {
      vite?.ssrFixStacktrace(error);
      console.error(error);
      res.status(500).end(error.message);
    }
  };
}

async function createServer() {
  const app = express();

  // 加入 Vite SSR 中间件
  app.use(await createSsrMiddleware(app));

  // 注册中间件，生产环境端处理客户端资源
  if (isProd) {
    app.use(serve(path.join(cwd, 'dist/client')));
  }

  app.listen(3000, () => {
    console.log('Node 服务器已启动~');
    console.log('http://localhost:3000');
  });
}

createServer();
