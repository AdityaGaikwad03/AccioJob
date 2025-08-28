/* Array Sort
You want to implement a function that takes an array of integers and returns a new array with all the elements in the original array sorted in non-descending order.

Input Format
First and only line of input contains the array containing integers.

Output Format
return the sorted array

Example 1
Input

[1, 2, 4, 3]
output

[1, 2, 3, 4]
Example 2
Input

[-1, -2 , 3, 4 ]
output

[-2, -1, 3, 4]
Explanation

sorted array for [1, 2, 4, 3] will be [1, 2, 3, 4]
constraints
1 < = Size of array < = 100000

-100000 < = arr[i] < = 100000

 */


function sortArray(arr) {
  // return the array
  return arr.sort((a, b) => a - b);
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
  let str = JSON.parse(inputArr[0].trim());
  console.log(sortArray(str).join(" ").trim());
}
