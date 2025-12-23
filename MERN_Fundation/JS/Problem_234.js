/* Counting Sort using Map
Given an array A[] with N elements, your task is to sort it using counting sort algorithm.

Input Format
First line of input contains a single integer N, next line contains N space separated integers depicting values of array.

Output Format
Print the Sorted array using counting sort

Example 1
Input


3
10 3 31
 
 

Output

3 10 31

Example 2
Input

5
8 9 10 11 12

Output

8 9 10 11 12

Constraints:

1 < = N < = 100

1 < = Arr[i] < = 100000 */

function countingSort(arr) {
  const countMap = new Map();

  // Count frequency
  for (let num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // Sort keys
  const sortedKeys = Array.from(countMap.keys()).sort((a, b) => a - b);

  // Build sorted array
  let result = [];
  for (let key of sortedKeys) {
    let freq = countMap.get(key);
    while (freq--) {
      result.push(key);
    }
  }

  return result;
}

/* Do not change input handling */
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber === 1) {
    logic();
    readline.close();
  }
}

function logic() {
  let arr = inputArr[1].split(" ").map(Number);
  console.log(countingSort(arr).join(" "));
}
