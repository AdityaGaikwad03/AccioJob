/* ## 📝 **Assignment 7 — Pass an object as a prop**

### 👉 Task:

Pass a user object:

```jsx
<User info={{ name: "Sara", age: 20, email: "sara@mail.com" }} />

```

Render all values in child. */


 <User info={{ name: "Sara", age: 20, email: "sara@mail.com" }} />


export default function User({ info }) {
    return (
        <div>
            <h2>📝 Assignment 7 — Pass an object as a prop</h2>
            <h2>{info.name}</h2>
            <p>Age: {info.age}</p>
            <p>Email: {info.email}</p>
        </div>
    );
}