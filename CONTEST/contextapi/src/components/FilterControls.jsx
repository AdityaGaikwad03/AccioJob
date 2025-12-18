export default function FilterControls({
  search,
  setSearch,
  onlyVeg,
  setOnlyVeg,
  hardOnly,
  setHardOnly
}) {
  return (
    <div>
      <input
        placeholder="Search recipe"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={onlyVeg}
          onChange={() => setOnlyVeg(!onlyVeg)}
        />
        Only Vegetarian
      </label>

      <label>
        <input
          type="checkbox"
          checked={hardOnly}
          onChange={() => setHardOnly(!hardOnly)}
        />
        Difficulty: Hard only
      </label>
    </div>
  );
}
