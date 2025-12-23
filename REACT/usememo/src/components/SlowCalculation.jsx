import { useState, useMemo } from "react";

function slowCalculation(num) {
  console.log("slow calculation running...");
  let total = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    total += num;
  }
  return total;
}

const users = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
}));

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState(""); // ✅ FIX

  const result = useMemo(() => {
    return slowCalculation(count);
  }, [count]); // ✅ only re-run when count changes

  const themeStyle = {
    background: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "8px",
    marginBottom: "8px",
  };

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <h3 style={themeStyle}>Result: {result}</h3>

        <button onClick={() => setCount(count + 1)}>
          Increase Count
        </button>

        <br /><br />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search user"
          style={themeStyle}
        />

        <button onClick={() => setDark(!dark)}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;
