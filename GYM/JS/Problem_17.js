/* Recursively Print Numbers
Write a recursive program to print all numbers starting from 1 till N. The sequence should be 1 2 3 ... N.

Input Format
Input consists of a single integer N

Output Format
Print the numbers between 1 and N in ascending order, each separated by a single space.

Example 1
Input

5
Output

1 2 3 4 5
Example 2
Input

10
Output

1 2 3 4 5 6 7 8 9 10
Constraints
1 <= N <= 1000 */


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  const N = parseInt(line);
  rl.close();
  printTillN(N, 1);
});

function printTillN(N, i) {
//Write your code here
  if (i > N) return;
  process.stdout.write(i + " ");
  printTillN(N, i + 1);
}