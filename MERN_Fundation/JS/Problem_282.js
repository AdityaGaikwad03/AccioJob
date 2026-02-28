/* Stinger
Given two string A and B you have to make the two string identical using minimum number of moves. In a single move you can do one of the following operation

1- Select string A if it is non empty and remove its first character

2- Select string B if it is non empty and remove its first character

Find the minimum number of moves required.

Input Format
First line contains string A

Second line contains string B

Output Format
Output a single integer which is the minimum number of moves required.

Example 1
Input

hello
elo
 
 
Output

4
Explanation

if we remove h,e,l from A and e from B we would have same strings.

Constraints:

1 <= |A| <= 100000

1 <= |B| <= 100000

Note:- String will not contain any spaces */

function minimumMoves(A, B) {
   let i = A.length - 1;
  let j = B.length - 1;
  let common = 0;
  while (i >= 0 && j >= 0 && A[i] === B[j]) {
    common++;
    i--;
    j--;
  }
  return (A.length - common) + (B.length - common);
}

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
 
  if (lineNumber ==  1) {
    logic("s");
    readline.close();
  }
}



function logic(input) {
    
    let word1=inputArr[0];
    let word2=inputArr[1];
  
    console.log(minimumMoves(word1, word2));
    
}

