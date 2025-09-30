
// prototypes
// let user1 = {
//     firstName: "Rohit",
//     lastName: "Shah",
//     contact: "555555"
// }

// let user2 = {
//     firstName: "Amit",
//     lastName: "Gupta",
//     contact: "5486561"
// }

// let user2 = Object.create(user1);

// console.log(user2); 

// console.log(user1.firstName);
// console.log(user2.firstName);

// console.log(user1.__proto__);
// console.log(user2.__proto__);


// let str = "Learning is fun";
// console.log(str.__proto__.__proto__.__proto__);

// let n = 4;
// console.log(n.__proto__);

// let str2 = new String("Another string");

// String
// Boolean
// Number

// Wrapper classes

// str.__proto__ = String.prototype


let u1 = {
    x1: "inside u1"
}

let u2 = {
    x2: "inside u2",
    __proto__: u1
}

let u3 = {
    x3: "inside u3",
    __proto__: u2
}