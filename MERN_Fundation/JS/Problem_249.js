/* Zero sum
Given an integer N, your task is to print an array of N elements such that:-

Their sum is 0

All elements are distinct

Difference between maximum and minimum element of the array should be smallest

Input Format
Input contains a single integer N.

Output Format
Print the lexicographically smallest array possible.

i.e Suppose your ans is {1 -1 2 -2 } then lexicographically smallest array will be {-2 -1 1 2}

Example 1
Input

 3
Output

-1 0 1

Example 2
Input

 2
Output

-1 1
Constraints
1 < = N < = 100000 */


function smallestDifferenceArray(N) {
  let result = [];

  if (N % 2 === 1) {
    // odd → include 0
    let k = Math.floor(N / 2);
    for (let i = -k; i <= k; i++) {
      result.push(i);
    }
  } else {
    // even → symmetric pairs excluding 0
    let k = N / 2;
    for (let i = -k; i <= -1; i++) {
      result.push(i);
    }
    for (let i = 1; i <= k; i++) {
      result.push(i);
    }
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
  if (lineNumber == 0) {
    N = parseInt(inputArr[0]);
    logic("s");
    readline.close();
  }
  

}

function logic(input) {
  console.log(smallestDifferenceArray(N).join(" "));
}
