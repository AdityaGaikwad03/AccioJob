/* ## 📝 **Assignment 1 — Show a message only if user is logged in**

### **👉 Task:**

Create two variables:

```jsx
const isLoggedIn = true;
const username = "Ujjwal";

```

If logged in → display:

`Welcome, Ujjwal!`

If not → display:

`Please log in to continue.` */

export default function ShowMessage() {
    const isLoggedIn = true;
    const username = "Ujjwal";

    return (
        <div>
            {isLoggedIn ? (
                <p>Welcome {username}</p>
            ) : (
                <p>Please login first!</p>
            )}
        </div>
    )
}


