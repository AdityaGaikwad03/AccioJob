/* ## Assignment 3

### Description

Use a base object to share a method, and make a new object from it using `Object.create`. The child object should have its own `title` and use the base’s `describe()`.

### TODOs

- TODO 1: Make a base object with `describe()` returning `"Title: <title>"`.
- TODO 2: Create a child object via `Object.create(base)`.
- TODO 3: Set `child.title = "My Note"` and call `child.describe()`. */

const base = {
    describe: function() {
        return `Title: ${this.title}`;
    }
};

const child = Object.create(base);
child.title = "My Note";
console.log(child.describe());