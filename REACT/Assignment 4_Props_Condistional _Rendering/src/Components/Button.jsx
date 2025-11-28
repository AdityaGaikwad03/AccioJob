/* ## 📝 **Assignment 8 — Reusable Button using props**

### 👉 Task:

Make this usage work:

```jsx
<Button text="Login" color="green" />
<Button text="Signup" color="blue" />
``` */

export default function Button({ text, color }) {
  return (
    <div>
      <button
        style={{ background: color, padding: "8px 16px", color: "white" }}
      >
        {text}
      </button>
    </div>
  );
}
