/* Print Range Recursively
Write a recursive program to print all the numbers between the range X to Y (X<=Y). Take input of X and Y from the user and print all the integers between the range X to Y using a recursive function.

Input Format
First line contains an integer X (X>0)

Second line contains an integer Y (Y>0)

Output Format
Print the numbers between X and Y, each separated by a single space.

Example 1
Input

5
8
Output

5 6 7 8
Explanation

The numbers between 5 to 8 included are 5,6,7 and 8.

Example 2
Input

15
15
Output

15
Explanation

The numbers between 15 to 15 included is 15.

Constraints
1 <= X <= Y <= 10^6 */


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const inputs = [];
rl.on('line', (line) => {
  inputs.push(parseInt(line));
  if (inputs.length === 2) {
    rl.close();
    printXY(inputs[0], inputs[1]);
  }
});

function printXY(x, y) {
 //Write your code here
process.stdout.write(x + ' ');
  if (x === y) return;
  if (x < y) {
    printXY(x + 1, y);
  } else {
    printXY(x - 1, y);
  }
}