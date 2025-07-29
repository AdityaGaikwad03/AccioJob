/* Find pairs
Given two unsorted arrays A of size N and B of size M, the task is to find all pairs(one from each array) whose sum is equal to X.

Input Format
Input case contains 3 lines . The first line contains 3 space separated integers N, M, X. Then in the next two lines are space separated values of the array A and B respectively.

Output Format
For each test case in a new line print the space separated values of all the pairs u,v where u belongs to array A and v belongs to array B, such that each pair is "u,v"(without the quotes) and pairs must be ordered on the basis of order of u in the array A. If no such pair exist print -1.

Example 1
Input

5 5 9
1 2 4 5 7
5 6 3 4 8
output

1,8 4,5 5,4

Explanation

1 + 8 = 9 , 4 + 5 =9 and 5 + 4 = 9
constraints
1 <= N, M <= 100000

1 <= A[i], B[i] <= 100000

1 <= X <= 100000 */

function findPairs(array1, array2, x) {
  // return a 2-d array storing pairs
 // if not found return -1
// do not console.log here
   const result = [];
  const freqMap = new Map();
  for (const b of array2) {
    freqMap.set(b, (freqMap.get(b) || 0) + 1);
  }
  for (const a of array1) {
    const b = x - a;
    const freq = freqMap.get(b) || 0;
    for (let i = 0; i < freq; i++) {
      result.push([a, b]);
    }
    if (freq > 0) {
      freqMap.set(b, 0);
    }
  }
  return result.length ? result : -1;
}
/*Do not change the code below */

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
  //Exit Condition
  if (lineNumber == 2) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  //let s = parseInt(inputArr[0].trim());
  //let str1 = inputArr[1].trim();
  let [n, m, sum] = inputArr[0]
    .trim()
    .split(" ")
    .map((x) => parseInt(x));
  let Arr1 = inputArr[1]
    .trim()
    .split(" ")
    .map((x) => parseInt(x));
  let Arr2 = inputArr[2]
    .trim()
    .split(" ")
    .map((x) => parseInt(x));
  //console.log(n, Arr);
  // console.log(

  // );
  const val = findPairs(Arr1, Arr2, sum);
  if (
    Array.isArray(val)
      ? console.log(
          findPairs(Arr1, Arr2, sum)
            .sort()
            .map((x) => x.join(","))
            .join(",")
        )
      : console.log(val)
  );
}
