/* Sort 0's 1's and 2's
Given an array A of size N containing 0's, 1's and 2's. The task is to segregate the 0's, 1's and 2's in the array as all the 0's should appear in the first part of the array, 1's should appear in middle part of the array and finally all the 2's in the remaining part of the array.

Note: Do not use inbuilt sort function. Try to solve in O(N) per test case

Input Format
The first line contains an integer T denoting the total number of test cases. Then T testcases follow.

Each testcases contains two lines of input. The first line denotes the size of the array N.

The second lines contains the elements of the array A separated by spaces.

Output Format
For each testcase, in a newline, print the sorted array.

Example 1
Input


 2
 5
 0 2 1 2 0
 3
 0 1 0
 
Output

 0 0 1 2 2
 0 0 1

Explanation

Testcase 1: After segragating the 0s, 1s and 2s, we have 0 0 1 2 2 which shown in the output.

Testcase 2: For the given array input, output will be 0 0 1.

Example 2
Input

1
5
0 1 1 2 0

Output

0 0 1 1 2

Constraints:

1 <= T <= 100

1 <= N <= 100000

0 <= Ai <= 2

Sum of N for each test case does not exceed 10^5 */

function Sort012(nums) {
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else { // nums[mid] === 2
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }

    return nums; // return the array itself
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
let size;

readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    if (lineNumber == 0) {
        size = parseInt(inputArr[0]);
    }

    if (lineNumber == 2 * size) {
        logic();
        readline.close();
    }
}

function logic() {
    const T = size;
    for (let i = 1; i <= T * 2; i += 2) {
        let N = parseInt(inputArr[i]);
        let Arr = inputArr[i + 1].split(" ").map(Number);
        console.log(Sort012(Arr));
    }
}
