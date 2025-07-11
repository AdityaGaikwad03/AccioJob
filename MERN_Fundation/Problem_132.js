/* Recursive Exponentiation by Squaring
You are given two integers, N and X. You have to find X raised to the power N using recursion. Implement the function using the Exponentiation by Squaring method to solve this problem in O(log N) time complexity.

Note Complete the given function and use recursion to solve this problem.

It is guaranteed that the test cases are made such that the answer does not overflow a 64-bit integer datatype.

Input Format
The first line contains two integers, X, and N.

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


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function xPowerN(x, n) {
  // Write your code here
  if(n === 0){
    return 1;
  }
  const half = xPowerN(x,Math.floor(n/2));
  if(n % 2 === 0){
    return half * half;
  }else{
    return x * half * half;
  }
}

readline.question('', (line) => {
  const [x, n] = line.split(' ').map(Number);
  console.log(xPowerN(x, n));
  readline.close();
});