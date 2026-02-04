/* K continuous elements sum check
You want to implement a function that takes an array of integers and an integer k, and returns a boolean indicating whether there exists a contiguous subarray of size k such that the sum of the elements in the subarray is greater than or equal to k.

Input Format
An array of integers arr such that 1 <= arr.length <= 10^5. An integer k such that 1 <= k <= arr.length.

Output Format
A boolean indicating whether there exists a contiguous subarray of size k in arr such that the sum of the elements in the subarray is greater than or equal to k.

Example 1
Input

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
3
output

true
Explanation

1 + 2 + 3 = 6 which is greater than 3 so true
constraints
1 <= arr.length <= 10^5

1 <= k <= arr.length. */

function subarraySum(arr, k) {
  let n = arr.length;

  // sum of first k elements
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  if (windowSum >= k) return true;

  // slide the window
  for (let i = k; i < n; i++) {
    windowSum += arr[i];
    windowSum -= arr[i - k];

    if (windowSum >= k) return true;
  }

  return false;
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

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = JSON.parse(inputArr[0].trim());
  let k = parseInt(inputArr[1].trim());
  // console.log(Arr,k);
  console.log(subarraySum(Arr, k));
}
