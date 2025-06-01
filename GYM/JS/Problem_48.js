/* JS Reverse
Given a number, you task is to reverse its digits. If the reversed number contains 0s in the beginning, you must remove them as well.

Input Format
Functional problem, Number is the input

Output Format
Output is a single line containing reversed number n.

Example 1
Input

123445
Output

 544321
Explanation

reverse of 123445 is 544321
Constraints:
1<=size of n<=100000 */


function JsReverse(num) {
  //return the string
  //do not console.log here
  let rev = 0;
  while(num != 0){
    rev = rev * 10 + num % 10
    num = Math.floor(num / 10)
  }
  return rev.toString();
}

/*Do not change the code below */
const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  const n = parseInt(line);
  console.log(JsReverse(n));
});
