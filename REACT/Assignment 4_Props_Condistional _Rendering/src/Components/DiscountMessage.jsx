/* ## 📝 **Assignment 2 — Show a discount message for premium users**

### 👉 Task:

Make a variable:

```jsx
const isPremiumUser = false;

```

If true → show `"You get 50% discount!"`

Else → show `"Upgrade to premium for discounts!"` */

export default function DiscountMessage() {
    const isPremiumUser = false;

    return (
        <div>
            <h2>📝 Assignment 2 — Show a discount message for premium users</h2>
            {isPremiumUser && <p>You get 50% discount!</p>}
            {!isPremiumUser && <p>Upgrade to premium for discounts!</p>}
        </div>
    )
}