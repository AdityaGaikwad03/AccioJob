/* Excel sheet
In sheet each row is assigne as a string as shown:-

A - > 1

B - > 2

C - > 3

Z - > 26

AA - > 27

AB - > 28

Given the string S, your task is to find its row number.

Input Format
Input contains a single line containing the string S.

Output Format
Print a single integer containing the row number since the ans can be quite large print you ans modulo 10^9 + 7.

Example 1
Input


C
 
Output

3

Example 2
Input

AB
 
Output

28

Constraints:

1 < = |S| < = 100000

Note:- String will only contain uppercase english letters */

function findRowNumber(S) {
  // write your code here
    const MOD = 1000000007;
    let result = 0;

    for (let i = 0; i < S.length; i++) {
        let value = S.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result = (result * 26 + value) % MOD;
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
 
  if (lineNumber ==  0) {
    logic("s");
    readline.close();
  }
}



function logic(input) {
    let word1=inputArr[0];
  
    console.log(findRowNumber(word1));
    
}

