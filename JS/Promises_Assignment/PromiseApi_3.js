/* ## Assignment 3 — Map values to async work

### Instructions

- Create `convert(n, ms)` that resolves to `n * 2` after `ms` milliseconds.
- Given `nums = [3, 5, 9, 10]`, map each to a `convert` promise with `300` milliseconds delay.
- Use `Promise.all` to get all converted values.
- Log the resulting array. */

let convert = (n, ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * 2)
        }, ms)
    })
}
let nums = [3, 5, 9, 10]
Promise.all(nums.map(num => convert(num, 300)))
.then((data) => {
    console.log(data);
})  
.catch((err) => console.log(err))