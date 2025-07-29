/* Recursively Print Numbers In Reverse
Write a recursive program to print all numbers starting from N till 1. Print numbers in descending order from N till you reach 1.

Input Format
Input consists of a single integer N

Output Format
Print the numbers between N and 1 in descending order, each separated by a single space.

Example 1
Input

5
Output

5 4 3 2 1
Example 2
Input

10
Output

10 9 8 7 6 5 4 3 2 1
Constraints
1 <= N <= 1000 */


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printtillN(N) {
  // Write your code here
  if(N === 0){
    return;
  }
  process.stdout.write(N + ' ');
  printtillN(N - 1)
}

rl.on('line', (N) => {
  printtillN(parseInt(N));
  rl.close();
});