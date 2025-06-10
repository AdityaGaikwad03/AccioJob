/* Combinatorial Calculation
Given n and r, your task is to calculate nCr.

Here nCr is the total number of ways for selecting r elements out of n options are nCr = (n!) / (r! * (n-r)!)  where n! = 1 * 2 * . . . * n.

Input Format
Input consists of one line having two integers n followed by r.

Output Format
We have to calculate nCr using the formula as given in the question.

Example 1
Input

5 2
Output

10
Example 2
Input

3 1
Output

3
Constraints
1 <= n <= r <= 20 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate_nCr(n, r) {
  // Edge case: r > n is not allowed
  if (r > n) return 0;

  let a = fact(n);
  let b = fact(r);
  let c = fact(n - r);
  let ncr = a / (b * c);
  return ncr;
}

function fact(num) {
  let f = 1;
  for (let i = 1; i <= num; i++) {
    f *= i;
  }
  return f;
}

readline.question('', input => {
  const [n, r] = input.split(' ').map(Number);
  const ans = calculate_nCr(n, r);
  console.log(ans);
  readline.close();
});

