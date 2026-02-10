/* Largest subarray with zero sum
Given an array A[], of length N containing values in the range of negative to positive integers. You need to find the length of the largest subarray whose sum of elements is 0.

Input Format
The first line contains N denoting the size of the array A. Then in the next line contains N space-separated values of the array A.

Output Format
Print the length of the largest subarray which has sum 0, If no subarray exist print -1.

Example 1
Input


6
-5 8 -14 0 0 12

Output

2

Explanation


 Testcase 1: Largest Subarray with sum 0 is: [0,0]

Constraints:

1 <= N <= 1e5

-1e6 <= A[i] <= 1e6 */


function findMaxLengthSubarrayWithSum0(arr) {
  let prefixSum = 0;
  let maxLen = 0;
  let map = new Map();
  map.set(0, -1); 
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    if (map.has(prefixSum)) {
      let prevIndex = map.get(prefixSum);
      maxLen = Math.max(maxLen, i - prevIndex);
    } else {
      map.set(prefixSum, i);
    }
  }
  return maxLen === 0 ? -1 : maxLen;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
 
  
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const T = inputArr[0];
  
    let Arr = inputArr[1].split(" ").map((x) => parseInt(x));
    console.log(findMaxLengthSubarrayWithSum0(Arr));
  
}



