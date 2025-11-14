/* Dalindrome
Everyone has heard of palindromes, right! A palindrome is a string that remains the same if reversed. Let''s define a new term, Dalindrome. A Dalindrome is a string whose atleast one of the substrings is a palindrome. Given a string, find whether it''s a Dalindrome.

Input Format
The only line of input contains a string to be checked.

Output Format
Output "Yes" if string is a Dalindrome, else output "No".

Example 1
Input

cbabcc
output

Yes

Explanation

"bab" is one of the substrings of the string that is a palindrome. 
There may be other substrings that are palindrome as well like "cc", or "cbabc". 
The question requires atleast one.
constraints
1 <= length of string <= 100 */


function isDalindrome(str) {
// return YES or No
// do not console.log here
// write your code below
 const n = str.length;
  if (n === 1) return "YES";
  for (let i = 0; i < n - 1; i++) {
    if (str[i] === str[i + 1]) return "YES";
  }
  for (let i = 0; i < n - 2; i++) {
    if (str[i] === str[i + 2]) return "YES";
  }

  return "NO";
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
    //size = parseInt(inputArr[0]);
  }
  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let s = inputArr[0].trim();

  console.log(isDalindrome(s));
}
