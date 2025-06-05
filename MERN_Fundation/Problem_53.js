/* Descending Number Pattern
Given an integer n, print a pattern of n lines, where the ith line has the numbers i to 1 printed in descending order. Check the sample cases for a better understanding.

Input Format:
Input consists of an integer N.

Output Format:
Print the pattern as described above.

Example 1
Input:

5
Output:

Pattern Image

Example 2
Input:

3
Output::

Pattern Image

Constraints
1 <= n <= 9 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (n) => {
  // your code here
  for(let i = 1; i <= n; i++){
    let line = '';
    for(let j = i; j >= 1; j--){
        line += j;
    }
    console.log(line);
  }

  rl.close();
});