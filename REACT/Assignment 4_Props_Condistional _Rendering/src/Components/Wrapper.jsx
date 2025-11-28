/* # 📝 **Assignment 17 — Pass Function Prop + children Prop**

### 👉 Task

Make a `<Wrapper>` component that:

- Wraps children inside a bordered box
- Takes a function prop `onClick`
- When box is clicked → call that function

Usage:

```jsx
<Wrapper onClick={() => alert("Box clicked!")}>
  <h2>Content inside wrapper</h2>
</Wrapper>
``` */


export default function Wrapper({onClick, children}) {
    return (
        <div onClick={onClick} style={{border: "1px solid black", padding: "10px"}}>
            {children}
        </div>
    )
}