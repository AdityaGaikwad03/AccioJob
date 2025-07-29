/* Greatest Common Divisor of Two Numbers
Given two number a and b, find their HCF.

What Is HCF?

HCF or Highest Common Factor is the greatest common divisor between two numbers.

Input Format
The first line of input contains the integers a and b.

Output Format
The output should be the hcf of a and b.

Example 1
Input

75 90
Output:

15
Explanation

75 = 3 * 5 * 5 and 90 = 2 * 3 * 3 * 5. So the common factors are 3*5 = 15.

Example 2
Input

25 50
Output

25
Explanation

25 = 5 * 5 and 50 = 2 * 5 * 5. So the common factors are 5*5 = 25.

Constraints
1 <= n <= 10^9, n refers to both a and b */



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const [a, b] = input.split(' ').map(Number);
  // your code here
  function gcd(x, y) {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }

  console.log(gcd(a, b));

});