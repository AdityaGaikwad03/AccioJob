/* Maximum of Array
You are given an array arr of length n. You have to find the maximum element of the array.

Note

You have to use Recursion.

Input Format
The first line of input contains an integer n, size of the array.

The next line contains n space seperated integers denoting the elements of the array.

Output Format
Print single integer representing maximum of the given array

Example 1
Input

3
2 3 10
Output

10
Explanation

10 is maximum among 2,3 and 10.

Example 2
Input

4
1 3 5 7
Output

7
Explanation

7 is maximum among 1,3,5 and 7.

Constraints
0 <= nums.length <= 100

0 <= nums[i] <= 100000 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', nums => {
    const arr = nums.split(' ').map(Number);
    const result = maxElement(arr);
    console.log(result);
    readline.close();
  });
});

function maxElement(arr) {
  // Write your code here
  function helper(index) {
    if (index === arr.length - 1) {
      return arr[index];
    }
    const maxRest = helper(index + 1);
    return Math.max(arr[index], maxRest);
  }
  return helper(0);
}