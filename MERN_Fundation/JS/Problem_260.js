/* Absolute Difference Sum
Given an array A of size N. Value of an element Ai is defined as the sum of absolute difference of all elements of the array with Ai. More formally, the value of an element at index i is sum of |Ai - Aj| over all j (1 <= j <= N). Find the maximum such value over all i (1 <= i <= N) in the array.

Note: Given array is 1-based index

Input Format
First line of the input contains a single integer N. The second line of the input contains N space seperated integers.

Output Format
Print the maximum such value over all i (1 <= i <= N) in the array.

Example 1
Input


 6
 1 1 5 5 8 9


Output

 25

Explanation

For, i = 6, 
 |A1 - A6| = 8
 |A2 - A6| = 8
 |A3 - A6| = 4
 |A4 - A6| = 4
 |A5 - A6| = 1
 Value = 8 + 8 + 4 + 4 + 1 = 25
 All other i, give values less than 25.

Constraints:
1 <= N <= 105

1 <= Ai <= 109 */

function AbsDiffSum(N, myArr) {
  myArr.sort((a, b) => a - b);
  let prefix = new Array(N);
  prefix[0] = myArr[0];
  for (let i = 1; i < N; i++) {
    prefix[i] = prefix[i - 1] + myArr[i];
  }
  let totalSum = prefix[N - 1];
  let minVal =
    (totalSum - myArr[0]) - myArr[0] * (N - 1);
  let maxVal =
    myArr[N - 1] * (N - 1) - (totalSum - myArr[N - 1]);

  return Math.max(minVal, maxVal);
}


/*Do not change the code below*/
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
  } else if (lineNumber < size) {
  }

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = +inputArr[0];
  inputArr.shift();
  const Arr = inputArr[0].split(" ").map((x) => +x);

  console.log(AbsDiffSum(N, Arr));
}


