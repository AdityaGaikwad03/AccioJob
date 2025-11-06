/* ## Assignment 1 — Run three tasks in parallel

### Instructions

- Create a function `task(name, ms)` that returns a Promise resolving with the string:
    
    `"<name> done in <ms> ms"` after `ms` milliseconds.
    
- Start three tasks in parallel: A (1200), B (800), C (1500).
- Use `Promise.all` to wait for all to finish.
- Log the array of results, then log: `All tasks finished`. */ 

function task(name, ms){
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log(`${name} done in ${ms} ms`)
            resolve(name);
        }, ms)
    })
}
Promise.all([
  task("A", 1200),
  task("B", 800),
  task("C", 1500)
])
.then(()=>{
    console.log("All tasks finished")
})