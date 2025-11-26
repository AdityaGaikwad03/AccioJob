/* ✅ Assignment 12 — Font Size Slider (Dynamic Text Size)
Instructions:
Create a live font size preview tool.
Display a text: “Live Preview Text”
Add a slider (input type="range")
Slider range: minimum = 10, maximum = 48
When the slider moves, update the text’s font size in real time
Store only the font size in state
The text must visually grow and shrink as the slider moves
Expected Output Example:
Live Preview Text (size: 32px)
 */

import { useState } from "react";

export default function FontSizeSlider() {
  const [range, setRange] = useState(10);
  return (
    <>
      <h2>✅ Assignment 12 — Font Size Slider (Dynamic Text Size)</h2>
      <p style={{ fontSize: `${range}px`, marginBottom: "10px" }}>
        Live Preview Text (size: {range}px)
      </p>

      <input
        type="range"
        min={10}
        max={48}
        value={range}
        onChange={(e) => setRange(e.target.value)}
      />
    </>
  );
}
