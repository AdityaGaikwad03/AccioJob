/* ## 📝 **Assignment 3 — Return different components based on age**

### 👉 Task:

Create:

```jsx
const age = 17;

```

If `age >= 18` → render `<Adult />`

Else → render `<Minor />`. */

export default function BasedOnAge() {
    let age = 17;
    if(age > 18) {
        return <Adult />
    } else {
        return <Minor />
    }
}

function Adult() {
    return <h3>Info - Adult</h3>
}

function Minor() {
    return <h3>Info - Minor</h3>
}