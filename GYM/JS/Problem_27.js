/* Sum of Digits
Complete the function SumofDigits() that takes an integer N as a parameter and returns the sum of its digits.


User Task:
Since this will be a functional problem, you don't have to take input. You just have to complete the function SumofDigits() that takes the integer N as a parameter.

Input Format
The first line of the input contains the number of test cases T.

For each test case, the first line of the input contains an integer N denoting the number of elements in the array arr. The next line contains N (space separated) elements of arr.

Output Format
Return sum of digits.

Example 1
Input

 2
 25
 28

Output

 7
 10

Example 2
Input

 1
 558

Output

18
Explanation

for first test example sum of digits for 25=2+5=7 and for 28=2+8=10

for second example sum will be 5+5+8=18

Constraints:
1 ≤ T ≤ 100

0 ≤ N ≤ 1000000000

<html> */



function SumofDigits(n) {
  // Base case: if n becomes 0, return 0
  if (n === 0) return 0;

  // Recursive case: return last digit + sum of digits of the remaining number
  return (n % 10) + SumofDigits(Math.floor(n / 10));
}

/* Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }

  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const T = size;
  for (let i = 1; i <= T; i++) {
    let N = parseInt(inputArr[i]);
    console.log(SumofDigits(N));
  }
}
