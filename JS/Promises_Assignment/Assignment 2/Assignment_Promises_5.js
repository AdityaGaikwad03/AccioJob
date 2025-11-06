/* ## Assignment 5 — Race: fastest success wins (Promise.race)

### Instructions

- Create three promises that resolve:
    - p1 after 2000 with “Promise 1”, p2 after 700 with “Promise 2”, p3 after 1200 with “Promise 3”.
- Use `Promise.race` and log “First resolved:” with the winner. */

const p1 = new Promise(resolve => setTimeout(() => resolve("Promise 1"), 2000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Promise 2"), 700));
const p3 = new Promise(resolve => setTimeout(() => resolve("Promise 3"), 1200));

Promise.race([p1, p2, p3])
.then((result) => {
    console.log("First resolved", result);
})
.catch((err) => {
    console.log(err);
})
