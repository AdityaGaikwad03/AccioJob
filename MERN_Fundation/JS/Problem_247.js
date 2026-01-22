/* Merge Sorted Arrays
Write a JavaScript function that merges two sorted arrays into a single sorted array. The function should take two arguments: the two arrays to be merged.

Input Format
The first line is one array, arr1. The second line is the second array, arr2.

Output Format
For each test case, return the merged array.

Examples
Example 1
Input
[1, 3, 4, 5]
[2, 4, 6, 8]
Output
[1, 2, 3, 4, 4, 5, 6, 8] */

function mergeSortedArrays(arr1, arr2) {
  let i = 0, j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // add remaining elements
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
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

rl.on("close", function (cmd) {
  Main(input);
});

function Main(input) {
  const arr1 = JSON.parse(input[0]);
  const arr2 = JSON.parse(input[1]);
  const mergedArray = mergeSortedArrays(arr1, arr2);
  process.stdout.write("[");
  process.stdout.write(mergedArray.join(", "));
  process.stdout.write("]");
}
