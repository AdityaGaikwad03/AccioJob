/* JS Dynamic Function Input
Modify the takeMultipleNumbersAndAdd  such that it can take any number of arguments and return its sum.

This is JS only question.

Input Format
Function should be able to take any number of args

Output Format
Sum of the numbers

Example 1
Input

1 2 2


Output

 5

Explanation

takeMultipleNumbersAndAdd(1, 2, 2) should return 5 because 1 + 2 + 2

Constraints:
input can take arguments of any number of integers (including -ve also). */

function takeMultipleNumbersAndAdd(arr) {

 //do not console.log
// return the sum 
    return arr.reduce((sum, num) => sum + num, 0);

}
/*Do not change the code below*/

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;

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
  inputArr = inputArr[0].split(" ").map((x) => +x);
  console.log(takeMultipleNumbersAndAdd(inputArr));
}


