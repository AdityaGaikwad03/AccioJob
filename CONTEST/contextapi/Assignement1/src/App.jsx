import "./App.css";
import { useState } from "react";
import FilterControls from "./components/FilterControls";
import RecipeListView from "./components/RecipeListView";

const recipesData = [
  { id: 1, name: "Paneer Curry", difficulty: "easy", isVegetarian: true },
  { id: 2, name: "Chicken Biryani", difficulty: "hard", isVegetarian: false },
  { id: 3, name: "Veg Salad", difficulty: "easy", isVegetarian: true },
  { id: 4, name: "Beef Steak", difficulty: "hard", isVegetarian: false },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [onlyVeg, setOnlyVeg] = useState(false);
  const [hardOnly, setHardOnly] = useState(false);

  const filteredRecipes = recipesData.filter((r) => {
    const matchName = r.name.toLowerCase().includes(search.toLowerCase());
    const matchVeg = !onlyVeg || r.isVegetarian;
    const matchHard = !hardOnly || r.difficulty === "hard";
    return matchName && matchVeg && matchHard;
  });

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <FilterControls
          search={search}
          setSearch={setSearch}
          onlyVeg={onlyVeg}
          setOnlyVeg={setOnlyVeg}
          hardOnly={hardOnly}
          setHardOnly={setHardOnly}
        />
        <RecipeListView recipes={filteredRecipes} />
      </div>
    </div>
  );
}
