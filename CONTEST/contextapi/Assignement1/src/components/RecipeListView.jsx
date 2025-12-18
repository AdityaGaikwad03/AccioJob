export default function RecipeListView({ recipes }) {
  if (recipes.length === 0) {
    return <p>No recipes found. Try relaxing the filters.</p>;
  }

  return (
    <div>
      {recipes.map((r) => (
        <div key={r.id}>
          <h3>{r.name}</h3>
          <p>{r.difficulty}</p>
          <p>{r.isVegetarian ? "Vegetarian" : "Non-Veg"}</p>
        </div>
      ))}
    </div>
  );
}
