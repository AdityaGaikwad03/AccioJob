/* Combination of elements
Given an array arr of size N. Your task is to print all the possible combinations of r elements, i.e all the combinations of size r.

Input Format
The first line of input contains a single integer N.

The second line of input contains N space seperated integers.

The third line of input contains r, the size of combinations.

Output Format
Print all the unique combinations in sorted order.

Example 1
Input

4 
1 2 3 4
2
Output

1 2
1 3
1 4
2 3
2 4
3 4
Explanation

All the unique combinations of size 2 are given.

Example 2
Input

4
1 2 3 4
1
Output

1
2
3
4
Explanation

All the combinations of size 1 is given.

Constraints
`1 <= N <= 10

1 <= arr[i] <= 10^6

1<=r<=N */


const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question('',(N) => {
	readline.question('',(arr) => {
		readline.question('',(r) => {
			N = parseInt(N);
			arr = arr.split(' ').map(Number).sort((a, b) => a - b);
			r = parseInt(r);
			printCombination(N,arr,r);
		})
	})
})


function printCombination(N,arr,r) {
	// Write your code here
	const result = [];

	function backtrack(start, current) {
		if (current.length === r) {
			console.log(current.join(' '));
			return;
		}
		for (let i = start; i < N; i++) {
			current.push(arr[i]);
			backtrack(i + 1, current);
			current.pop();
		}
	}
	backtrack(0, []);
}