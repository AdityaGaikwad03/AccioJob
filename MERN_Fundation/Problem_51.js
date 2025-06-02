/* Factorial with loop
m Note: Factorial of any given number n is represented as n! = n * n-1 * n-2 .....* 1.

Input Format
The first line consists of a single integer denoting n.

Output Format
Output is a single line containing factorial of n.

Example 1
Input:

5
Output:

120
Explanation:

5! = 5*4*3*2*1 = 120.
Example 2
Input:

4
Output:

24
Explanation:

4! = 4*3*2*1 = 24.
Constraints
0 <= n <= 20 */




const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.close();
  // Write your code here

   let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }

  console.log(factorial);
});