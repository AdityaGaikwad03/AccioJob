/* Decrease Print Increase Print
You are given a number N. You have to print the backward counting from N to 1. On reaching 1, you have to print counting from 1 to N.

Note

Complete the body of printDI function to achieve it. Don't change the function Definition.

Input Format
The first line contains a single integer N.

Output Format
Print the counting with each number in a new line.

Example 1
Input

4
Output

4
3
2
1
1
2
3
4
Explanation

We count from 4 to 1 and back to 4 again.

Example 2
Input

2
Output

2
1
1
2
Explanation

We count from 2 to 1 and back to 2 again.

Constraints
1 <= N <= 15000 */


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  printDI(parseInt(input));
  rl.close();
});

function printDI(n) {
  // your code here
  if(n === 0){
    return;
  }
  console.log(n);
  printDI(n - 1);
  console.log(n);
}