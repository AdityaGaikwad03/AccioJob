// if else
// ternary operator
// logical AND
import React from "react";
function App() {

  let isActive = false;
  let message;
  let isDarkMode = false;
  let show = false;

  // if (isActive) {
  //   message = "You are active!";
  // } else {
  //   message = "You are not active!"
  // }

  // if (isActive) {
  //   return <p>You are active!</p>
  // } else {
  //   return <p>You are not active</p>
  // }


  return (
    <div className="app-shell">
      <div className="assignment-card">
          {/* <p>Message: {message}</p> */}

          <div>
            {isDarkMode ? <h2>Dark Mode ON</h2> : <h2>Light Mode On</h2>}
          </div>

          <div>
            {show && <p>It is working!</p>}
          </div>

      </div>
    </div>
  )
}

export default App
