import "./App.css";
import Counter from "./components/counter/Counter";
import CounterTwo from "./components/counter/CounterTwo";
import CounterThree from "./components/counter/CounterThree";
import CounterFour from "./components/counter/CounterFour";
import CounterFive from "./components/counter/CounterFive";
import { createContext, useReducer } from "react";
import ComponentA from "./components/reducerContext/ComponentA"
import DataFatchingOne from "./components/user/DataFatchingOne";

export const CounterContext = createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialstate)

  return (
    <div className="app-shell">
      <div className="assignment-card">
        {/* <Counter /><hr/>
        <CounterTwo /><hr/>
        <CounterThree /><hr/>
        <CounterFour /><hr/>
        <CounterFive /><hr/> */}
        {/* <CounterContext.Provider
          value={{ countState: count, countDispatch: dispatch }}
        >
          <ComponentA />
        </CounterContext.Provider> */}
        <DataFatchingOne/>
      </div>
    </div>
  )
}

export default App;