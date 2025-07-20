/* Reverse a Subarray
Given an array arr of size N. Your task is to determine that if by reversing any one subarray can the given array be sorted or not.

You have to complete solve function which consists of arr array of size N as inputs and you have to return boolean answer as output.

Input Format
The first line of input contains a single integer N.

The second line of input contains N space seperated integers.

Output Format
Return true, if by reversing any one subarray sorted array can be formed as else false , "Yes" or "No" will be taken care by driver code.

Example 1
Input

5
1 2 5 4 3
Output

Yes
Explanation

By reversing the subarray {5, 4, 3}, the array will be sorted.

Example 2
Input

4
1 4 2 3
Output

No
Explanation

By reversing any of the subarray we will not be able to form a sorted array.

Constraints
1 <= N <= 10^5

1 <= arr[i] <= 10^6 */



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (N) => {
	rl.on('line',a => {
		const arr = a.split(' ').map(Number);
		const result = solve(N, arr);
		console.log(result ? 'Yes' : 'No');
		rl.close();	
	})
});

function solve(N, arr) {
    // Write your code here
	let l = 0;
    while (l < N - 1 && arr[l] <= arr[l + 1]) {
        l++;
    }
    if (l === N - 1) return true;
    let r = l;
    while (r < N - 1 && arr[r] >= arr[r + 1]) {
        r++;
    }
    let reversed = arr.slice(0, l)
        .concat(arr.slice(l, r + 1).reverse())
        .concat(arr.slice(r + 1));
    for (let i = 0; i < N - 1; i++) {
        if (reversed[i] > reversed[i + 1]) return false;
    }
    return true;
}
