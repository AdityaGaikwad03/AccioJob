/* Hashing for Pair
You are given an array A (distinct integers) of size N, and you are also given a sum. You need to find if two numbers in A exists that have sum equal to the given sum.

Input Format
The first line of input contains T denoting the number of testcases. T testcases follow. Each testcase contains two lines of input. The first line contains N denoting the size of the array A and target sum. The second line contains N elements of the array.

Output Format
For each testcase, in a new line, print "1"(without quotes) if any pair found, othwerwise print "0"(without quotes) if not found.

Example 1
Input

2
10 14
1 2 3 4 5 6 7 8 9 10
2 10
2 5
output

1
0
Explanation

Testcase 1: arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and sum = 14. There is a pair {4, 10} with sum 14.
Testcase 2: arr[] = {2, 5} and sum = 10. There is no pair with sum 10.
constraints
1 <= T <= 100

1 <= N <= 10^4

1 <= sum <= 10^5

1 <= A[i] <= 10^4 */

function findSum(arr, n, sum) {
 // return 0 or 1
// do not cosole.log here
  let set = new Set();
  for (let i = 0; i < n; i++) {
    let complement = sum - arr[i];
    if (set.has(complement)) {
      return 1;
    }
    set.add(arr[i]);
  }
  return 0;
}

/*Do not change the code below */

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
  if (lineNumber == 2 * size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let T = parseInt(inputArr[0].trim());
  //let str1 = inputArr[1].trim();
  for (let i = 1; i <= 2 * T; i += 2) {
    let [n, k] = inputArr[i].split(" ").map((x) => parseInt(x));
    let Arr = inputArr[i + 1]
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
   // console.log(n, Arr,k);
    console.log(findSum(Arr,n,k));
  }
}
