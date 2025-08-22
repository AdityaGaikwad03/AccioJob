/* Simple Arrangement
Given an array A (0 indexed) of n integers from 0 to n-1 (each integer exactly once), output an array such that A[i] becomes A[A[i]].

Make sure you don't use extra memory than array itself.

Input Format
The first line of the input contains a number n, the number of integers in the array. The second line of the input contains n numbers, the elements of A.

User task: Since this is a functional problem you don't have to worry about the input. You just have to complete the function simpleArrangement.

Output Format
Output the required array of n integers.

Example 1
Input

5
4 2 3 0 1 
Output

1 3 0 4 2
Explanation

 Arr[i]=Arr[Arr[i]] hence the array is transformed

Constraints:
1 <= n <= 100000

0 <= A[i] <= n-1 */


function simpleArrangement(arr, n) {
  // Step 1: Encode new values into array
  for (let i = 0; i < n; i++) {
    arr[i] = arr[i] + (arr[arr[i]] % n) * n;
  }

  // Step 2: Extract new values
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(arr[i] / n);
  }

  return arr;
}


var readline = require("readline").createInterface(process.stdin);
var dp = new Array(200000);

let inputArr = [];
var lineNumber = -1;
var size;

// multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }

  // Exit Condition
  if (lineNumber == 1) {
    logic();
    readline.close();
  }
}

function logic() {
  const N = size;
  inputArr.shift();
  inputArr = inputArr[0].split(" ").map((x) => +x);
  console.log(simpleArrangement(inputArr, N).join(" ").trim());
}
