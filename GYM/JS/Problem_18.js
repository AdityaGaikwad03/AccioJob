/* 0-1 Sorting
You are given an array arr of length n containing only 0's and 1's. Your task is to segregate all the 0's to the left of the array and all the 1's to the right of the array.

Input Format
The first line of input contains an integer n, size of the array.

The next line contains n space seperated integers(0 or 1) denoting the elements of the array.

Output Format
Print n space seperated integers denoting the segregated array.

Example 1
Input

15
0 0 0 1 1 1 1 0 1 1 0 0 1 0 1
Output

0 0 0 0 0 0 0 1 1 1 1 1 1 1 1
Explanation

We have arr = [0 0 0 1 1 1 1 0 1 1 0 0 1 0 1]

Moving all the 0's in the beginning and all the 1's at the end.

The final segregated array is [0 0 0 0 0 0 0 1 1 1 1 1 1 1 1]

Example 2
Input

6
1 0 1 0 1 1
Output

0 0 1 1 1 1
Explanation

The sorted array is [0 0 1 1 1 1]

Constraints
1 <= n <= 10^6

0 <= arr[i] <= 1 */



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (n) => {
	rl.on('line',(a) =>{
		const arr = a.split(' ').map(Number);
		const ans = Sorting01(n, arr);
		console.log(ans.join(' '));
		rl.close();	
	})
});

function Sorting01(n, arr) {
  
	// Write your code here
	// Return the answer; Do not print anything here
	let count0 = 0;

  // Count number of 0s
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) count0++;
  }

  // Fill with 0s followed by 1s
  const result = Array(count0).fill(0).concat(Array(n - count0).fill(1));
  return result;
}