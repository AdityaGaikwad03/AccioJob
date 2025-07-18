/* 0-1-2 Sorting
You are given an array arr of length n containing only 0s, 1s, and 2s. Your task is to sort the array in ascending order.

Input Format
The first line of input contains an integer n, the size of the array.

The following line contains n space-separated integers(0, 1, or 2) denoting the elements of the array.

Output Format
Print n space-separated integers denoting the segregated array.

Example 1
Input

9
0 2 2 0 2 0 1 0 1
Output

0 0 0 0 1 1 2 2 2
Explanation

We have arr = [0 2 2 0 2 0 1 0 1]

Moving all the 0s in the beginning and all the 2s at the end.

The final segregated array is [0 0 0 0 1 1 2 2 2]

Example 2
Input

11
1 1 2 0 1 1 2 2 0 0 1
Output

0 0 0 1 1 1 1 1 2 2 2
Explanation

The sorted array is [0 0 0 1 1 1 1 1 2 2 2]

Constraints
1 <= n <= 10^6

0 <= arr[i] <= 2 */


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let n = Number(input[0]);
  let arr = input[1].split(' ').map(Number);
  zero_one_two_sorting(arr);
  console.log(arr.join(' '));
});

function zero_one_two_sorting(arr) {
  // Write your code here
  return arr.sort((a, b) => a - b);
}