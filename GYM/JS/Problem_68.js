/* Make it small
You have an array of integers. You can perform the following operation multiple times:

Choose any two indices, i and j (where i is not equal to j), such that the absolute difference between the elements at these indices is exactly 1 (i.e., |Aj - Ai| = 1).
Remove the smaller element of these two from the array.
Your goal is to determine if it's possible to reduce the array to a single element by repeatedly performing this operation.

Input:
A single integer N which denotes the number of elements in the array.
This is followed by a line containing N space-separated integers which represent the array.
Output:
If it's possible to reduce the array to a single element, print "YES".
Otherwise, print "NO".
Example 1:
Input:

4
3 2 4 1
Output:

YES
Explanation:

Choose indices of 1 and 2 (corresponding to values 3 and 2). Remove the smaller number, which is 2. The array becomes [3, 4, 1].
Next, choose indices of 1 and 3 (corresponding to values 3 and 1). Remove the smaller number, which is 1. The array becomes [3, 4].
Lastly, choose indices of 1 and 2 (corresponding to values 3 and 4). Remove the smaller number, which is 3. The array becomes [4]. Only one element is left, so the answer is "YES".
Example 2:
Input:

3
1 2 4
Output:

NO
Explanation: You can choose indices of 1 and 2 (values 1 and 2) and remove the value 1. The array then becomes [2, 4]. There's no possible operation that can be performed now to remove another element, so the array can't be reduced to a single element because the difference between the two value is 2 not 1. Thus, the answer is "NO".

Constraints: 1 <= N <= 100000

1 <= A[i] <= 1000000 */


function canMakeOneElementArray(arr) {
  arr = arr.map(Number); // convert strings to numbers
  const minVal = Math.min(...arr);
  const maxVal = Math.max(...arr);
  const distinct = new Set(arr).size;

  // Check if all consecutive numbers are present
  if (distinct === (maxVal - minVal + 1)) {
    return "YES";
  } else {
    return "NO";
  }
}

var readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputArr = [];
let lineNumber = -1;
let n;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line.trim());
  lineNumber++;

  if (lineNumber == 0) {
    n = parseInt(inputArr[0]); // number of elements (not used further)
  }

  if (lineNumber == 1) {
    logic();
    readline.close();
  }
}

function logic() {
  let Arr = inputArr[1].split(" ").map(Number);
  console.log(canMakeOneElementArray(Arr));
}
