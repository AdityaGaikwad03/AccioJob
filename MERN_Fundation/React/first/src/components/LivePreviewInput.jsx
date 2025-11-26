
  // ------------------------------livepreviewinput-----------------------------------------------

  /* ## **Assignment 4 — Live Preview Input**

**Task:**

Add an input box.

Whatever the user types, show it live below it.

**Output:**

Typing: `Hello React`

Preview: `Hello React` */
import { useState } from "react";
export default function LivePreviewInput() {
    let [text, setText] = useState("");

    return (
      <div>
        <h2>Assignment 4: Live Preview Input</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>You are typing: {text}</p>
      </div>
    );
  }