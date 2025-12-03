/* Sort Object Array by Given Key
We want to sort a list of objects by a specified key's value. For this, we need to create a function named sortObjectsByKey. This function will take in three parameters:

arr: This is an array of objects that we want to sort.
key: This is the key we want to use for sorting the objects in the array.
compareFunc: This is a callback function. The callback function will take two objects as parameters. It will return a negative value if the first object's key value is less than the second object's, a positive value if the first object's key value is more than the second one's, and 0 if they are equal.
The function sortObjectsByKey will return a sorted array of objects based on the key's value.

Inputs:
An array of objects named arr.
A string named key which represents the key we want to sort the objects by.
A callback function named compareFunc. This function takes two objects as arguments. It returns a negative value if the first object's key value is less than the second object's, a positive value if the first object's key value is more than the second one's, and 0 if they are equal.
Output:
The function sortObjectsByKey will return a sorted array of objects based on the key's value.
Example
If we call sortObjectsByKey with an array

[{ "name": "John", "age": 25 }, { "name": "Jane", "age": 30 }, { "name": "Bob", "age": 20 }]

and the key "name",

The output will be:

[
  { name: 'Bob', age: 20 },
  { name: 'Jane', age: 30 },
  { name: 'John', age: 25 }
]
Here, the array is sorted in ascending order based on the name. */

function sortObjectsByKey(arr, keyName, compareFunc) {
  // Do not console.log here
  // Just return the result
  return arr.sort((a, b) => compareFunc(a[keyName], b[keyName]));
}

const compareFunc = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};

const readline = require("readline");

const input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (cmd) {
  input.push(cmd);
});

rl.on("close", function (cmd) {
  Main(input);
});

function Main(input) {
  const arr = JSON.parse(input[0]);
  console.log(sortObjectsByKey(arr, input[1], compareFunc));
}
