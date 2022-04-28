/*
 * @Author: qianzhi
 * @Date: 2022-04-28 21:35:45
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-28 22:17:27
 * @FilePath: /head-first-vite/.eslintrc.js
 */
module.exports = {
  // 启用浏览器和 Node.js 环境
  // 在指定的运行环境中会预设一些全局变量
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // 设置环境全局变量
  // "writable"或者 true，表示变量可重写
  // "readonly"或者false，表示变量不可重写
  // "off"，表示禁用该全局变量
  //   "globals": {
  //     // 不可重写
  //     "$": false,
  //     "jQuery": false
  //   },
  extends: [
    // 从 ESLint 本身继承
    'eslint:recommended',

    // 从 ESLint 插件继承
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',

    // 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended',

    'plugin:react/jsx-runtime'
  ],
  // eslint 底层默认使用 Espree 进行 AST 解析，能够对 ECMAScript 规范语法进行解析
  // 通过指定 paser 将 TypeScript 代码转化为 Espree 能够识别的格式（Estree 格式）
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // 为一个对象，表示想使用的额外语言特性，如开启 jsx
    ecmaFeatures: {
      jsx: true
    },

    // 兼容 Acron 的 ecmaVersion 配置
    // 可以配置 ES + 数字(如 ES6)或者ES + 年份(如 ES2015)，也可以直接配置为latest
    // 启用最新的 ES 语法
    ecmaVersion: 'latest',

    // 默认为script，如果使用 ES Module 则应设置为module
    sourceType: 'module'
  },
  // 添加 TS 规则，可省略`eslint-plugin`
  // 添加插件后只是拓展了 ESLint 本身的规则集，但 ESLint 默认并没有开启这些规则的校验！
  // 如果要开启或者调整这些规则，需要在 rules 中进行配置
  // 加入 prettier 的 eslint 插件
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // 开启 prettier 自动修复的功能
    'prettier/prettier': 'error',
    // key 为规则名，value 配置内容
    // 配置内容为一个数组，数组第一项为规则的 ID，第二项为规则的配置
    // off 或 0: 表示关闭规则
    // warn 或 1: 表示开启规则，不过违背规则后只抛出 warning，而不会导致程序退出
    // error 或 2: 表示开启规则，不过违背规则后抛出 error，程序会退出
    'linebreak-style': ['error', 'unix'],
    // quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-explicit-any': 'warn'
  }
};
