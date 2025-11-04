/* ## Assignment 4 — One rejection cancels the group

### Instructions

- Create `okAfter(ms)` that resolves with `OK after <ms>`.
- Create `failAfter(ms)` that rejects with `Fail after <ms>`.
- Call `Promise.all` with `[okAfter(500), failAfter(800), okAfter(400)]`.
- Observe which handler runs. Log the error. */

let okAfter = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`ok after ${ms}`)
        }, ms)
    })
}

let failAfter = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
          reject(`fail after ${ms}`)
      }, ms)
    })
}

let a = okAfter(500)
let b = failAfter(800)
let c = okAfter(400)
Promise.all([a,b,c]) 
.then((res) => {
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})