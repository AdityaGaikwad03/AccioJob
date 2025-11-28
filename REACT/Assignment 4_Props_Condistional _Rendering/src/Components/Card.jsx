/* # 📝 **Assignment 14 — children Prop + Condition (Custom Card)**

### 👉 Task

Make a `<Card>` component that takes:

- `title` prop
- `children`

Inside child, if title is missing → show `"No Title Provided"`. */

export default function Card({title, children}) {
    return (
        <div>
            <h3>{title ? title : "No Title Provided"}</h3>

            {children}
        </div>
    )
}