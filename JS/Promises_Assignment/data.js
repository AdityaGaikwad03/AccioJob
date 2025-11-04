// //fatch data from api and print the data using promiseall
// const userData = fetch("https://jsonplaceholder.typicode.com/users/1");
// const postData = fetch("https://jsonplaceholder.typicode.com/posts/1");
// const commentData = fetch("https://jsonplaceholder.typicode.com/comments/1");

// Promise.all([userData, postData, commentData])
// .then((result) => {
//     return Promise.all(result.map(res => res.json()));
// })
// .then((data) => {
//     console.log(data);
// })  
// .catch((err) => console.log(err))


// print parallel tasks using promise all
// function fakeAPI(name, delay) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log(name + " completed");
//       resolve(name);
//     }, delay);
//   });
// }

// Promise.all([
//   fakeAPI("Task 1", 2000),
//   fakeAPI("Task 2", 3000),
//   fakeAPI("Task 3", 1000)
// ])



//sequential
// function fakeAPI(name, delay) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log(name + " completed");
//       resolve(name);
//     }, delay);
//   });
// }
// fakeAPI("task 1", 2000)
// .then(() => {
//     return fakeAPI("task 2, 3000")
// })
// .then(() =>{
//     return fakeAPI("task 3, 1000")
// })
// .then(function() {
//   console.log("✅ All done (Parallel)");
// });


// Promise.race()
// example - 1
// const p1 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 1"), 2000));
// const p2 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 2"), 1000));
// const p3 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 3"), 3000));

// Promise.race([p1, p2, p3])
// .then((result) => {
//     console.log("First resolved", result);
// })
// .catch((err) => {
//     console.log(err);
// })




// example - 2
const p1 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 1"), 2000));
const p2 = new Promise((resolve, reject) => setTimeout(() => reject("🏆 Promise 2 failed"), 1000));
const p3 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 3"), 3000));

Promise.race([p1, p2, p3])
.then((result) => {
    console.log("First completed", result);
})
.catch((err) => {
    console.log(err);
})



// example - 3
const pizzaDelivery = (name, time, shouldFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            shouldFail
                ? reject(`${name} failed ❌`)
                : resolve(`${name} delivered in ${time / 1000}s 🍕`);
        }, time);
    });
};

const dominos = pizzaDelivery("Dominos", 3000, false);
const pizzaHut = pizzaDelivery("Pizza Hut", 2000, false);
const mojo = pizzaDelivery("Mojo", 1000, false);




// API Timeout
// Timeout promise
// const timeout = (ms) => new Promise((resolve, reject) => {
//     setTimeout(() => reject("⏰ Request timed out!"), ms);
// });

// Fake API request
// const fakeAPI = new Promise(resolve => {
//     setTimeout(() => resolve("✅ Data received successfully"), 2000);
// });

// Run race between API & timeout




// predict output - 1
// const fast = new Promise(resolve => setTimeout(() => resolve("🚀 Fast"), 1000));
// const medium = new Promise(resolve => setTimeout(() => resolve("🚗 Medium"), 2000));
// const slow = new Promise(resolve => setTimeout(() => resolve("🐢 Slow"), 3000));

// Promise.race([fast, medium, slow])
//   .then(res => console.log("Winner:", res));





// predict output - 2
// const p1 = new Promise(resolve => setTimeout(() => resolve("✅ Success"), 3000));
// const p2 = new Promise((_, reject) => setTimeout(() => reject("❌ Error"), 1000));

// Promise.race([p1, p2])
//     .then(result => console.log("Result:", result))
//     .catch(error => console.log("Caught:", error));
