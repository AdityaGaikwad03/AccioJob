/* Penny and Charity
There is a charity which has N people. Penny wants to donate some of her clothes to the charity in such a way that all people receive equal clothes and each individual receives more than 1. If she has M clothes with her what is the maximum number of clothes one individual can get?

Input Format
User Task:

Since this will be a functional problem, you don't have to take input. You just have to complete the function Charity() that takes integers N, and M as arguments.

Output Format
Return the maximum number of clothes one individual can get if it is impossible to distribute clothes return -1.

Example 1
Input

6 20
Output

3
Explanation

each one can get max of 3 clothes
Example 2
Input

6 5


Output

-1
Constraints
1 <= M, N <= 1000 */



const Charity=(N,M)=>{
 if (M < N * 2) {
        return -1;
  }
  return Math.floor(M / N);
 // code here
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var query;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    //size=parseInt(inputArr[0]);
  }

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const [N,M] = inputArr[0].split(" ").map(x=>parseInt(x));
  console.log(Charity(N,M));
}





