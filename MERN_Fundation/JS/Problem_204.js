/* Pascal's Triangle II
Given an number n, print the nth row of the Pascal's triangle.

Pascal Triangle

Your task is to complete the function pascalTriangleRow which receives n as the parameter and returns the nth row of the pascal's triangle.

Input Format
There is a single line of input representing n.

Output Format
Return the nth row of the Pascal’s triangle

Example 1
Input

4
Output

1 3 3 1
Explanation

The elements in the 4rd row are 1 3 3 1.

Example 2
Input

1
Output

1
Explanation

The elements in the 1st row are 1.

Constraints
1 <= n <= 30 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  let triangle = pascalTriangleRow(parseInt(n));
  console.log(triangle.join(' '));
  readline.close();
});

function pascalTriangleRow(numRows) {
  // write code here
  let row = [1]; 
  let prev = 1;

  for (let i = 1; i < numRows; i++) {
    let next = (prev * (numRows - i)) / i;
    row.push(next);
    prev = next;
  }

  return row;
}