/* Natural Sum
Write a program to calculate the sum of first N natural numbers.

Note: Natural numbers are the numbers that start from 1 and end at infinity.

Input Format
First line contains an integer N

You need to complete printSum function which contains N natural number and return sum of final summation upto N.

Output Format
Print the sum in first line

Example 1
Input

10
Output

55
Explanation

Here, sum is 55 i.e. 1+2+3+4+....+9+10 = 55.

Example 2
Input

20
Output

210
Explanation

Here, sum is 210 i.e. 1+2+3+4+....+19+20 = 210.

Constraints
1 <= N <= 10^3 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (N) => {
  console.log(printSum(parseInt(N)));
  rl.close();
});

function printSum(N) {
  //Write your code here
  let sum = 0;
  for(let i = 1; i <= N; i++){
    sum += i; 
  }
  return sum;
}