/* Divisibility Test
You are given a big number in form of a string A of characters from 0 to 9. Return 1 if it''s divisible by 30 and 0 otherwise.

Input Format
The first argument is the string A.

Output Format
Return 1 if it is divisible by 30 and 0 otherwise. Note It''s a functional Problem you just have to return 0 or 1.

Example 1
Input

3033330

output

1
Explanation

The given number is divisible by 30
constraints
0 <= digit on each ring <= 9

1 <= |String| <= 100000 */

function isDivisibleBy30(A) {
 // return 1 or 0
// do not console.log here
 if (A[A.length - 1] !== '0') return 0;
  let sum = 0;
  for (let ch of A) {
    sum += ch.charCodeAt(0) - 48;
  }

  return sum % 3 === 0 ? 1 : 0;
}

/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  //let n = parseInt(inputArr[0].trim());
  //let str1 = inputArr[1].trim();
  let str = inputArr[0].trim();
  console.log(isDivisibleBy30(str));
}
