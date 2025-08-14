/* Single Digit
Given a number N, your task is to convert the number into a single digit by repeatedly replacing the number N with its sum of digits until the number becomes a single digit.

Input Format
The input contains a single integer N.

Output Format
Print the single digit after performing the given operation.

Example 1
Input

987

Output

6
Explanation

 987 - > 9 + 8 + 7 => 24 = 2 + 4 => 6

Input

 91

Output

 1

Explanation

9 + 1 =10 => 1 + 0 = 1
Constraints:
1 <= N <= 100000 */

function singleDigit(N) {
  //complete this function
  //do not console.log here
   while (N >= 10) { // repeat until single digit
        let sum = 0;
        while (N > 0) {
            sum += N % 10; // get last digit
            N = Math.floor(N / 10); // remove last digit
        }
        N = sum;
    }
    return N;
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

  if (lineNumber === 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = parseInt(inputArr[0]);

  console.log(singleDigit(N));
}


