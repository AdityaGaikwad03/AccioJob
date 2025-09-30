/* ## Assignment 1

### Description

Make a small object to store a person’s name and age, and provide two methods: one to update the age and one to return a short info string.

### TODOs

- TODO 1: Create an object with `name` and `age`.
- TODO 2: Add `setAge(newAge)` to change `age`.
- TODO 3: Add `info()` to return `"Name (Age)"`. */

const obj = {
    Name: "Rohit",
    age: "21",

    setAge: function(newAge) {
        this.age = newAge;
        console.log(this.age)
    },
    info: function() {
        console.log(`${this.Name} (${this.age})`)
    }
}

obj.setAge(20);
obj.info();



