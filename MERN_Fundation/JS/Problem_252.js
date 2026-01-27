/* Max Numbers
Given an array A of size N, you need to find its maximum, 2nd maximum and 3rd maximum element.

Note :

Try solving it in O(N) per test case

Input Format
The first line of the input contains the number of test cases T.

For each test case, the first line of the input contains an integer N denoting the number of elements in the array arr. The next line contains N (space separated) elements of arr.

Output Format
For each test case, output the first, second and third maximum elements in the array.

Example 1
Input

 3
 5
 1 4 2 4 5
 6
 1 3 5 7 9 8
 7
 11 22 33 44 55 66 77
 


Output

 5 4 4
 9 8 7
 77 66 55

Explanation

 Testcase 1: 
 [1 4 2 4 5]
 First max = 5
 Second max = 4
 Third max = 4

Constraints:
1 <= T <= 100 3 <= N <= 10^6 -1e9 <= A[i] <= 10^9

Note:-It is guaranteed that the sum of N over all text cases does not exceed 10^6 */

function maxNumbers(arr, n) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let i = 0; i < n; i++) {
    let num = arr[i];

    if (num > first) {
      third = second;
      second = first;
      first = num;
    } 
    else if (num > second) {
      third = second;
      second = num;
    } 
    else if (num > third) {
      third = num;
    }
  }

  return [first, second, third];
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
let lineNumber = -1;
let size;

readline.on("line", function (line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber === 0) {
    size = parseInt(inputArr[0]);
  }

  if (lineNumber === 2 * size) {
    logic();
    readline.close();
  }
});

function logic() {
  const T = size;

  for (let i = 1; i <= T * 2; i += 2) {
    let N = parseInt(inputArr[i]);
    let Arr = inputArr[i + 1].split(" ").map(Number);

    console.log(maxNumbers(Arr, N).join(" "));
  }
}
