/*
 * @Author: qianzhi
 * @Date: 2022-05-03 12:32:36
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-03 12:32:44
 * @FilePath: /head-first-vite/esbuild/plugins/util.js
 */
const createScript = (src) => `<script type="module" src="${src}"></script>`;
const createLink = (src) => `<link rel="stylesheet" href="${src}"></link>`;

const generateHTML = (scripts, links) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Esbuild App</title>
        ${links.join('\n')}
    </head>
    <body>
        <div id="root"></div>
        ${scripts.join('\n')}
        </body>
    </html>
`;

module.exports = { createLink, createScript, generateHTML };
