/* Longest Sub-Array with Sum K
Given an array containing N integers and an integer K. Your task is to find the length of the longest Sub-Array with sum of the elements equal to the given value K.

Input Format
The first line of input contains an integer T denoting the number of test cases. Then T test cases follow. Each test case consists of two lines. The first line of each test case contains two integers N and K and the second line contains N space-separated elements of the array.

Output Format
For each test case, print the required length of the longest Sub-Array in a new line. If no such sub-array can be formed print 0.

Example 1
Input


 3
 6 15
 10 5 2 7 1 9
 6 -5
 -5 8 -14 2 4 12
 3 6
 -1 2 3

Output

4
5
0

Explanation


 Testcase 1: Largest Subarray with sum 10 is: [5,2,7,1]

Constraints:

1<=T<=500

1<=N,K<=10^5

-10^5<=A[i]<=10^5

Sum of N over all test cases does not exceed 10^5 */


function findLongestSubArray(array, k) {
   let map = new Map();
    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        if (sum === k) {
            maxLen = i + 1;
        }
        if (map.has(sum - k)) {
            maxLen = Math.max(maxLen, i - map.get(sum - k));
        }
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }
    return maxLen;
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
  
  if (lineNumber == 2 * size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const T = size;
  for (let i = 1; i <= T*2; i = i = i + 2) {
  
    let N =parseInt(inputArr[i].split(" ")[0]);
    let X=parseInt(inputArr[i].split(" ")[1]);
    let Arr = inputArr[i + 1].split(" ").map((x) => parseInt(x));
  
    console.log(findLongestSubArray(Arr,X));
  }
}

