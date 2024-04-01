import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter(counter + 1);
  };
  const decreaseHandler = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="counter">
      <button className="decrease" onClick={decreaseHandler}>
        -
      </button>
      <span className="amount">{counter}</span>
      <button className="increase" onClick={increaseHandler}>
        +
      </button>
    </div>
  );
};

export default Counter;
