/* 2nd Largest from array
Given an unsorted array of size N with distinct elements. Find the 2nd largest element from the array without sorting the array.

Input Format
The first line contains a single integer N.

The second line consists of N integers of the array.

Output Format
Print the second largest number in the new line.

Example 1
Input

6
3 2 1 5 6 4
Output

5
Explanation

5 is the second largest element of the array.

Example 2
Input

9
10 1 7 2 5 6 8 9 3
Output

9
Explanation

9 is the Second largest element in the array

Constraints:
2 <= N <= 10^5

-10^5 <= N <= 10^5 */ 


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  let n = parseInt(input[0]);
  let arr = input[1].split(' ').map(Number);
  SecondLargest(arr, n);
});

function SecondLargest(arr, n) {
  // Write code here
  let first = arr[0];
  let second = arr[0];

  for (let i = 0; i < n; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  console.log(second)
}