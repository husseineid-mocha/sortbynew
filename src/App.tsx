import { useState, useEffect } from "react";
import { useArray } from "./context/ArrayContext";
import SortingVisualizer from "./components/SortingVisualizer";
import Navbar from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";

import "./App.css";

function App() {
  const { array, arrayLength, setArrayLength, resetArray } = useArray();
  const [sorting, setSorting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showHelper, setShowHelper] = useState(true);

  const {
    theme,
    setTheme,
    backgroundColor,
    navBarColor,
    arrayBarColor,
    buttonColor,
    fontColor,
    buttonHoverColor,
    buttonFontColor,
  } = useTheme();

  useEffect(() => {
    if (sorting) return;
    // if (isMobile) setArrayLength(20);
    else setArrayLength(40);
    // eslint-disable-next-line
  }, [setArrayLength]);

  useEffect(() => {
    resetArray();
    document.querySelectorAll(".array-bar").forEach((array: any) => {
      array.style.backgroundColor = arrayBarColor;
    });
    // eslint-disable-next-line
  }, [arrayLength, arrayBarColor]);

  useEffect(() => {
    if (array.length > 0) {
      if (localStorage.getItem("theme"))
        setTheme(JSON.parse(localStorage.getItem("theme") as string));
      setIsLoaded(true);
      document.querySelectorAll(".array-bar").forEach((array: any) => {
        array.style.backgroundColor = arrayBarColor;
      });
    }
  }, [array, arrayBarColor, setTheme]);

  useEffect(() => {
    if (isLoaded) {
      const root: any = document.querySelector(":root");
      root.style.setProperty("--background", backgroundColor);
      root.style.setProperty("--foreground", navBarColor);
      root.style.setProperty("--button-color", buttonColor);
      root.style.setProperty("--font-color", fontColor);
      root.style.setProperty("--array-bar-color", arrayBarColor);
      root.style.setProperty("--button-hover", buttonHoverColor);
      root.style.setProperty("--button-font-color", buttonFontColor);
      document.querySelectorAll(".array-bar").forEach((array: any) => {
        array.style.backgroundColor = arrayBarColor;
      });
      document.querySelector<any>(".MuiSelect-select").style.color = fontColor;
      document.querySelector<any>(".MuiSelect-icon").style.color = fontColor;
    }
  }, [
    theme,
    isLoaded,
    backgroundColor,
    navBarColor,
    buttonColor,
    fontColor,
    buttonFontColor,
    buttonHoverColor,
    arrayBarColor,
  ]);

  return (
    <>
      <Navbar
        setLoading={setLoading}
        setShowHelper={setShowHelper}
        sorting={sorting}
        setSorting={setSorting}
      />
      <SortingVisualizer loading={loading} showHelper={showHelper} />
    </>
  );
}

export default App;
