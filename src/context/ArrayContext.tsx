import { useContext, createContext, useState } from "react";

const initialState: any = {
  array: [],
  setArray: () => {},
  resetArray: () => {},
  arrayLength: 3,
  setArrayLength: () => {},
  animationSpeed: -3,
  setAnimationSpeed: () => {},
};

export const ArrayContext = createContext<any>(initialState);

export const useArray = () => {
  return useContext(ArrayContext);
};

const generateRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

type Props = {
  children: any;
};

export const ArrayProvider: React.FC = ({ children }) => {
  const initialArray: number[] = [];
  const [array, setArray] = useState(initialArray);
  const [arrayLength, setArrayLength] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(-3);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
      array.push(generateRandomInt(50, window.innerHeight * 0.8));
    }
    setArray(array);
  };

  return (
    <ArrayContext.Provider
      value={{
        array,
        setArray,
        resetArray,
        arrayLength,
        setArrayLength,
        animationSpeed,
        setAnimationSpeed,
      }}
    >
      {children}
    </ArrayContext.Provider>
  );
};
