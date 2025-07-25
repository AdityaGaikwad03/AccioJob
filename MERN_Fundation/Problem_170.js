/* AS Sorting Problem 5
Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

Note : You need to complete the given function. Input and output will be handled by the driver code.

Input Format
The first line contains integer N denoting the size of array nums

The second line contains N integers denoting the array elements

Output Format
Print the maximum product difference between the 2 pairs.

Example 1
Input

5
5 6 2 7 4
Output

34
Explanation

The chosen pairs of indices (0-indexed) are (1, 3) and (2, 4).

7 * 6 = 42 and 2 * 4 = 8. 42 - 8 = 34.

Example 2
Input

4
4 3 2 1
Output

10
Explanation

The chosen pairs of indices (0-indexed) are (0, 1) and (2, 3).

4 * 3 = 12 and 2 * 1 = 2. 12 - 2 = 10.

Constraints
4 <= N <= 10^5
1<= nums[i] <= 10^4 */


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (N) => {
	rl.on('line',(a) => {
		const nums = a.split(' ').map(Number);
		const ans = sorting5(N, nums);
		console.log(ans);
		rl.close();
		
	})
});

function sorting5(n, nums) {
  // Write your code here
  nums.sort((a, b) => a - b);
  return (nums[n - 1] * nums[n - 2]) - (nums[0] * nums[1])
}