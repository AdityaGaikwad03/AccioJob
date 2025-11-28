/* # 📝 **Assignment 15 — Props Drilling (4 Levels) + Conditional Rendering**

### 👉 Task

Pass `"Online"` status from App → A → B → C → StatusBox.

Inside StatusBox:

If status === `"Online"` → green text

Else → red text. */

export default function Status() {
    return <A status="Online" />
}

function A({status}) {
    return <B status={status} />
}

function B({status}) {
    return <C status={status} />
}

function C({status}) {
    return <StatusBox status={status} />
}

function StatusBox({status}) {
    return (
        <h3 style={{color: status === "Online" ? "green" : "red"}}>
            {status}
        </h3>
    )
}