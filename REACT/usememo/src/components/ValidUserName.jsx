import { useMemo, useState } from "react";

function expensiveValidation(username) {
  console.log("Running expensive validation...");
  let isValid = true;

  for (let i = 0; i < 500000000; i++) {}

  if (username.length < 5) {
    isValid = false;
  }

  return isValid ? "Valid Username" : "Invalid Username";
}

function App() {
  const [username, setUsername] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  const validationResult = useMemo(() => {
    return expensiveValidation(username);
  }, [username]);

  return (
    <div>
      <h2>Signup</h2>

      <input
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <p>{validationResult}</p>

      <button onClick={() => setShowHelp(!showHelp)}>
        Toggle Help
      </button>

      {showHelp && <p>Username must be at least 5 characters.</p>}
    </div>
  );
}

export default App;
