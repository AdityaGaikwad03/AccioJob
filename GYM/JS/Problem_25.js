/* Even index
Given an array of integers, return an array of the elements in even indices (0th, 2nd, 4th, etc.).

Input Format
The first line of input contains n denoting the size of array.

Next line contains n different integers.

Output Format
Print the elements of array at even indices.

Example 1
Input

5
1 2 3 4 5
Output

1 3 5

Explanation

Testcase1: elements present at index 0,2,4 are printed

Constraints:

1 <= N <= 100000 */


function evenIndices(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 1) {
    logic();
    readline.close();
  }
}

function logic() {
  let Arr = inputArr[1].split(" ").map((x) => parseInt(x));
  console.log(evenIndices(Arr).join(" "));
}
