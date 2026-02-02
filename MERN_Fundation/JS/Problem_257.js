/* Operations
Given an integer N, subtract the first digit of the number N from it i. e if n is 245 then subtract 2 from it making it 245-2 = 243. Keep on doing this operation until the number becomes 0.

Your task is to calculate the number of operation required to make this number N zero.

Input Format
User Task: Since this will be a functional problem, you don''t have to take input. You just have to complete the function Operations() that takes the integer N as parameter.

Output Format
Return the number of operations

Example 1
Input

 21
Output

12

Explanation

 21, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 0
 
Example 2
Input

 5
Output

 1

Constraints
1 <= N <= 1000000000

 */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    N = parseInt(inputArr[0]);
    logic("s");
    readline.close();
  }
  

}

function logic(input) {
  console.log(countSteps(N));
}
function countSteps(x) {
    let count = 0;

    while (x > 0) {
        let s = x.toString();
        let d = parseInt(s[0]);          // first digit
        let k = s.length;
        let threshold = d * Math.pow(10, k - 1);

        // number of times we can subtract d before first digit changes
        let steps = Math.floor((x - threshold) / d) + 1;

        x -= steps * d;
        count += steps;
    }

    return count;
}


