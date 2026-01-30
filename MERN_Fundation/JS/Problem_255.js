/* Least Common Multiple
Complete the leastCommonMultiple function, which takes two numbers a and b and returns their least common multiple.

Least Common Multiple (LCM) is the smallest positive integer that is a multiple of two or more integers. It is the smallest positive integer that is divisible by both of the given numbers without leaving any remainder.

Input Format
First line contains number a. Second line contains number b.

Output Format
First line contains LCM of a and b.

Example 1
Input

3
5
Output

15
Explanation

The least common multiple of 3 and 5 is 15, because 15 is the smallest positive integer that is divisible by both 3 and 5 without leaving any remainder. The prime factors of 3 are 3, and the prime factors of 5 are 5. The LCM is the product of the highest powers of all prime factors involved, which in this case is 3 * 5 = 15.

Example 2
Input

12
18
Output

36
Explanation

The least common multiple of 12 and 18 is 36, because 36 is the smallest positive integer that is divisible by both 12 and 18 without leaving any remainder. The prime factors of 12 are 2, 2, 3, and the prime factors of 18 are 2, 3, 3. The LCM is the product of the highest powers of all prime factors involved, which in this case is 2 * 2 * 3 * 3 = 36.

Constraints
The input numbers are positive integers.
The input numbers are less than or equal to 10^9.
The output is a positive integer that is the least common multiple of the input numbers. */

function leastCommonMultiple(a, b) {
  // write your code here
  function gcd(x, y) {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }

  return (a * b) / gcd(a, b);
}

/* Do not change the code below  */

const rl = require("readline");
const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line1) {
  reader.on("line", function (line2) {
    console.log(leastCommonMultiple(parseInt(line1), parseInt(line2)));
    reader.close();
  });
});
