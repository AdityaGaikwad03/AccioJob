/* Sum of Even Numbers
You are given a number N. Print sum of all even numbers from 1 to N.

Input Format
There is only an integer N.

Output Format
Return the sum as a single integer.

Example 1
Input

12
Output

42
Explanation

The sum of even numbers till 12 is 42. (2+4+6+8+10+12=42)

Example 2
Input

13
Output

42
Explanation

The sum of even numbers till 12 is 42. (2+4+6+8+10+12=42)

Constraints
1 <= |N| <= 10^9 */




const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
	n = parseInt(n);
	// Write your code here
	let k = Math.floor(n / 2);
  	let sum = k * (k + 1);

  console.log(sum);
	readline.close();
});