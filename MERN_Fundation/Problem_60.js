/* Print Continuous Character Pattern
Given an integer n that denotes the number of rows to be printed, print the pattern in which each row starts with its corresponding alphabet and has a length equal to the row number. (See the examples for a better understanding).

Note: You can take the alphabet to be cyclic. On reaching Z, you will cycle back to A, then B, and so on.

Input Format
First line contains the value n representing the number of rows.

Output Format
Print the pattern.

Example 1
Input

5
Output



Example 2
Input

8
Output



Constraints
1 <= n <= 26 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', input => {
  const n = parseInt(input);

  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
      let charCode = 65 + i + j;
      // wrap after Z (90), back to A (65)
      line += String.fromCharCode(65 + ((charCode - 65) % 26));
    }
    console.log(line);
  }

  readline.close();
});
