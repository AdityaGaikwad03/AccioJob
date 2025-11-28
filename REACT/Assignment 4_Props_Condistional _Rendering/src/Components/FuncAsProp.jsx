/* ## 📝 **Assignment 10 — Pass a function as a prop**

### 👉 Task:

Create:

```jsx
<Child onPress={() => alert("Pressed!")} />

```

Child should run that function on button click. */


<FuncAsProp onPress={() => alert("Pressed!")} />

export default function FuncAsProp({onPress}) {
    return (
        <div>
            <h2>📝 Assignment 10 — Pass a function as a prop</h2>
            <button onClick={onPress}>Click Me</button>
        </div>
    )
}