/* Index of the target element after sorting
You are given an array arr of length n. Your task is to print the index of the given target element after sorting the given array arr. Assume that the array contains only unique elements.

Input Format
The first line of input contains an integer n, size of the array.

The next line contains n space seperated integers denoting the elements of the array.

The next line contains the target element.

Output Format
The only line of output contains the index of the target element after sorting the array.

Example 1
Input

6
6 27 2 3 1 5
5
Output

3
Explanation

We have arr = [6 27 2 3 1 5]

After sorting arr = [1 2 3 5 6 27]

Index of 5 is 3

Example 2
Input

7
9 7 19 20 13 1 6
6
Output

1
Explanation

Sorted array = [1 6 7 9 13 19 20]

Index of 7 is 1

Constraints
1 <= n <= 10^6

0 <= arr[i] <= 10^9 */


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  main(input);
});

function main(input) {
  // your code here
  const n = parseInt(input[0]);
  const arr = input[1].split(' ').map(Number);
  const target = parseInt(input[2]);

  arr.sort((a,b) => a - b);
  let index = arr.indexOf(target);
  console.log(index)
}