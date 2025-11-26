
  // ------------------------------colorchanger-----------------------------------------------
  /* ## **Assignment 5 — Color Changer (Based on Buttons)**

**Task:**

Show a square (150x150).

Below it, buttons:

- Red
- Green
- Blue

Clicking any button should change the square color.

**Hints:**

- State: `color`
- Inline style: `backgroundColor: color` */
import { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("gray");
  const [palette, setPalette] = useState(generateRandomColors());

  function generateRandomColors() {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
    return arr;
  }

  const refreshPalette = () => {
    setPalette(generateRandomColors());
  };

  return (
    <div>
      <h2>Assignment 5: Color Changer</h2>

      {/* Display Box */}
      <div
        style={{
          width: 150,
          height: 150,
          backgroundColor: color,
          border: "1px solid #000",
          marginBottom: 12,
        }}
      />

      <hr style={{ margin: "20px 0" }} />

      {/* Random Palette Section */}
      <h4>Pick From Random Colors</h4>

      <div style={styles.palette}>
        {palette.map((c, i) => (
          <div
            key={i}
            onClick={() => setColor(c)}
            style={{ ...styles.swatch, backgroundColor: c }}
          />
        ))}
      </div>

      <button onClick={refreshPalette} style={{ marginTop: "10px" }}>
        Generate New Palette
      </button>
    </div>
  );
}

const styles = {
  palette: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px",
  },
  swatch: {
    width: "40px",
    height: "40px",
    borderRadius: "6px",
    cursor: "pointer",
    border: "1px solid #000",
  },
};
