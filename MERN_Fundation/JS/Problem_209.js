/* Even-Odd seperate sorting
Given an array A of positive integers. Your task is to sort them in such a way that the first part of the array contains odd numbers sorted in descending order, rest portion contains even numbers sorted in ascending order.

Input Format
First line of each test case contains an integer N denoting the size of the array. The next line contains N space separated values of the array.

Output Format
Print the space separated values of the modified array.

Example 1
Input

7
1 2 3 5 4 7 10
output

7 5 3 1 2 4 10
Explanation

characters at 1st , 3rd and 5th index.
constraints
1 <= N <= 100000

0 <= A[i] <= 100000 */

function sortEvenOdd(arr, arrSize) {
  // return the sorted array 
  const odds = [];
  const evens = [];

  for (let num of arr) {
    if (num % 2 === 1) odds.push(num);
    else evens.push(num);
  }
  odds.sort((a, b) => b - a);
  evens.sort((a, b) => a - b);
  return [...odds, ...evens];
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  // if (lineNumber == 0) {
  //   size = parseInt(inputArr[0]);
  // }
  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let n = parseInt(inputArr[0].trim());
  let Arr = inputArr[1]
    .trim()
    .split(" ")
    .map((x) => parseInt(x));
  console.log(sortEvenOdd(Arr, n).join(" ").trim());
}
