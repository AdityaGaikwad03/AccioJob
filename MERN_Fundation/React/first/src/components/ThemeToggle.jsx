// ------------------------------themetoggle-----------------------------------------------

  /* ## **Assignment 9 — Light/Dark Theme**

**Task:**

Build a theme toggle:

- Light Mode
- Dark Mode
- Text updates
- Page background changes

**Extra challenge:**

Keep a text:

`Current Mode: Light` or `Dark` */
import { useState } from "react";
export default function ThemeToggle() {
    const [isLight, setIsLight] = useState(true);

    function handleToggle() {
      setIsLight(!isLight);
    }

    return (
      <div
        style={{
          backgroundColor: isLight ? "#fff" : "#333",
          color: isLight ? "#000" : "#fff",
          padding: 20,
        }}
      >
        <h2>Assignment 9: Light/Dark Theme Toggle</h2>
        <p>Current Mode: {isLight ? "Light" : "Dark"}</p>
        <button onClick={handleToggle}>
          Switch to {isLight ? "Dark" : "Light"} Mode
        </button>
      </div>
    );
  }