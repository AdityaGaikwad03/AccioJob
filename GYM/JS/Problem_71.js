/* Simple Clock Angle
You will be given a number N that represents where the minute hand currently is on a clock. Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock.

Input Format
Number between 1 to 60 inclusive

Output Format
Print the angle as a number

Example 1
Input

1

Output

6

Explanation

when minute hand is on 1 minute mark it would form 6 degrees angle with 12 O clock mark

Constraints:
1 <= N <= 60 */



function ClockAngle(n) {
  //complete this function
  //do not console.log here
  return n * 6;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = parseInt(inputArr[0]);

  // let N = parseInt(inputArr[i]);
  console.log(ClockAngle(N));
}
