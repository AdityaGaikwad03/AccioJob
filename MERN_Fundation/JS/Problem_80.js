/* Index of Dominant Element
You are given an integer array nums of size n where the largest integer is unique. Your task is to determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, print the index of the largest element, or print -1 otherwise.

Input Format
The first line of the input contains the number n(length of the array),

The next line contains n space separated integers denoting the elements of the array.

Output Format
Print the index of the element if it satisfies the condition else print -1

Example 1
Input

4
3 6 1 0
Output

1
Explanation

Here, 6 is the largest integer, and for every other number in the array x, 6 is more than twice as big as x. The index of value 6 is 1, so we return 1

Example 2
Input

4
1 2 3 4
Output

-1
Explanation

4 isn't at least as big as twice the value of 3, so we return -1.

Constraints
1 <= n <= 50

0 <= nums[i] <= 100

The largest element in nums is unique. */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function LargestElement(nums, n) {
  // Write your code here
  let max = -1;
  let index = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }
  for (let i = 0; i < n; i++) {
    if (i !== index && max < 2 * nums[i]) {
      return -1;
    }
  }
  return index;
}

readline.question('', n => {
  readline.question('', nums => {
    nums = nums.split(' ').map(Number);
    console.log(LargestElement(nums, n));
    readline.close();
  });
});