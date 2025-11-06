/* ## Assignment 4 — Parallel vs Sequential (fakeAPI)

### Instructions

- Implement `fakeAPI(name, delay)` that logs `"<name> completed"` and resolves `name` after `delay`.
- Run **parallel** with `Promise.all` for: Task 1 (1500), Task 2 (1000), Task 3 (500). After completion, log “All done (Parallel)”.
- Then run **sequential** chaining `then` for: Task 1 (1500) → Task 2 (1000) → Task 3 (500), and finally log “All done (Sequential)”. */

function fakeAPI(name, delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(name + " completed");
      resolve(name);
    }, delay);
  });
}

Promise.all([
  fakeAPI("Task 1", 1500),
  fakeAPI("Task 2", 1000),
  fakeAPI("Task 3", 500)
])
.then(() => console.log("all done (Parallel)"))


fakeAPI("task 1", 1500)
.then(() => {
    return fakeAPI("task 2, 1000")
})
.then(() =>{
    return fakeAPI("task 3, 800")
})
.then(function() {
  console.log("All done (Sequential)");
});