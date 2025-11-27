/* Super String
Saloni is super fond of the character ''a''. She believes a string is good only if it contains more than half of its characters are ''a''s. For example ""aaabb"", ""axaa"" are good strings, and ""baca"", ""awwwa"", """" (empty string) are not.

Saloni has a string S. She can erase some characters from her string S. She would like to know what is the longest string remaining after erasing some characters (possibly zero) to get a good string. It is guaranteed that the string has at least one ""a"" in it, so the answer always exists.

Input Format
First line contains the number of test cases.

The first line of each test case contains a string S consisting of lowercase English letters. It is guaranteed that there is at least one ""a"" in S.

Output Format
Print a single integer, the length of the longest good string that Alice can get after erasing some characters from S.

Example 1
Input


2
aabaa
fadhgabjxha
 
 
Output

5
5

Constraints:

1 <= Number of testcases <= 100

1 ≤ |S| ≤ 50

Note:- String will not contain any spaces */


function getLongestGoodString(S) {
  const n = S.length;
  const a = [...S].filter(ch => ch === 'a').length;

  return Math.min(n, 2 * a - 1);
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }
  
  if (lineNumber ==  size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const T = size;
  
  for (let i = 1; i <= T; i = i = i + 1) {
    
    console.log(getLongestGoodString(inputArr[i]));
  }
}