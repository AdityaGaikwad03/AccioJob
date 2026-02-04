/* Find all four sum numbers
Given an array A of size N, find all combination of four elements in the array whose sum is equal to a given value K. For example, if the given array is {10, 2, 3, 4, 5, 9, 7, 8} and K = 23, one of the quadruple is “3 5 7 8” (3 + 5 + 7 + 8 = 23).

The output should contain only unique quadruple For example, if the input array is {1, 1, 1, 1, 1, 1} and K = 4, then the output should be only one quadruple {1, 1, 1, 1}

Input Format
The first line of input contains two integers N and K. Then in the next line there are N space-separated values of the array.

Output Format
Print all the quadruples present in the array separated by space which sums up to the value of K. Each quadruple is unique which are separated by a new line and are in increasing order.

NOTE The order of printing each quadruple should be from lowest lexicographical quadruple to the highest and each quadruple must be printed in sorted order and only once. It is guaranteed that at least one solution will always exist.

Example 1
Input

5 3
0 0 2 1 1
output

0 0 1 2
Explanation

0 + 0 + 1 + 2 = 3
Example 2
Input

7 23
10 2 3 4 5 7 8
output

2 3 8 10 
2 4 7 10 
3 5 7 8
Explanation

2 + 3 + 8 + 10 = 23 
2 + 4 + 7 + 10 = 23 
3 + 5 + 7 + 8 = 23
constraints
1 <= N <= 100

-20000 <= K <= 20000

-50000 <= A[i] <= 50000

All elements are pairwise distinct */

var fourSum = function(nums,target) {
// return a 2d array containing the quadruples as array
// do not console.log here
// Your code here
  let n = nums.length;
  let res = [];

  // sort array first
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);

          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } 
        else if (sum < target) {
          left++;
        } 
        else {
          right--;
        }
      }
    }
  }

  return res;
};

/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    // size = parseInt(inputArr[0].trim());
  }
  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let [N, target] = inputArr[0].split(" ").map((x) => +x);
  let Arr = inputArr[1].trim().split(" ").map((x) => +x);
 const Ans= fourSum(Arr, target);
 Ans.map(x=>console.log(x.join(" ")));
}
