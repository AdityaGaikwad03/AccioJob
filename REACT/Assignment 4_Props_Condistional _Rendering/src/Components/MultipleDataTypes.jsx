/* ## 📝 **Assignment 5 — Pass multiple data types as props**

### 👉 Task:

Send:

- name `"Rohan"`
- age `{21}`
- isOnline `{true}`

Display them inside child. */

<MultipleDataTypes
          name="Rohan"
          age={21}
          isOnline={true}
 />
        
export default function MultipleDataTypes({ name, age, isOnline }) {
    return (
        <div>
            <h2>📝 Assignment 5 — Pass multiple data types as props</h2>
            <h3>{name}</h3>
            <p>Age: {age}</p>

            {/* Conditional rendering based on prop */}
            <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
        </div>
    );
}