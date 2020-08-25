import React from "react";

const Buttons = ({ setCount, count }) => {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}>
        Decrement
      </button>
    </div>
  );
};

export default Buttons;
