import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child button</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("hello");
  }, []); 

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
    </>
  );
}
