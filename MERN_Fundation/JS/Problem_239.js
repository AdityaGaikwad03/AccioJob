/* Number of ways
Find number of ways an integer N can be represented as a sum of unique natural numbers.

Input Format
First line contain an integer T denoting number of test cases. Each test case contains a single integer N.

Output Format
Print a single integer containing number of ways.

Example 1
Input

 4
 6
 1
 4
 2

output

 4
 1
 2
 1

Explanation

 TestCase1:-
 6 can be represented as (1, 2, 3), (1, 5), (2, 4), (6)
 
constraints
1 <= T <= 100

0 <= N <= 120 */

// ignore number of testcases
// n is the number as provided in input
function numberOfWays(n) {
    // write code here
    // do not console.log the answer
    // return answer as a number
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1; // base case
  
    for (let num = 1; num <= n; num++) {
      for (let sum = n; sum >= num; sum--) {
        dp[sum] += dp[sum - num];
      }
    }
  
    return dp[n];
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
    const testcases = parseInt(inputArr[0]);
    for (let i = 1; i <= testcases; i = i + 1)
      console.log(numberOfWays(parseInt(inputArr[i])));
  }
  