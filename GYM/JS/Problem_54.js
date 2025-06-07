/* Pattern making
Given an integer n, your task is to print the pattern as shown in example:-

For n=5, the pattern is:

1

1 2 1

1 2 3 2 1

1 2 3 4 3 2 1

1 2 3 4 5 4 3 2 1

1 2 3 4 3 2 1

1 2 3 2 1

1 2 1

1

Input Format
User Task: Since this will be a functional problem, you don't have to take input. You just have to complete the function pattern_making() that takes the integer n as parameter.

Output Format
Print the pattern as shown.

Example 1
Input

 5
Output

 1
 1 2 1
 1 2 3 2 1
 1 2 3 4 3 2 1
 1 2 3 4 5 4 3 2 1
 1 2 3 4 3 2 1
 1 2 3 2 1
 1 2 1
 1

Example 2
Input

 2
Output

 1
 1 2 1
 1
Constraints
1 <= n <= 100 */



function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    for (let j = i - 1; j >= 1; j--) {
      line += j + " ";
    }
    console.log(line.trim());
  }
  for (let i = n - 1; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    for (let j = i - 1; j >= 1; j--) {
      line += j + " ";
    }
    console.log(line.trim());
  }
}
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
  pattern(N);
}