/* Star Pyramid Creation
Given an integer n, print a pyramid full of stars with height equal to n.

Input Format
The first line of input contains the integer n.

Output Format
The output should contain a pyramid filled with stars with height equal to n.

Example 1
Input

3
Output:

Pattern Image

Example 2
Input

7
Output

Pattern Image

Constraints
1 <= n <= 200 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  n = parseInt(n);
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = n - i; j > 0; j--) {
      str += ' ';
    }
    for (let j = 1; j <= i; j++) {
      str += '* ';
    }
    console.log(str);
  }
  readline.close();
});