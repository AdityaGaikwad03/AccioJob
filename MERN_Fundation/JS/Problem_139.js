/* Print the pattern
Using recursion, print the following pattern. The pattern consists of 'n' rows of asterisks, with each row 'i' containing 'i' asterisks, where 'i' is the row number starting from 1.

Input Format
First line contains integer n, representing rows of the given pattern

Output Format
Display the given pattern.

Example 1
Input

5
Output



Explanation:

The number of rows given is 3.

Example 2
Input

3
Output



Explanation:

The number of rows given is 5.

Constraints
1 <= n <= 102 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function solve(n) {
  function printRow(row) {
    if (row > n) return;
    printStars(row);
    process.stdout.write('\n');
    printRow(row + 1);
  }

  function printStars(count) {
    if (count === 0) return;
    process.stdout.write('* ');
    printStars(count - 1);
  }

  printRow(1);
}

readline.question('', n => {
  solve(parseInt(n));
  readline.close();
});
