/* ## 📝 **Assignment 6 — Pass an array as props and list items**

### 👉 Task:

Pass:

```jsx
<Skills list={["HTML", "CSS", "React"]} />

```

Child should display all skills in a `<ul>`. */

<Skills list={["HTML", "CSS", "React"]} />

export default function Skills({list}) {
    return (
        <div>
            <h2>📝 Assignment 6 — Pass an array as props and list items</h2>
            <ul>
                {list.map((s, i) => (
                    <li key={i}>{s}</li>
                ))}
            </ul>
        </div>
    )
}