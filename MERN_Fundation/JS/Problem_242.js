/* Derivative of a Function
Complete the derivative function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

^ in the context of this challenge means "to the power of", also known as the "exponent" operator.

Input Format
First line contains b. Second line contains m.

Output Format
First line contains output of derivative function.

Example 1
Input

1
4
Output

1
Explanation

The function takes b = 1 and m = 4 as inputs.
The expression m ** (b - 1) evaluates to 4 ** (1 - 1), which is equal to 1.
The expression b * m ** (b - 1) evaluates to 1 * 1, which is equal to 1.
Therefore, the function returns 1 as the output.
Example 2
Explanation

Input

3
-2
Output

-12
The function takes b = 3 and m = -2 as inputs.
The expression m ** (b - 1) evaluates to (-2) ** (3 - 1), which is equal to 4.
The expression b * m ** (b - 1) evaluates to 3 * 4, which is equal to 12.
Therefore, the function returns 12 as the output. */

function derivative(b, m) {
  // write your code here
return (b * Math.pow(m, b - 1)).toFixed(1);
 }
/* Do not change the code below  */

const rl = require("readline");
const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line1) {
  reader.on("line", function (line2) {
    console.log(derivative(parseInt(line1), parseInt(line2)));
    reader.close();
  });
});
