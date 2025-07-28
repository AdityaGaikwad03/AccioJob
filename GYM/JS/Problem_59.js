/* String Sorting
Given an array of strings, return an array of the strings sorted alphabetically.

Input Format
First and only line of input contains the array containing strings.

Output Format
Print the sorted array

Example 1
Input

["dog", "cat", "zebra", "ant"]
output

["ant", "cat", "dog", "zebra"]
Example 2
Input

["apple", "banana", "cherry"]
output

["apple", "banana", "cherry"]
Explanation

Sorted array were the output
constraints
2 < = Size of array < = 1000

1 < = Size of each string < = 10 */


function sortString(strArray) {
  // return the sorted array
 return strArray.sort()

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
  let str=JSON.parse(inputArr[0].trim());
  console.log(sortString(str).join(" ").trim())
}
