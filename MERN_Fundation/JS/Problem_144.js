/* Find pairs with given sum
Given an array of integers, and an integer ‘K’, find the count of pairs of elements in the array whose sum is equal to ''K''.

Input Format
The first line of the input contains 2 space separated integers N and K denoting the size of array and the sum respectively.

The second line of the input contains N space separated integers denoting the elements of the array.

Output Format
Print the count of pairs of elements in the array whose sum is equal to the K.

Example 1
Input


5 4
1 2 2 4 3
 
 

Output

2

Explanation

Two pairs are 2,2 and 1,3
Example 2
Input

5 12
1 2 3 4 5

Output

0

Constraints:

1 <= N <= 100000

1 <= K <= 100000

1 <= A[i] <= 100000 */


var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

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
 
  
    let N =parseInt(inputArr[0].split(" ")[0]);
    let X=parseInt(inputArr[0].split(" ")[1]);
    let Arr = inputArr[1].split(" ").map((x) => parseInt(x));
 
  
    console.log(findSum(Arr,N,X));
  
}
function findSum(arr, n, sum) {
  const freq = {};
  let count = 0;
  for (const num of arr) {
    const complement = sum - num;
    if (freq[complement]) {
      count += freq[complement];
    }
    freq[num] = (freq[num] || 0) + 1;
  }
  return count;
}