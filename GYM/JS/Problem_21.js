/* Dish Price
You are working on a project for a local restaurant. The restaurant serves a variety of dishes, and each dish has a unique identification number, a name, and a price. Your task is to create a function that takes in a 2D array of dishes and returns the total price of all the dishes.

Input Format
A 2D array of integers, arr, where each subarray represents a dish and has the following format:

[id, name, price]

Output Format
An integer denoting sum of all the dishes.

Example 1
Input

[["1", "Dish1", 10],["2", "Dish2", 20], ["3", "Dish3", 30]] 

Output

60
Explanation

Testcase1: 10+20+30=60

Constraints:

1 <= N <= 100 */


function totalPrice(arr) {
   let sum = 0;
  for (let dish of arr) {
    sum += Number(dish[2]); // Add the price (ensure it's a number)
  }
  return sum;
}

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
 
  if (lineNumber ==  0) {
    logic("s");
    readline.close();
  }
}



function logic(input) {
    let arr=JSON.parse(inputArr[0]);
    console.log(totalPrice(arr));
}

