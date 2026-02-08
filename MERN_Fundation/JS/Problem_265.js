/* Largest Even number
For a given odd integer N, print the largest even integer by performing at most 1 swap between the digits of the number.

Note:- It is guaranteed that the number will not contains any leading zeroes.

Input Format
The input contains a single integer containing the value of N.

Output Format
Print the largest even integer if possible else print -1.

Example 1
Input


12345
 
Output

15342

Example 2
Input

135

Output

-1

Explanation: Example 1: Largest even number with atmost one swap is 15342

Constraints:

1 <= N <= 10100000 */

function largestEven(n) {
  let digits = n.toString().split('');
  let last = digits[digits.length - 1];
  let swapIdx = -1;
  for (let i = 0; i < digits.length - 1; i++) {
    let d = parseInt(digits[i]);
    if (d % 2 === 0) {
      swapIdx = i;
      if (d < last) break;
    }
  }
  if (swapIdx === -1) return "-1";
  [digits[swapIdx], digits[digits.length - 1]] =
    [digits[digits.length - 1], digits[swapIdx]];
  return digits.join('');
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
    
    let word1=(inputArr[0]);
  
    console.log(largestEven(word1));
    
}




