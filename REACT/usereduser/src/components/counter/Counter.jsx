import React, { act, useReducer } from 'react'

const initialstate = 0;

const reducer = (state, action) => {
    switch(action){
        case 'INCREMENT' :
            return state + 1
        case 'DECREMENT' :
            return state - 1
        case 'RESET' :
            return initialstate
        default:
            return state
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h1>counter: {count}</h1>
      <button onClick ={()=> dispatch('INCREMENT')}>Increment</button>
      <button onClick ={()=> dispatch('DECREMENT')}>decrement</button>
      <button onClick ={()=> dispatch('RESET')}>reset</button>
    </div>
  )
}

export default Counter
