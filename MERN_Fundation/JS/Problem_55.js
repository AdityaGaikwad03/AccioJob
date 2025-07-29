/* Alphabet Pattern Printing
You are given a number N. Print a pattern consisting of N rows, where the first row has 1 A, the second row has 2 Bs, and so on for N letters. Check the examples for a better understanding.

Input Format
First line of input contains N, the number of rows for the pattern

Output Format
You need to print the pattern.

Example 1
Input

4
Output:

A
BB
CCC
DDDD
EEEEE

Pattern Image

Explanation:

For number of rows to be 4 we get this output.

Example 2
Input

5
Output:

Pattern Image

Explanation:

For number of rows to be 5 we get this output.

Constraints:

1 <= N <= 26 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  // Write your code here
    for (let i = 0; i < n; i++) {
    const char = String.fromCharCode(65 + i); // 'A' = 65
    for (let j = 0; j <= i; j++) {
      process.stdout.write(char);
    }
    process.stdout.write('\n');
  }
  readline.close();
});