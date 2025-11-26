
  // ------------------------------fruitslist-----------------------------------------------
  /* Assignment 7 — Fruits List (Add + Remove)
Task:
Start with an empty array.
Have an input to enter fruit name.
Buttons: Add Fruit, Remove Last Fruit
Display all fruits in a list.
This reinforces array updates using:
[...prev]
// prev.filter()
prev.slice()
 */
import { useState } from "react";
export default function FruitsList() {
    let [input, setInput] = useState("");
    let [fruits, setFruits] = useState([]);

    function handleAddFruit() {
      let trimmed = input.trim();
      setFruits((prev) => [...prev, trimmed]);
      setInput("");
    }

    function handleRemoveLastFruit() {
      setFruits((prev) => fruits.slice(0, -1));
    }

    return (
      <div>
        <h2>Assignment 7: Fruits List</h2>

        <input
          type="text"
          value={input}
          placeholder="Enter fruit name"
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleAddFruit}>Add fruit</button>
        <button onClick={handleRemoveLastFruit} disabled={fruits.length === 0}>
          Remove last fruit
        </button>

        <ul>
          {fruits.map((fruit) => {
            return <li>{fruit}</li>;
          })}
        </ul>
      </div>
    );
  }
