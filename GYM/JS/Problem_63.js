/* Find Number of Digits
Given the number n, find out and return the number of digits present in a number recursively.

Input Format
Input consists of single line which has the integer n.

Output Format
Return the number of digits present in n.

Example 1
Input

1256
Output

4
Example 2
Input

12345
Output

5
Constraints
1 <= n <= 10^9 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function numOfDigi(n) {
  //Write code here
 if (n === 0) {
    return 1; // Special case for 0
  }
  let count = 0;
  n = Math.abs(n); // Handle negative ns
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;

}

readline.question('', n => {
  const result = numOfDigi(parseInt(n));
  console.log(result);
  readline.close();
});