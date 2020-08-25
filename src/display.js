import React from "react";

const Display = ({ count }) => {
  return (
    <div>
      {count > 0 && <h1>The Counter value is {count}</h1>}
      {count === 0 && <h1>The Count is Zero</h1>}
    </div>
  );
};
export default Display;
