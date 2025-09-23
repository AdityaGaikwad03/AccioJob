/* Case-Specific Sorting
Given a string S consisting of uppercase and lowercase characters. The task is to sort uppercase and lowercase characters separately such that if the ith place in the original string had an uppercase character then it should not have a lowercase character after being sorted and vice versa.

Input Format
The first line contains a single integer N denoting the length of the string. The second line contains a string S of length N, consisting of uppercase and lowercase characters.

Output Format
Print a single integer containing the sorted string.

Example 1
Input

Valak
output

Vaakl
Explanation

first upper case V then aakl as sorted.
constraints
1 < = N < = 100000 */

function sortCase(S) {
// return the string
// do not console.log here
// Your code here
  let upper = [];
  let lower = [];

  // Separate uppercase and lowercase
  for (let ch of S) {
    if (ch >= 'A' && ch <= 'Z') {
      upper.push(ch);
    } else {
      lower.push(ch);
    }
  }

  // Sort separately
  upper.sort();
  lower.sort();

  // Rebuild the string
  let uIndex = 0, lIndex = 0;
  let result = "";

  for (let ch of S) {
    if (ch >= 'A' && ch <= 'Z') {
      result += upper[uIndex++];
    } else {
      result += lower[lIndex++];
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
    //size = parseInt(inputArr[0].trim());
  }
  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  console.log(sortCase(inputArr[0].trim()));
}
