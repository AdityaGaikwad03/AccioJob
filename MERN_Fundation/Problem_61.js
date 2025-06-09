/* Digit Frequency Counter
Given a number N and a digit D. Write a program to find how many times the digit D appears in the number N.

Input Format
A single line containing the integers N and D.

Output Format
Return a single integer representing the number of times the digit D appears in the number N.

Example 1
Input

1111221 1
Output

5
Explanation

1 occur 5 times in 1111221.

Example 2
Input

554 4
Output

1
Explanation

4 occur 1 time in 554.

Constraints
1 <= |n| <= 10^9

1 <= |d| <= 9 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function countFreqDigit(n, d) {
  // write code here
  let count = 0;
  const strN = n.toString();
  const strD = d.toString();

  for (let char of strN) {
    if (char === strD) {
      count++;
    }
  }

  return count;
}


readline.question('', (input) => {
  const [n, d] = input.split(' ').map(Number);
  console.log(countFreqDigit(n, d));
  readline.close();
});