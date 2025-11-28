/* ## 📝 **Assignment 11 — Props Drilling (3 levels)**

### 👉 Task:

Pass a name `"Ujjwal"` from App → Level1 → Level2 → Level3.

Level3 should render it. */



export default function NamePropDrill() {
    return <Level1 name="Ujjwal" />
}

function Level1({name}) {
    return <Level2 name={name} />
}

function Level2({name}) {
    return <Level3 name={name} />
}

function Level3({name}) {
    return <h3>Welcome {name}</h3>
}
