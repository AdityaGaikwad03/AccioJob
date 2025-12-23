import { useMemo, useState } from "react";

const marks = [78, 85, 90, 66, 72, 88];

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const averageScore = useMemo(() => {
    console.log("Calculating average...");
    return (
      marks.reduce((sum, score) => sum + score, 0) / marks.length
    );
  }, []);

  return (
    <div>
      <h2>Student Performance</h2>
      <h3>Average Score: {averageScore.toFixed(2)}</h3>

      <button onClick={() => setShowDetails(!showDetails)}>
        Toggle Details
      </button>

      {showDetails && (
        <ul>
          {marks.map((m, i) => (
            <li key={i}>Student {i + 1}: {m}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
