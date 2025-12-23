import { useMemo, useState } from "react";

const products = [
  "Laptop Pro",
  "Smart Watch",
  "Wireless Earbuds",
  "Mechanical Keyboard",
  "Gaming Mouse",
  "4K Monitor",
  "USB Hub",
  "Webcam HD"
];

function App() {
  const [search, setSearch] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((product) =>
      product.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h2>Product Search</h2>

      <input
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setPreviewMode(!previewMode)}>
        Toggle Preview Mode
      </button>

      <ul>
        {filteredProducts.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      {previewMode && <p>Preview mode enabled</p>}
    </div>
  );
}

export default App;
