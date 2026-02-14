/* Find the missing number in O(n) time
Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time

Input Format
An array containing n-1 numbers, the lower bound and upper bound. ex:- [1, 4, 3] 1 4

Output Format
Print true if such triplet exists summing to 7 else print false

Example 1
Input

 [1, 4, 3] 1 4 

Output

  2

Explanation

 From numbers 1 to 4, only 2 is missing from the array

Constraints:
1 <= N <= 1000

1 <=Arr[i]<= N */

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
  // do not return
  // print the number here
   let totalCount = upperBound - lowerBound + 1;
  let expectedSum = (totalCount * (lowerBound + upperBound)) / 2;
  let actualSum = 0;
  for (let num of arrayOfIntegers) {
    actualSum += num;
  }
  let missing = expectedSum - actualSum;
  console.log(missing);
}



const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
let noGuessName = [];
rl.on("line", function (line) {
  let [arr, low, high] = line.split(" ");
  arr = JSON.parse(arr);
  high = parseInt(high);
  low = parseInt(low);
  findMissingNumber(arr, high, low);
});
