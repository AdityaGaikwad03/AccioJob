import "./App.css";
import React from "react";
import {Provider} from 'react-redux'
import CakeContainer from "./components/CakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import ComboContainer from "./components/ComboContainer";
import store from "./redux/store";

function App() {
 
  return (
    <div className="app-shell">
      <div className="assignment-card">
        {/* step 1 action type
        step 2 action creator
        step 3 initial state, reducer
        step 4 store
        step 5 access value in js app */}
        <Provider store = {store}>
          <CakeContainer />
          <IcecreamContainer/>
          <ComboContainer/>
        </Provider>
      </div>
    </div>
  )
}

export default App;