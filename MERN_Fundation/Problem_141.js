/* Product of natural numbers
Write a recursive program to find the product of all the Natural numbers till N. Take input of N from the user and write a recursive function that returns the product of all the Natural numbers until N.

Input Format
Enter an integer N (N>0)

Output Format
Print the product of all the Natural numbers between N and 1 (both included).

Example 1
Input

5
Output

120
Explanation

5 * 4 * 3 * 2 * 1 = 120.

Example 2
Input

4
Output

24
Explanation

4 * 3 * 2 * 1 = 24.

Constraints
1 <= N <= 14 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function product(n) {
  // Write code here
  if(n === 1){
    return 1;
  }
  return n * product(n - 1);
}
readline.question('', n => {
  console.log(product(Number(n)));
  readline.close();
});