/* Sum Array with Callback Function
Write a function sumWithCallback that takes in an array of numbers and a callback function as arguments. The function should use the callback function to compute the sum of the numbers in the array.

The callback function should take two arguments: the running sum and the current number in the array. It should return the updated running sum after adding the current number.

The function sumWithCallback should then return the final running sum after all numbers in the array have been processed by the callback function.

Input Format
arr: An array of numbers to be summed
callback: A function that takes two arguments: the running sum (a number) and the current number in the array (also a number), and returns the updated running sum (also a number)
Output Format
The function should return the final running sum after all numbers in the array have been processed by the callback function.

Example 1
Input
[1, 2, 3, 4, 5]
Output
30
Explanation
The function then iterates over the array, calling the callback function for each element and adding the result to a running sum. Finally, the function returns the total sum.
 */


function sumWithCallback(arr, callback) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = callback(sum, arr[i]);
  }
  return sum;
}

// Corrected callback (takes two args: running sum, current number)
function multiplyByTwo(sum, num) {
  return sum + num * 2;
}

const readline = require("readline");

const input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (cmd) {
  input.push(cmd);
});

rl.on("close", function () {
  Main(input);
});

function Main(input) {
  const arr = JSON.parse(input[0]); // e.g. [1,2,3,4,5]
  console.log(sumWithCallback(arr, multiplyByTwo));
}
