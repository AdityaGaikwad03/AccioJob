/* Filtering Even Numbers Using Callback Functions
Write a function that takes in an array of numbers and uses a callback function to filter out even numbers. The function should implement the callback function as a separate function that takes a single argument (a number) and returns true if the number is even and false otherwise.

Input Format
arr: An array of numbers to be filtered.
isEven: A function that takes a single argument (a number) and returns true if the number is even and false otherwise.
Output Format
The function should return a new array containing only the odd numbers from the input array.

Example 1
Input
[1, 2, 3, 4, 5, 6, 7, 8, 9]
Output
[1, 3, 5, 7, 9]
Explanation
The resulting output array contains only the odd numbers from the input array, which are [1, 3, 5, 7, 9]. */

function filterEvenNumbers(arr, isEven) {
  // Write your code here
  // Do not console.log, just return the result.
   return arr.filter(num => !isEven(num));
}

const isEven = (num) => num % 2 === 0;

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
  const arr = JSON.parse(input[0]).map((e) => parseInt(e, 10));
  console.log(filterEvenNumbers(arr, isEven));
}
