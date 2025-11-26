 // ------------------------------doubletriple-----------------------------------------------
  /* ## **Assignment 2 — Double/Triple Number**

**Task:**

Show a number on screen.

Below it, two buttons:

- Double
- Triple

Clicking them should update state accordingly. */
import { useState } from "react"

export default function DoubleTriple() {
    let [num, setNum] = useState(1);

    function handleDouble() {
        setNum(prev => prev*2);
    }

    function handleTriple() {
        setNum(prev => prev*3);
    }

    return (
        <div>
            <h2>Assignment 2: Double/Triple Number</h2>
            <p>Number: {num}</p>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleTriple}>Triple</button>
        </div>
    )
}