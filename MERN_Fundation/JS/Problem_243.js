/* First Missing Positive
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

Input Format
First contains n number of integers

Second Line contains an array "arr" (list of integers in unsorted manner. )

Output Format
Print the smallest missing positive integer.

Example 1
Input

5
1 2 7 3 4
Output

5

Example 2
Input

5
5 4 -1 2 1
Output

3

Constraints:

1 <= n <= 500000

-2^31 <= arr[i] <= 2^31 - 1 */

function findSmallestMissingPositive(nums) {
   const n = nums.length;

  // Place each number in its correct index
  for (let i = 0; i < n; i++) {
    while (
      nums[i] > 0 &&
      nums[i] <= n &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      let correctIndex = nums[i] - 1;
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }

  // Find first missing positive
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}

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
 

    let Arr = inputArr[1].split(" ").map((x) => parseInt(x));

    console.log(findSmallestMissingPositive(Arr));
  }

