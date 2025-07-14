/* Smallest Number in an Array using Recursion
Given an array arr of length n, you have to find the minimum element present in the array using recursion.

Input Format
First line consists of an integer n, the number of elements in the array

Second line consists of n spaced inetegrs, representing the array arr.

Output Format
Print the minimum element of the array.

Example 1
Input

3
1 2 3
Output

1
Explanation

1 is the smallest among 1, 2 and 3.

Example 2
Input

5
5 4 0 -8 67
Output

-8
Explanation

-8 is the smallest among 5, 4, 0, -8 and 67

Constraints
1 <= n <= 10^3

-10^4 <= arr[i] <= 10^4

 */


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];

rl.on("line", (input) => {
  inputLines.push(input.trim());
  if (inputLines.length === 2) {
    const solution = new Solution();
    solution.solve(inputLines);
    rl.close();
  }
});

class Solution {
  solve(input) {
    const arr = input[1].split(' ').map(Number);
    const min = this.findMin(arr, 0); 
    console.log(min);
  }

  findMin(arr, index) {
    if (index === arr.length - 1) return arr[index]; 
    const minRest = this.findMin(arr, index + 1);
    return Math.min(arr[index], minRest);
  }
}

