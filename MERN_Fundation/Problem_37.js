/* Which angled triangle
Given the 3 sides of a triangle, find out whether it is acute-angled, right-angled, or obtuse-angled.

You need to output 1 for acute, 2 for right-angled, and 3 for an obtuse-angled triangle. You can assume that the input values always form a triangle and are valid integers.

Note

A triangle is acute-angled, if twice the square of the largest side is less than the sum of squares of all the sides.

A triangle is obtuse-angled, if twice the square of its largest side is greater than the sum of squares of all the sides.

A triangle is right-angled, if twice the square of its largest side is exactly equal to the sum of squares of all the sides.

Example 1
Input

3 4 5
Output

2
Explanation

Since 2x5x5 is equal to 5x5 + 3x3 + 4x4, So this is a right-angled triangle and hence, the answer is 2.

Example 2
Input

3 3 3
Output

1
Explanation

Since 2x3x3 is less than 3x3 + 3x3 + 3x3, So this is an acute-angled triangle and hence, the answer is 1.

Constraints
1 < a,b,c <= 10^5 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (sides) => {
  let [a, b, c] = sides.split(" ");
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  // Write your code here
  let sumSquares = a * a + b * b + c * c;
  let doubleLargestSq = 2 * (c * c);

  if (doubleLargestSq < sumSquares) {
    console.log(1); // Acute-angled
  } else if (doubleLargestSq === sumSquares) {
    console.log(2); // Right-angled
  } else {
    console.log(3); // Obtuse-angled
  }
  rl.close();
});
