/* JS Math - 4
Implement the function sumMaxMin, which should take 5 numbers as input and return its result as sum of max and min element of those 5 numbers (Use JS In built functions)

Input Format
Function will take 5 arguments which will be numbers.

Output Format
Function will return a number which is the sum of min and max element of those 5 numbers.

Example 1
Input

100 100 -200 300 0
Output

 100
Explanation

300+(-200) = 300-200
Example 2
Input

1 3 2 4 5
Output

 6
Explanation

 1+5 = 6 
Constraints:
-10^6 <= n1, n2, n3, n4 ,n5 <= 10^6 */

function sumMaxMin(n1, n2, n3, n4, n5) {
  // return the value
  // Do not console.log here
  const maxVal = Math.max(n1, n2, n3, n4, n5);
  const minVal = Math.min(n1, n2, n3, n4, n5);

  return maxVal + minVal;
}

/*Do not change the code below */
const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  const [a, b, c, d, e] = line.split(" ");

  console.log(sumMaxMin(a, b, c, d, e));
});
