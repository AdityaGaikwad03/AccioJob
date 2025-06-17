/* Subarray sum divisible by k
Given an integer array nums and an integer k, print the number of non-empty subarrays that have a sum divisible by k.

A subarray is a contiguous part of an array.

Input Format
Input consists of two lines.

The first line contains two integers n (size of the array) and k.

The second line contains n spaced integers.

Output Format
Print count of subarrays divisible by k

Example 1
Input

6 5 
4 5 0 -2 -3 1
Output

7
Explanation

There are 7 subarrays with a sum divisible by k = 5:

[4, 5, 0, -2, -3, 1]

[5]

[5, 0]

[5, 0, -2, -3]

[0]

[0, -2, -3]

[-2, -3]

Example 2
Input

4 2 
4 5 0 -2
Output

4
Explanation

There are 4 subarrays with a sum divisible by k = 2:

[4]

[0]

[0 -2]

[-2]

Constraints
1 <= nums.length <= 5 * 10^3

-10^4 <= nums[i] <= 10^4

2 <= k <= 10^4

 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
});

rl.on('close', () => {
  const [n, k] = input[0].split(' ').map(Number);
  const nums = input[1].split(' ').map(Number);
  console.log(subarraysDivByK(nums, k));
});

function subarraysDivByK(nums, k) {
  let prefixSum = 0;
  let count = 0;
  const remainderFreq = new Map();
  remainderFreq.set(0, 1); // Empty subarray sum is 0

  for (let num of nums) {
    prefixSum += num;
    let mod = ((prefixSum % k) + k) % k; // Normalize to always be positive

    if (remainderFreq.has(mod)) {
      count += remainderFreq.get(mod);
      remainderFreq.set(mod, remainderFreq.get(mod) + 1);
    } else {
      remainderFreq.set(mod, 1);
    }
  }

  return count;
}
