/* ## 📝 Assignment 3

### Task

You are given this "callback hell" version of steps:

```jsx
setTimeout(() => {
  console.log("Step 1: Preparing cart");
  setTimeout(() => {
    console.log("Step 2: Processing payment");
    setTimeout(() => {
      console.log("Step 3: Generating invoice");
      setTimeout(() => {
        console.log("Step 4: Sending email receipt");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

```

Your job:

1. Create a helper function `runStep(stepName)` that returns a Promise.
2. Use it to rewrite the whole process using a clean `.then().then().then()...` chain.
3. At the end log `"Order complete ✅"`.

### Expected output (order):

Step 1 → Step 2 → Step 3 → Step 4 → Order complete ✅

💡 Why this matters:

- This is literally how we fix callback hell.
- Every step waits for the previous async step to finish.
*/


function runStep(stepName){
    return new Promise((resolve, reject) => {
        console.log(stepName);
        resolve();
    },1000)
}

runStep("Step 1: Preparing cart")
.then(() => runStep("Step 2: Processing payment"))  
.then(() => runStep("Step 3: Generating invoice"))
.then(() => runStep("Step 4: Sending email receipt"))
.then(() => {
    console.log("Order complete ✅")
})
.catch((err) => {
    console.log(err);
})