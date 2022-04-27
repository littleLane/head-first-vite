/*
 * @Author: qianzhi
 * @Date: 2022-04-22 23:35:58
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-27 23:29:27
 * @FilePath: /head-first-vite/src/pages/App.tsx
 */
import { useState } from "react";
import { Header } from "../components/Header";
import logo from "../assets/logo.svg";
import "./App.css";
import { Footer } from "../components/Footer";
import { StyledComponent } from "../components/StyledComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <StyledComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
