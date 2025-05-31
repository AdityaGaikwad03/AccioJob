/* Count Digits
Write a program to find the total number of digits in a single input number n.

Your task is to complete the function numDigits which receives n as the parameter and returns the number of digits in n.

Input Format
First line contains an integer number n.

Output Format
Print the count of digits in first line.

Example 1
Input

13472
Output

5
Explanation

The number has 5 digits

Example 2
Input

123456
Output

6
Explanation

The number has 6 digits

Constraints
1 <= n <= 10^9 */



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function numDigits(num){
  //Write your code here
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

rl.on('line', (n) => {
  console.log(numDigits(parseInt(n)));
  rl.close();
});