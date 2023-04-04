import React, { useEffect } from "react";
import Header from "./components/layout/header/Header";

import "./App.css";
import Deposit from "./components/deposit/Deposit";

function App() {
  // set theme as system setting
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, []);

  return (
    <div className="App backdrop-blur-[96px] min-h-[100vh] text-special-black dark:text-white transition-all duration-500 overflow-hidden relative">
      <Header />
      <Deposit />
    </div>
  );
}

export default App;
