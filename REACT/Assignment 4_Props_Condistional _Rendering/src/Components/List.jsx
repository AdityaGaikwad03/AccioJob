/* # 📝 **Assignment 16 — Pass Array + children + Conditional Rendering**

### 👉 Task

Create a `<List />` component with props:

- `items` (array)
- children (heading or description)

If items array is empty → show `"No items found"`

Else → show the list.

Usage example:

```jsx
<List items={[10, 20, 30]}>
  <h2>Numbers List</h2>
</List>
``` */

export default function List({items, children}) {
    return (
        <div>
            {children}

            {items.length === 0 ? (
                <p>No items fiund</p>
            ) : (
                <ul>
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}