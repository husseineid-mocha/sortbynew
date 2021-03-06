import "./SortingVisualizer.css";
// import { BeatLoader } from "react-spinners";
import { useArray } from "../../context/ArrayContext";
import { useTheme } from "../../context/ThemeContext";
import { Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";

// const root = document.querySelector(":root");
// const fontColor = getComputedStyle(root).getPropertyValue("--font-color") as any;
const CustomSelect = withStyles({
  select: {
    color: "white",
  },
  icon: {
    color: "white",
  },
})(Select);

type Props = {
  loading: boolean;
  showHelper: boolean;
};

const SortingVisualizer = ({ loading, showHelper }: Props) => {
  const {
    array,
    arrayLength,
    setArrayLength,
    animationSpeed,
    setAnimationSpeed,
  } = useArray();

  const { theme, setTheme } = useTheme();

  return (
    <>
      {loading && (
        <div className="loading-container">
          {/* <BeatLoader color={"white"} /> */}
        </div>
      )}
      <div className="array-option-bar-container">
        <div className="array-option-container">
          <div className="array-size-speed">
            <div className="array-size-container">
              <label>Size</label>
              <input
                onChange={(e) => {
                  setArrayLength(e.target.value);
                }}
                type="range"
                min="10"
                max="100"
                step="10"
                value={array.length}
              ></input>
            </div>
            <div className="array-speed-container">
              <label>Speed</label>
              <input
                onChange={(e) => setAnimationSpeed(e.target.value)}
                type="range"
                min="-153"
                max="-3"
                step="25"
                value={animationSpeed}
              ></input>
            </div>
          </div>
          {showHelper && (
            <div className="helper-container">
              <div>Click on a sorting button to begin!</div>
            </div>
          )}
          <div className="array-theme">
            <label>Theme</label>
            <CustomSelect
              onChange={(e) => {
                localStorage.setItem("theme", JSON.stringify(e.target.value));
                setTheme(e.target.value);
              }}
              value={theme}
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="dracula">Dracula</MenuItem>
              <MenuItem value="nautilus">Nautilus</MenuItem>
              <MenuItem value="monokai">Monokai</MenuItem>
              <MenuItem value="phantom">Phantom</MenuItem>
            </CustomSelect>
          </div>
        </div>
        <div className="array-container">
          <div className="array-bar-container">
            {array.map((value: number, idx: number) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  width: `${Math.floor(window.innerWidth / arrayLength)}px`,
                  height: `${value}px`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingVisualizer;
