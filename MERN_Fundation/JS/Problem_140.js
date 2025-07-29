/* Recursive Fibonacci
Given an integer N, find the Nth number in the fibonacci series. Consider 0 and 1 to be the seed values.

In a fibonacci series, each number ( Fibonacci number ) is the sum of the two preceding numbers. The series with 0 and 1 as seed values will go like -

0, 1, 1, 2, 3, 5.....

Input Format
First line contains the integer N

Output Format
Print the Nth fibonacci number

Example 1
Input

1
Output

0
Example 2
Input

2
Output

1
Example 3
Input

5
Output

3
Constraints
1 <= N <= 30 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function fib(n) {
  // write code here
  if (n === 1) return 0;
  if (n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

readline.question('', n => {
  console.log(fib(Number(n)));
  readline.close();
});