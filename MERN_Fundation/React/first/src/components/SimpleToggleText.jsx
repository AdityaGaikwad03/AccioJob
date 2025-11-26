/* ## **Assignment 3 — Simple Toggle Text**

**Task:**

Show a text: `"Hello Student!"`

Add a button: **Toggle Message**

Toggle between:

- "Hello Student!"
- "Welcome to React!" */
import { useState } from "react";

export default function ToggleText() {
    let [showFirst, setShowFirst] = useState(true);

    function handleToggle() {
        setShowFirst(!showFirst);
    }

    return (
        <div>
            <h2>Assignment 3: Simple Toggle Text</h2>
            <p>{showFirst ? "Hello Students!" : "Welcome to React"}</p>
            <button onClick={handleToggle}>Toggle Message</button>
        </div>
    )
}