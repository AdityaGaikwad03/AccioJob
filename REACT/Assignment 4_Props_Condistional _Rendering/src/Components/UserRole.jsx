/* # 📝 **Assignment 13 — Conditional Rendering + Props (Show user role)**

### 👉 Task

Create a `<UserRole />` component that accepts two props:

- `name`
- `role` → `"admin"` or `"user"`

If role is **admin** → show:

`Aarav (Admin Access)`

If role is **user** → show:

`Aarav (User Access)`

Use ternary. */


export default function UserRole({ name, role }) {
  return (
    <h2>
      {name} ({role === "admin" ? "Admin Access" : "User Access"})
    </h2>
  );
}