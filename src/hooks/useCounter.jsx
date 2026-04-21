import React,{ useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const counterHandler = () => {
    setCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };

  const resetHabdler = () => {
    setCount(0);
  }


    return {count, counterHandler, decrementHandler, resetHabdler};
}


