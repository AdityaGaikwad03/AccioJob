/* Sum of Product of Digits of a given number
You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (64)+(03) = 24.

Input Format
User Task:

Since this will be a functional problem, you don't have to take input. You just have to complete the function sumOfProductOfDigits() that takes the integers n1 and n2 as a parameter.

Output Format
Return the sum of product of corresponding digits of n1 and n2.

Example 1
Input

2
9 0
35 6798


output

0
67

Explanation

For test 2:-
(8*5) + (9*3) + (7*0) + (6*0) = 67

constraints
1 <= T <= 1000

0 <= n1, n2 <= 10^6 */

function sumOfProductOfDigits(n1, n2) {
  // return using return method
  // do not console.log here
  let sum = 0;
  while (n1 > 0 || n2 > 0) {
    let d1 = n1 % 10;
    let d2 = n2 % 10;
    sum += d1 * d2;
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }
  return sum;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }
  //Exit Condition
  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = parseInt(inputArr[0]);
  for (let i = 0; i < N; i = i + 1) {
    const [n1, n2] = inputArr[i + 1].split(" ").map((x) => parseInt(x));
    console.log(sumOfProductOfDigits(n1, n2));
  }
}
