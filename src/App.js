import React, { useState } from "react";
import Display from "./display";
import Buttons from "./buttons";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Display count={count} />
      <Buttons setCount={setCount} count={count} />
    </div>
  );
}

export default App;
