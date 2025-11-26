 /* ## **Assignment 1 — Click Counter (With Step Value)**

**Task:**

Make a counter where the user enters a **step value** (like +5, +10), and the counter increases by that step.

**Example:**

Step = 5

Click → count: 0 → 5 → 10 → 15 → …

**Hints:**

- Use two states: `step`, `count`
- Input controls the step
- Button increases count */
import { useState } from "react";

function CountStep() {
    let [count, setCount] = useState(0);
    let [step, setStep] = useState(1);

    function handleIncrease() {
        setCount(count + Number(step));
    }

    return (
        <div>
            <h2>Assignment 1: Step Counter</h2>

            <input type="number" placeholder="Enter step value" value={step} onChange={(e) => setStep(e.target.value)} />

            <p>Count: {count}</p>

            <button onClick={handleIncrease}>Increase by step</button>
        </div>
    )
}

export default CountStep;