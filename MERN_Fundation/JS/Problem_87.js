/* Subarray Problem 1
Given an array arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} of size 10. Find whether there exists a sub-array of size n and sum s, where n and s both are user input values.

Print YES if there exists a subarray of size n and sum s in the array arr else print NO

Input Format
The first and only line of input contains n and s

Output Format
Print either “YES” or “NO”

Example 1
Input

3 6
Output

YES
Explanation

The sum of elements at indices 0, 1,2 add upto 6

Example 2
Input

4 10
Output

YES
Explanation

The sum of elements at indices 0, 1, 2, 3 add upto 10

Constraints
1<=n<=10 1<=s<=55 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [1,2,3,4,5,6,7,8,9,10];

rl.on('line', (input) => {
  let [n, s] = input.split(' ').map(Number);
  solve(arr, n, s);
  rl.close();
});

function solve(arr, n, s) {
  // Write your code here
  let sum = 0;

  // Calculate sum of first 'n' elements
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  if (sum === s) {
    console.log("YES");
    return;
  }

  // Slide the window
  for (let i = n; i < arr.length; i++) {
    sum = sum - arr[i - n] + arr[i];
    if (sum === s) {
      console.log("YES");
      return;
    }
  }

  console.log("NO");
}