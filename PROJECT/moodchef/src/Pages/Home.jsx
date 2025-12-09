import { useState } from "react";
import Header from "../Components/Header";
import MoodSelector from "../Components/MoodSelector";
import RecipesList from "../Components/RecipesList";

export default function Home() {
  const [mood, setMood] = useState("");

  return (
    <div className="container">
      <Header />

      {/* MoodSelector sends selected mood to Home using props */}
      <MoodSelector onMoodChange={setMood} />

      {/* Home sends selected mood to RecipesList using props */}
      <RecipesList activeMood={mood} />
    </div>
  );
}
