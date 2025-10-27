// let fileUpload = new Promise((resolve, reject) => {
//     let uploadSpeed = 80;
//     console.log("uploading a file");
//     setTimeout(() => {
//         if(uploadSpeed > 50){
//             resolve("file upladed successfully");
//         } else {
//             reject("file upload failed due to slow internet!.");
//         }
//     }, 2000)
// });

// fileUpload
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("file upload process finished")
//     })

// let transection = new Promise((resolve, reject) => {
//     let balance = 50000;
//     let amount = 30000;
//     console.log("transection being processed");
//     setTimeout(() => {
//         if(balance >= amount){
//             console.log("transection sucessfully done");
//         }
//         else{
//             console.log("transection failed");
//         }
//     }, 2000)
// });

// transection
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("transection finished");
//     })


//promise chaining

// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("step 1: user logged in")
//     }, 1500)
// })
// .then((msg) => {
//     console.log(msg)
//     return "step 2: fatched user details";
// })
// // .then((msg) => {
// //     console.log(msg);
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve("step 3: rendered user dashboard 🖥️")
// //         }, 1000);
// //     })
// // })
// .then((msg) => {
//     // throw new Error("error message")
//     console.log(msg)
//     return "step 3: rendered user dashboard";
// })
// .then((msg) => {
//     console.log(msg);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("rendering dashboard process completed!");
// })

//callback hell
// loginUser("jay@example.com", "1234", function (user) {
//     console.log("1️⃣ User logged in:", user);

//     getUserProfile(user.id, function (profile) {
//         console.log("2️⃣ User profile loaded:", profile);

//         getUserOrders(profile.id, function (orders) {
//             console.log("3️⃣ Orders fetched:", orders);

//             showDashboard(orders, function () {
//                 console.log("4️⃣ Dashboard shown!");
//             });
//         });
//     });
// });


// // promises
// function loginUser(email, password) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 1, email });
//         }, 1000);
//     });
// }

// function getUserProfile(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: userId, name: "Jay", age: 26 });
//         }, 1000);
//     });
// }

// function getUserOrders(profileId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Order-101", "Order-102", "Order-103"]);
//         }, 1000);
//     });
// }

// function showDashboard(orders) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Dashboard displaying orders:", orders);
//             resolve("Dashboard Ready ✅");
//         }, 1000);
//     });
// }

// loginUser("ads", "asdfg@gmail.com")
// .then((user) => {
//     console.log("user logged in",user);
//     return getUserProfile(user.id);
// })
// .then((profile) => {
//     console.log("profile fatched", profile)
//     return getUserOrders(profile.id)
// })
// .then((orders) => {
//     // throw new Error("error message")
//     console.log("orders fatched", orders)
//     return showDashboard(orders);
// })
// .then((msg) => {
//     console.log(msg);
// })
// .catch((err) => {
//     console.log("something get wrong",err);
// })
// .finally(() => {
//     console.log("rendering dashboard process completed!");
// })



// setTimeout(() => {
//     console.log("step 1 done");
//     setTimeout(() => {
//         console.log("step 2 done");
//         setTimeout(() => {
//             console.log("step 3 done");
//         }, 1000);
//     }, 1000)
// }, 1000)

function first(step, time){
    return new Promise((resolve) => {
        console.log(`${step} done`);
        resolve();
    },time)
}

first("step 1", 1000)
.then(() => first("step 2", 1000))
.then(() => first("step 3", 1000))
.then(() => console.log("all steps done"))