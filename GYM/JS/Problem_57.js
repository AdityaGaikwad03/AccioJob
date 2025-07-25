/* Composite Numbers
You are given an array A consisting of N integers. You have to remove all the composite numbers from the array.

Note Complete the given function and print the updated array. The input would be handled by the driver code. You have to print the final array.

1 is neither prime nor composite.

Input Format
The first line an integer N.

The next line contains N integers.

Output Format
Print the updated array.

Example 1
Input

4
3 12 13 15
Output

3 13
Explanation

12 and 15 are composite, thus, they are removed.

Example 2
Input

2
4 2
Output

2
Explanation

4 is the only composite number. It is removed.

Constraints
1 <= N <= 10000

1 <= A[i] <= 10000 */


const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('', (N) => {
	readline.question('',(arr) => {
		N = parseInt(N);
		arr = arr.split(' ').map(Number);
		console.log(removeComposites(N,arr).join(' '));
	})
});


function removeComposites(N, arr) {

	// Write your code here
	// Return the modified array. Do not print the answer here
	const isPrime = (num) => {
		if (num <= 1) return false;
		if (num === 2) return true;
		if (num % 2 === 0) return false;
		for (let i = 3; i * i <= num; i += 2) {
			if (num % i === 0) return false;
		}
		return true;
	};
	const result = arr.filter(num => isPrime(num));
	return result;
}