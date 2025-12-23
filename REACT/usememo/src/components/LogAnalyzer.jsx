import { useMemo, useState } from "react";

const LOG_TEXT = `
INFO App started
WARN Disk usage high
INFO User logged in
ERROR Database connection failed
INFO Retrying connection
WARN Memory usage high
ERROR Timeout while fetching data
INFO Operation successful
`;

function LogAnalyzer() {
  const [showTips, setShowTips] = useState(false);

  // Expensive parsing logic
  const logStats = useMemo(() => {
    console.log("Parsing log text...");

    const lines = LOG_TEXT.split("\n");
    let errorCount = 0;
    let warnCount = 0;

    for (let line of lines) {
      if (line.includes("ERROR")) errorCount++;
      if (line.includes("WARN")) warnCount++;
    }

    return { errorCount, warnCount };
  }, [LOG_TEXT]); // ✅ correct dependency

  return (
    <div style={{ padding: "20px" }}>
      <h2>Log Analyzer</h2>

      <p><strong>ERROR Count:</strong> {logStats.errorCount}</p>
      <p><strong>WARN Count:</strong> {logStats.warnCount}</p>

      <button onClick={() => setShowTips(prev => !prev)}>
        Toggle Tips
      </button>

      {showTips && (
        <div style={{ marginTop: "10px" }}>
          <p>💡 Tips:</p>
          <ul>
            <li>Monitor ERROR logs closely</li>
            <li>WARN logs may indicate future issues</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LogAnalyzer;
