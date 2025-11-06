/* ## 📝 Assignment 1

### Task

Write a function `checkStock(product)` that:

- Returns a Promise.
- After 1 second, it should:
    - resolve with `"In stock: <product>"` if the product is `"laptop"` or `"phone"`.
    - reject with `"Out of stock: <product>"` for anything else.

Then call the function for:

- `"laptop"` → log the success message in `.then()`
- `"tablet"` → log the error in `.catch()`

Also, always log `"Stock check complete"` in `.finally()`.

### Expected behavior

- For `"laptop"` it should log success.
- For `"tablet"` it should log error.
- In both cases, `.finally()` should run. */

function checkStock(product){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(product === "laptop" || product === "phone"){
                resolve(`In stock: ${product}`)
            }
            else{
                reject(`Out of stock: ${product}`)
            }
        }, 1000);
    })
}

checkStock("tablet")
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("Stock check complete")
})