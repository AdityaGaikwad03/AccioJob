/* ## Assignment 2 — One failure cancels all (Promise.all)

### Instructions

- Create four promises using `Promise.resolve`/`Promise.reject`:
    - `Promise.resolve("OK 1")`, `Promise.reject("Fail 2")`, `Promise.resolve("OK 3")`, `Promise.reject("Fail 4")`.
- Pass all four to `Promise.all`.
- Observe that `.catch` runs; log the error. */

let p1 = Promise.resolve("ok1")
let p2 = Promise.reject("fail 2")
let p3 = Promise.resolve("ok 3")
let p4 = Promise.reject("fail 4")

Promise.all([p1,p2,p3,p4])
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})