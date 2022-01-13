import React, { useState } from "react";

function CounterHooks() {
  const [count, setCount] = useState(0);
  // useState returns an array with two elements:
  // 1. the piece of state
  // 2. the function to update the piece of state
  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  )
}
export default CounterHooks;