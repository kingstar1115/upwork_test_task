import React, { useEffect, useState } from "react";

import SunImg from "../../assets/img/sun.svg";
import MoonImg from "../../assets/img/moon.svg";

const ThemeSelector = () => {
  const [theme, setTheme] = useState("dark");

  const onChangeThemeBtnClicked = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const currenctTheme = localStorage.getItem("theme");
    if (currenctTheme !== null) setTheme(currenctTheme);
  }, []);

  return (
    <div
      className="w-12 h-12 flex flex-none items-center justify-center rounded-full hover:bg-[rgba(7,7,10,0.1)] dark:hover:bg-[rgba(255,255,255,0.1)]"
      onClick={onChangeThemeBtnClicked}
    >
      {theme === "dark" ? (
        <img src={SunImg} alt="" />
      ) : (
        <img src={MoonImg} alt="" />
      )}
    </div>
  );
};

export default ThemeSelector;
