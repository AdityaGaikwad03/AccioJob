/* Sum of Array
Write a program to find sum of all elements present in an array (arr[ ]). Take input of size of array (N) from user followed by the elements of array. After taking input, make variable sum and add all the elements of the array to the sum variable till you reach the last element of the array.

Input Format
First line contains an integer N denoting size of array.

Second line contains N integers denoting the array elements separated by single space.

Output Format
Print sum of the array elements

Example 1
Input

5
1 2 3 4 4
Output

14
Explanation

1+2+3+4+4 = 14
Example 2
Input

3
1 2 3
Output

6
Explanation

1+2+3 = 6
Constraints
1 <= N <= 10^5

1 <= arr[i] <= 10^9 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (N) => {
  rl.on('line', (arr) => {
    arr = arr.split(' ').map(Number);
    let ans = findSum(arr, N);
    console.log(ans);
    rl.close();
  });
});

function findSum(arr, N) {
	// Write your code here
   return arr.reduce((sum, num) => sum + num, 0);
}