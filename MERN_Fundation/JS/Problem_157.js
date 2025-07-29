/* Remove Duplicates from String
Given a string, the task is to remove duplicates from it. Expected time complexity O(n) where n is length of the input string and extra space O(1) under the assumption that there are total of 256 possible characters in a string.

Note: that original order of characters must be kept same.

Input Format
The first line of the input is the number of test cases T. And the first line of a test case contains a string.

Second- line contains N space-separated strings (words)

Output Format
Modified string without duplicates and the same order of characters.

Example 1
Input

2
hello
helloworld

output

 helo
 helowrd
Explanation

only l was repeated in both strings.
constraints
1 <= T <= 15

1 <= |string|<= 15000 */


function removeDuplicates(str) {
// return the string
// do not console.log here
// Your code here
const seen = new Set();
  let result = '';

  for (let ch of str) {
    if (!seen.has(ch)) {
      seen.add(ch);
      result += ch;
    }
  }

  return result;
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
  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  for (let i = 1; i <= parseInt(inputArr[0]); i++) {
    console.log(removeDuplicates(inputArr[i].trim()));
  }
}
