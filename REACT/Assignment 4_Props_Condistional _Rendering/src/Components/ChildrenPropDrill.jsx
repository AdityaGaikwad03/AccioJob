/* ## 📝 **Assignment 12 — Props Drilling + children together**

### 👉 Task:

Send `"Welcome User"` from App to Level1 → Level2 → Card component.

Card should wrap children. */


export default function ChildrenPropDrill() {
    return <Level1 message="Welcome User" />
}

function Level1({message}) {
    return <Level2 message={message} />
}

function Level2({message}) {
    return (
        <Card>
            <h3>{message}</h3>
        </Card>
    )
}

function Card({children}) {
    return (
        <div>{children}</div>
    )
}