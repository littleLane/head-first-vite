/*
 * @Author: qianzhi
 * @Date: 2022-04-22 23:35:58
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-28 09:27:06
 * @FilePath: /head-first-vite/src/main.tsx
 */
import React from "react";
import ReactDOM from "react-dom/client";

import "virtual:windi.css";

import App from "./pages/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
