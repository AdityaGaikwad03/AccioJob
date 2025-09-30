/* ## Assignment 7

### Description

Create a small class with one method, then add another method after the class is declared by writing to its prototype. Confirm an instance uses both.

### TODOs

- TODO 1: Make a class with `constructor(name)` and `hello()` → `"Hello, <name>"`.
- TODO 2: After the class, add `bye()` via `ClassName.prototype`.
- TODO 3: Make an instance and call both methods. */

class Greet {
    constructor(name) {
        this.name = name;
    }

    hello() {
        return `Hello, ${this.name}`;
    }
}

Greet.prototype.bye = function() {
    return `Goodbye, ${this.name}`;
};

const greeting = new Greet("Alice");
console.log(greeting.hello());
console.log(greeting.bye());
