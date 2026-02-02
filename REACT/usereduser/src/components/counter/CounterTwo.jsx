import React, { useReducer } from 'react'

const initialstate = {
    firstCount : 0
}

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT' :
            return { 
                firstCount: state.firstCount + 1
            }
        case 'DECREMENT' :
            return { 
                firstCount: state.firstCount - 1
            }
        case 'RESET' :
            return initialstate
        default:
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h1>counter: {count.firstCount}</h1>
      <button onClick ={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick ={()=> dispatch({type: 'DECREMENT'})}>decrement</button>
      <button onClick ={()=> dispatch({type: 'RESET'})}>reset</button>
    </div>
  )
}

export default CounterTwo
