/* Implementing Merge Sort
Given an unsorted array, your task is to sort the array using merge sort.

Note : Since this will be a functional problem, you don't have to take input.

Input Format
You have to complete the function MergeSort() which takes 2 arguments.

 arr: input array
 N : Size of array

Output Format
You need to return the sorted array. The driver code will print the array in sorted form.

Example 1
Input

 2
 3
 3 1 2
 3
 4 5 6


Output

 1 2 3
 4 5 6

Explanation

sorted values of the array

Constraints:
1 <= T <= 100 1 <= N <= 10^4 1 <= Arr[i] <= 10^5 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputData = "";

class Solution {
  merge(left, right) {
    let i = 0, j = 0;
    const result = [];

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  }

  mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = this.mergeSort(arr.slice(0, mid));
    const right = this.mergeSort(arr.slice(mid));

    return this.merge(left, right);
  }

  solve(input) {
    const lines = input.trim().split("\n");
    let idx = 0;
    const T = +lines[idx++];

    let outputs = [];

    for (let t = 0; t < T; t++) {
      const N = +lines[idx++];
      const arr = lines[idx++].split(" ").map(Number);

      const sorted = this.mergeSort(arr);
      outputs.push(sorted.join(" "));
    }

    console.log(outputs.join("\n"));
  }
}

rl.on("line", (line) => {
  inputData += line + "\n";
});

rl.on("close", () => {
  const solution = new Solution();
  solution.solve(inputData);
});
