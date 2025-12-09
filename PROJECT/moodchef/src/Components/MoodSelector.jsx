import { useState } from "react";

const moods = ["Happy", "Sad", "Angry", "Lazy", "Excited"];

export default function MoodSelector({onMoodChange}) {
  const [activeMood, setActiveMood] = useState("");

    function handleMoodClick(mood) {
    setActiveMood(mood);
    onMoodChange(mood); // 🔥 Send mood to parent
  }

  return (
    <div className="glass-card">
      <h2>Select Your Mood</h2>

      <div className="mood-box">
        {moods.map((mood) => (
          <button
            key={mood}
            className={`mood-btn ${activeMood === mood ? "active-mood" : ""}`}
            onClick={() => handleMoodClick(mood)}
          >
            {mood}
          </button>
        ))}
      </div>
      {/* TODO: Pass this active mood to parent using props or context (for advanced students)
          TODO: OR store in a global state later */}

    </div>
  );
}
