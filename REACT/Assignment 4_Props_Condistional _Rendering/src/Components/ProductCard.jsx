/* ## 📝 **Assignment 9 — Card that uses ternary with props**

### 👉 Task:

Pass:

```jsx
<ProductCard title="iPhone" inStock={false} />

```

Render:

- Green “In Stock”
- Red “Out of Stock” */

<ProductCard title="iPhone" inStock={true} />

export default function ProductCard({title, inStock}) {
    return (
        <div>
            <h2>📝 Assignment 9 — Card that uses ternary with props</h2>
            <h3>{title}</h3>
            <p>
                {inStock ? (
                    <span style={{color: "green"}}>In Stock</span>
                ) : (
                    <span style={{color: "red"}}>Out of Stock</span>
                )}
            </p>
        </div>
    )
}