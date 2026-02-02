import React, { useContext } from 'react'
import { CounterContext } from '../../App'

function ComponentA() {
    const counterContext= useContext(CounterContext)
  return (
    <div>
        <h1>ComponentA: {counterContext.countState}</h1>
        <button onClick={() => counterContext.countDispatch('INCREMENT')}>Increase</button>
        <button onClick={() => counterContext.countDispatch('DECREMENT')}>Decrease</button>
        <button onClick={() => counterContext.countDispatch('RESET')}>Reset</button>
    </div>
  )
}

export default ComponentA
