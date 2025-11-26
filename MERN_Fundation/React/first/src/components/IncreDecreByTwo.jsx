  // ------------------------------incdecby2-----------------------------------------------

  /* Assignment 6 — Increment & Decrement by 2 (Functional Update Required)
Task:
Make a counter that:
Increases by 2 using functional update
Decreases by 2 using functional update
Has a Reset button
Why?
To ensure they use:
setCount(prev => prev + 2);
 */
import { useState } from "react";
export default function IncreDecreByTwo() {
    const [count, setCount] = useState(0);

    function increase() {
      setCount((prev) => prev + 2);
    }

    function decrease() {
      setCount((prev) => prev - 2);
    }

    function reset() {
      setCount(0);
    }

    return (
      <div>
        <h2>Assignment 6: ±2 Counter</h2>
        <p>Count: {count}</p>

        <button onClick={increase}>+2</button>
        <button onClick={decrease}>-2</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }