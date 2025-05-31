/* Nth Even Fibonacci Number
Given a positive integer N, find the Nth Even Fibonacci number.

Fibonacci Series is a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

Note:

Since the answer could be very large, use long datatype in JAVA to store the answer. Similarly, use long long in C++.

Return the answer in modulo 109 + 7

Input Format
First line contains the positive integer N.

Output Format
Return the required number.

Example 1
Input

1
Output

2
Explanation

2 is the first even number in the Fibonacci series. (1 1 "2" 3 ....)

Example 2

Input

2
Output

8
Explanation

8 is the second even number in the fibonacci series. (1 1 2 3 5 "8")

Constraints

1 <= n <= 20 */



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const n = parseInt(line);
  console.log(nthEvenFibonacci(n));
  rl.close();
});

function nthEvenFibonacci(n) {
  const MOD = 1e9 + 7;

  function fibonacci(k) {
    let a = 1, b = 1;
    for (let i = 3; i <= k; i++) {
      const c = (a + b) % MOD;
      a = b;
      b = c;
    }
    return b;
  }

  return fibonacci(3 * n);
}
