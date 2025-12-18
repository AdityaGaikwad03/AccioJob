import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("All changes saved");

  useEffect(() => {
    if (!text) return;

    setStatus("Typing...");

    const typingTimer = setTimeout(() => {
      setStatus("Saving...");

      const saveTimer = setTimeout(() => {
        setStatus("All changes saved");
      }, 1000);

      return () => clearTimeout(saveTimer);
    }, 1500);

    return () => clearTimeout(typingTimer);
  }, [text]);

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <textarea
          rows="5"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>{status}</p>
      </div>
    </div>
  );
}

export default App;
