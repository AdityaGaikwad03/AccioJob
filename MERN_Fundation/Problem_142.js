/* Optimized power calculation
You are given two integers, N and X. You have to find X raised to the power N in O(log(N)) time complexity using recursion.

Note Complete the given function and use recursion to solve this problem.

It is guaranteed that the test cases are made such that the answer does not overflow a 64-bit integer datatype.

Input Format
The first line contains two integers, X and N.

Output Format
Print the answer.

Example 1
Input

2 3
Output

8
Explanation

2 raised to the power 3 is 8.

Example 2
Input

10 5
Output

100000
Explanation

10 raised to the power 5 is 100000.

Constraints
1 <= X <= 10^8

1 <= N <= 64 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const [X, N] = input.split(' ').map(Number);
  console.log(power(X, N));
  rl.close();
});

function power(x, y) {
 // Write your code here
  if (y === 0) return 1; 

  const half = power(x, Math.floor(y / 2)); 

  if (y % 2 === 0) {
    return half * half;
  } else {
    return x * half * half;
  }
}