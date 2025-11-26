/* Binary String
Given a binary string S. The task is to count the number of substrings that start and end with 1. For example, if the input string is “00100101”, then there are three substrings “1001”, “100101” and “101”.

Input Format
User Task: Since this will be a functional problem, you don''t have to take input. You just have to complete the function binarySubstring() which takes size of string and string S as a parameter.

Output Format
For each testcase, in a new line, print the number of substring starting and ending with 1 in a separate line.

Example 1
Input

2
4
1111
5
01101
output

6
3
Explanation

 Testcase 1: There are 6 substrings from the given string. They are 11, 11, 11, 111, 111, 1111.
 Testcase 2: There 3 substrings from the given string. They are 11, 101, 1101
constraints
1 ≤ T ≤ 100 1 ≤ |S| ≤ 10000 */

function binarySubstring(n, S) {
 // return the number of substrings
// do not console.log here
  let count1 = 0;
  for (let i = 0; i < n; i++) {
    if (S[i] === '1') count1++;
  }
  let ans = (count1 * (count1 - 1)) / 2;
  if (ans === 0) return 0;
  return ans;
}

/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0].trim());
  }
  //Exit Condition
  if (lineNumber == size * 2) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let testcases = parseInt(inputArr[0].trim());
  for (let i = 1; i <= testcases * 2; i = i += 2) {
    let s = inputArr[i + 1].trim();
    let n = parseInt(inputArr[i].trim());
    console.log(binarySubstring(n, s));
  }
}
