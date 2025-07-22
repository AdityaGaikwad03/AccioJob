/* Maximum distance between the same elements
Given an array with repeated elements, the task is to find the maximum distance between two occurrences of an element.

Note:- It is guaranteed that atleast one number is repeated.

Input Format
Input consists of two strings in lowercase english characters.

Output Format
For each test case in new line print the Maximum distance between two occurrences of an element

Example 1
Input

6
1 1 2 2 2 1
output

5
Explanation

The index of two occurrences are:- (1, 2), (1, 6), (2, 6), (3, 4), (3, 5), (4, 5)
it can be seen that the maximum distance is between (1, 6) i. e. 5
constraints
1 <= N <= 100000

1 <= Arr[i] <= 10^9 */


function maximumDistance(arr, N) {
  // Do not console.log here
// return the max Distance
 let firstIndex = new Map();
    let maxDist = 0;
     for (let i = 0; i < N; i++) {
        const val = arr[i];
        if (firstIndex.has(val)) {
            let dist = i - firstIndex.get(val);
            maxDist = Math.max(maxDist, dist);
        } else {
            firstIndex.set(val, i);
        }
    }

    return maxDist;
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
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  //let s = parseInt(inputArr[0].trim());
  //let str1 = inputArr[1].trim();
  let n = parseInt(inputArr[0].trim());
  let Arr = inputArr[1]
    .trim()
    .split(" ")
    .map((x) => parseInt(x));
  //console.log(n, Arr);
  console.log(maximumDistance(Arr, n));
}
