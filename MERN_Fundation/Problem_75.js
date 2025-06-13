/* Maximum difference between two elements in an Array
Write a program to find out the maximum difference between any two element in an array.
Note: if an element is arr[i] and another element is arr[j] then difference will be |arr[i]-arr[j]| .

Input Format
First line contains n size of the array.

Second line contains n elements of the array. Elements will always be positive integers.

n will always be greater than 1.

Output Format
Print the maximum difference between any two element of an array.

Example 1
Input

4
16 24 89 35
Output

73
Explanation

Maximum possible difference is in pair (16,89) which is 73

Example 2
Input

5
9 1 2 8 7
Output

8
Explanation

Maximum possible difference is in pair (9,1) which is 8

Constraints
2 <= n <= 10^6

0 < arr[i] <= 10^9 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let arr = [];

rl.on('line', (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    arr = input.split(' ').map(Number);
    ArrayProblem(arr);
    rl.close();
  }
});

function ArrayProblem(arr) {
	// Write your code here
   let minVal = arr[0];
  let maxVal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) minVal = arr[i];
    if (arr[i] > maxVal) maxVal = arr[i];
  }

  console.log(maxVal - minVal);
}