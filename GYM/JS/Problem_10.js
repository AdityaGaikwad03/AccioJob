/* Factorial Using Recursion
Given a number n, find its factorial using recursion.

Input Format
Input consists only of integer n.

Output Format
Print the factorial of the number.

Example 1
Input

5
Output

120
Explanation

1 * 2 * 3 * 4 * 5 = 120.

Example 2
Input

10
Output

3628800
Explanation

1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 = 3628800.

Constraints
0 <= n <= 18 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  console.log(factorial_recursive(parseInt(n)));
  readline.close();
});

function factorial_recursive(n) {
  // your code here
   if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial_recursive(n - 1);
}
