/* Largest subarray of 0''s and 1''s
Given an array of N elements containing only 0 and 1. Find the length of the largest subarray with an equal number of 0''s and 1''s.

Input Format
Each test case contains two lines. The first line of each test case is a number N denoting the size of the array and in the next line are N space-separated values of A [].

Output Format
Print the max length of the subarray.

Example 1
Input


4
0 1 0 1
 
Output

4

Explanation

Largest subarray would be of length 4 where number of zeros is equal to number of ones

Example 2
Input


5
0 1 1 1 0

Output

2
Constraints:

1 < = N < = 100000 */

function largestSubarray(array) {
  let sum = 0;
  let maxLen = 0;
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    sum += (array[i] === 0 ? -1 : 1);
    if (sum === 0) {
      maxLen = i + 1;
    }
    if (map.has(sum)) {
      maxLen = Math.max(maxLen, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return maxLen;
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
    console.log(largestSubarray( Arr));
  
}

