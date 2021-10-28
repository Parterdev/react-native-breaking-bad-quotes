import { useState } from "react"

export const useCounter = (initialState = 1) => {

  const [counter, setCounter] = useState(initialState);

  const incrementValue = () => {
    setCounter(counter + 1)
  };

  const decrementValue = () => {
    setCounter(counter - 1);
  }

  const resetValue = () => {
    setCounter(initialState);
  }

  return {
    counter,
    resetValue,
    incrementValue,
    decrementValue,
  }
}
