/* Rev Strings
You are given a string your task is to reverse the given string.

Input Format
The first line of the input contains a string.

Output Format
The output should contain reverse of the input string.

Example 1
Input

abc
output

cba
Explanation

abc when reversed is cba
constraints
1 <= string length <= 1000

String contains only lowercase english letters */


function reverseString(string) {
// return the reversed string
// do not console.log here
// code here
let reversed = "";
for (let i = string.length - 1; i >= 0; i--) {
  reversed += string[i];
}
return reversed;
}
//return string.split("").reverse().join("");

/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    //size = parseInt(inputArr[0].trim());
  }
  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
 console.log(reverseString(inputArr[0].trim()));
}
