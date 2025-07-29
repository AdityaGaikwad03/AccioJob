/* Count Subarrays with given Sum
Given an unsorted array arr[] of N integers and a sum. The task is to count the number of subarrays which adds to a given number.

Try using map

Note: Use binary search to solve the problem

Input Format
The first line of input contains an integer T denoting the number of test cases. Then T test cases follow.

Each test case contains an integer N denoting the size of the array and integer denoting the value of the sum in the first line.

The next line contains N space separated integers forming the array.

Output Format
For each testcase, if the element is present in the array print "1" (without quotes), else print "-1" (without quotes).

Example 1
Input


2
5 -10
10 2 -2 -20 10
6 33
1 4 20 3 10 5

 
 

Output

3
1

Explanation


 Testcase 1: Subarrays with sum -10 are: [10, 2, -2, -20], [2, -2, -20, 10] and [-20, 10].

 Testcase 2: Subarray with sum 33 is: [20, 3, 10].

Constraints:

1 <= T <= 100

1 <= N <= 10^4

-10^5 <= arr[i] <= 10^5

-10^5 <= sum <= 10^5

Note:- Sum of N over all test cases does not exceed 10^5 */

function countSubarrays(arr, sum) {
  let map = new Map();
  let prefixSum = 0;
  let count = 0;
  map.set(0, 1);
  for(let nums of arr){
    prefixSum += nums
    if(map.has(prefixSum - sum)){
      count += map.get(prefixSum - sum);
    }
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  return count;
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
  
    console.log(countSubarrays(Arr,X));
  }
}
