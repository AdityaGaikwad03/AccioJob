/* JS Math - 2
Implement the function floor, which should take a number which can be a float(decimal) and return its result as an integer with floor function applied to it (Use JS In built functions)

Input Format
Function will take a float as input

Output Format
Function will return a number

Example 1
Input

1.99
Output

 1
Explanation


floor of 1.99 is 1.

Example 2
Input

-0.8
Output

 -1

Explanation

 floor of -0.8 is -1

Constraints:
-10^6 <= n <= 10^6 (n is float)

 */

function floor(n) {
  //return the floor value
  // do not console.log here
  return Math.floor(n)
}

/*Do not console.log here */
const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  const n = parseFloat(line);
  console.log(floor(n));
});

