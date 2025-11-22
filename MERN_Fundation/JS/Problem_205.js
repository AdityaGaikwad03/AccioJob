/* Factorial - Recursion
Find factorial of a given number N.

Input Format
User Task Since this is a functional problem, you don't have to worry about the input. You just have to complete the function Factorial() which contains the given number N.

Output Format
Return the factorial of the given number.

Example 1
Input

 5

output

 120

Explanation

5*4*3*2*1 = 120
constraints
1 <= N <= 15 */

// n is the input number
function factorial(N) {
  // write code here
  // do not console.log
  // return the answer as a number
   if (N === 0 || N === 1) return 1;   // base case
  return N * factorial(N - 1);

 }

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  // if (lineNumber == 0) {
  //   size = parseInt(inputArr[0]);
  // }
  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const n = parseInt(inputArr[0]);
  console.log(factorial( n));
}
