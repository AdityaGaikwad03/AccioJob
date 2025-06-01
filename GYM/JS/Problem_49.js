/* Square Root Of an Integer
Given an integer N. The task is to find the square root of N. If N is not a perfect square, then return floor(√N).

Try to solve the problem using Binary Search.

Input Format
The first line of input contains number of testcases T. For each testcase, the only line contains the number N.

Output Format
For each testcase, print square root of given integer.

Example 1
Input

2
5
4
Output

2
2
Explanation

As 5 is not a perfect square so we consider floor of square root of 5.

In the second example as 4 is a perfect square our output is 2.
Example 2
Input

2
16
69
Output

4
8
Constraints
1 ≤ T ≤ 10000

0 ≤ x ≤ 100000000 */






function SqrtBinary(x) {
    if (x === 0 || x === 1) return x;

  let low = 1;
  let high = x;
  let ans = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      ans = mid;  // potential answer
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
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
    let N = parseInt(inputArr[i]);
   
    console.log(SqrtBinary(N));
  }
}

