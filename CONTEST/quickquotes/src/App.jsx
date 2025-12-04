/* # 🎯 **React Assessment**

# **Project Title: MiniQuotes – A Simple Quotes Saver**

---

# ✅ **Project Requirements**

## **1️⃣ Add New Quote**

- Input box + Add button
- Controlled input
- Blank input → show error message (conditional)

---

## **2️⃣ Show Quotes List**

Each quote shows:

- Quote text
- Delete button only

---

## **3️⃣ Empty State Message**

If no quotes:

```
<p id="empty-text">No quotes added yet.</p>

```
# ✔ **Students Will Build (Inside 45 Minutes):**

- Controlled input
- Add quote
- Show quotes
- Delete quote
- Simple state updates
- Clean UI */



import { useState } from "react";

import "./App.css";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [error, setError] = useState("");

    // TODO: addQuote function
    // TODO: deleteQuote function

    const addQuote = () => {
    if (quote.trim() === "") {
      setError("Quote cannot be empty!");
      return;
    }

    setQuotes([...quotes, quote]);
    setQuote("");
    setError("");
  };


  const deleteQuote = (index) => {
    const updated = quotes.filter((_, i) => i !== index);
    setQuotes(updated);
  };


  return (
    <div id="app-container">
      <h1 id="title">MiniQuotes</h1>

      {/* Input Section */}
      <div id="input-section">
        <input
          id="quote-input"
          type="text"
          placeholder="Write a quote..."
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <button id="add-btn" onClick={addQuote}>Add</button>
      </div>

      {/* Error Message */}
      <p id="error-msg">{/* show error conditionally */}
        {error && <span style={{ color: "red" }}>{error}</span>}
      </p>

      {/* Quotes List */}
      <div id="quotes-list">
        {/* TODO: show empty state */}
        {quotes.length === 0 && <p id="empty-text">No quotes added yet.</p>}
        {/* TODO: list of quotes */}
        {quotes.map((q, index) => (
          <div key={index} className="quote-card">
            <span className="quote-text">{q}</span>
            <button className="delete-btn" onClick={() => deleteQuote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    
  );
}
