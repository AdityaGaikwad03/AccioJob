/* ## 📝 **Assignment 4 — Create a Greeting component**

### 👉 Task:

Pass these props:

```jsx
<Greeting name="Aarav" city="Delhi" />

```

Inside child, show:

```
Hello Aarav from Delhi!

``` */


<Greeting name="Jay" city="Pune" />


export default function Greeting({name, city}) {
    return (
        <div>
            <h2>📝 Assignment 4 — Create a Greeting component</h2>
            <p>Hello {name} from {city}!</p>
        </div>
    )
}