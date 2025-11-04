/*Assignment 2 — Verify result order

### Instructions

- Reuse `task(name, ms)`.
- Run three tasks with different times: T1 (200), T2 (1200), T3 (600).
- When `Promise.all` resolves, print the results array.
- Also print: `First result is: <results[0]>`.
Confirm that the first array element corresponds to T1, even though it may not finish last by time. */ 

let task = (name, ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} done in ${ms} ms`)
        }, ms)
    })
}

let p1 = task("A", 1200);
let p2 = task("B", 800);
let p3 = task("C", 1500);

Promise.all([p1, p2, p3])
.then((results) => {
    console.log(results);
    console.log(`First result is: ${results[0]}`);
})
.catch((err) => {
    console.log(err);
})
