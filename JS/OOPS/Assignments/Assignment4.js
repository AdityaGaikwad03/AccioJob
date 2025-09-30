/* ## Assignment 5

### Description

Compare a primitive string and a wrapper string object. Add a small method on the string prototype and use it from both values.

### TODOs

- TODO 1: Make `p = "hello"` and `w = new String("hello")`, log `typeof`.
- TODO 2: Add `lastChar()` to `String.prototype` to return the last character.
- TODO 3: Call `lastChar()` on both `p` and `w`. */

let p = "hello";
let w = new String("hello");
console.log(typeof p);
console.log(typeof w);

String.prototype.lastChar = function() {
    return this.charAt(this.length - 1);
};

console.log(p.lastChar());
console.log(w.lastChar());