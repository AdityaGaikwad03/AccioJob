/* IsArray
Complete the function isArray which takes an input which can be any data type and returns true

if it's an array else false.

Input Format
Could be any datatype string number object or an array

Output Format
true or false

Example 1
Input

1
["1","2","3"]
Output

false
true
Example 2
Input

["1","abc","2"]
["a","b","c"]
Output

false
true */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber === 0) {
    logic();
    readline.close();
  }
}

function isArrayInput(str) {
  try {
    const parsed = JSON.parse(str);
    return Array.isArray(parsed);
  } catch (e) {
    return false;
  }
}

function logic() {
  const input = inputArr[0];
  console.log(isArrayInput(input));
}
