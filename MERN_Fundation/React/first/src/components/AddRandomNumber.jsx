/* # ✅ **Assignment 13 — Add a Random Number**

### **Instructions (for students):**

Create a component with:

- A button: **“Add Random Number”**
- A list that displays all the random numbers added so far
- Every time the user clicks the button:
    - Generate a random number between **1 and 100**
    - Add it to an array stored in state
- Display all the numbers in the UI using `.map()` */

import { useState } from "react";

export default function AddRandomNumber(){
    const [numbers, setNumbers] = useState([]);

  const addRandom = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumbers([...numbers, randomNum]);
  };

  return (
    <>

        <h2>✅ Assignment 13 — Add a Random Number</h2>
      <button onClick={addRandom} style={{ marginBottom: "10px" }}>
        Add Random Number
      </button>

      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </>
    )
}