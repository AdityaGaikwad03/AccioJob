import React, { useReducer } from "react";

const initialstate = {
  firstCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        firstCount: state.firstCount + action.value,
      };
    case "DECREMENT":
      return {
        ...state,
        firstCount: state.firstCount - action.value,
      };
    case "RESET":
      return initialstate;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialstate);
  return (
    <div>
      <h1>counter: {count.firstCount}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>

      <h1>counter_two: {countTwo.firstCount}</h1>
      <button
        onClick={() =>
          dispatchTwo({ type: "INCREMENT", value: 1, secondCount: 1 })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatchTwo({ type: "DECREMENT", value: 1, secondCount: -1 })
        }
      >
        decrement
      </button>
      <button onClick={() => dispatchTwo({ type: "RESET" })}>reset</button>
    </div>
  );
}

export default CounterTwo;
