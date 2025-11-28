/* # 📝 **Assignment 18 — Passing Component as Prop + Conditional Rendering**

### 👉 Task

Create a `<Card />` that accepts:

- `title`
- `icon` → JSX icon component

Usage:

```jsx
<Card
  title="Notifications"
  icon={<span>🔔</span>}
/>

```

Inside Card:

If icon not provided → show `"No Icon"`

Else show given icon. */

export default function Card2({title, icon}) {
    return (
        <div>
            <h3>{title}</h3>

            {icon ? icon : <p>No Icon</p>}
        </div>
    )
}