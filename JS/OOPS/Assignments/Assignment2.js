// ## Assignment 2

// ### Description

// Make a basic “counter maker” using a function that creates counters. Each counter has a `count` and two methods: `inc()` and `value()`.

// ### TODOs

// - TODO 1: Write a function that sets `this.count = 0`.
// - TODO 2: Put `inc()` on the function’s prototype to add 1.
// - TODO 3: Put `value()` on the prototype to return the count.

function Counter() {
    this.count = 0;
}

Counter.prototype.inc = function() {
    this.count += 1;
}

Counter.prototype.value = function() {
    return this.count;
};
let counter1 = new Counter();
counter1.inc();
counter1.inc();
console.log(counter1.value());
let counter2 = new Counter();
counter2.inc();
console.log(counter2.value());
