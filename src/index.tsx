import React from "react";
import ReactDOM from "react-dom";
import { ArrayProvider } from "./context/ArrayContext";
import { ThemeProvider } from "./context/ThemeContext";

import "./index.css";
import App from "./App";

function Root() {
  return (
    <ThemeProvider>
      <ArrayProvider>
        <App />
      </ArrayProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
