/* Transpose of Matrix
Write a program to find the transpose of a square matrix of size N*N. Transpose of a matrix is obtained by changing rows to columns and columns to rows.

Expected Time Complexity: O(N * N)

Expected Auxiliary Space: O(1)

Input Format
The first line contains an integer N.

The next N lines contains N spaced integers each, elements of matrix.

Output Format
Print the transposed matrix.

Example 1
Input

4
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4
Output

1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
Explanation

The rows and columns are switched.
Example 2
Input

5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15 
16 17 18 19 20
21 22 23 24 25
Output

1 6 11 16 21
2 7 12 17 22
3 8 13 18 23
4 9 14 19 24
5 10 15 20 25
Explanation

The rows and columns are switched. For example: 6 was at position 0, 1 in original matrix. In the transposed matrix, it is at position 1, 0.
Constraints
1 <= N <= 100

-10^3 <= mat[i][j] <= 10^3 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let matrix = [];

rl.on('line', (input) => {
  if (!n) {
    n = Number(input);
  } else {
    matrix.push(input.split(' ').map(Number));
    if (matrix.length === n) {
      let ans = matrixTranspose(matrix, n);
      for(let i=0; i<n; i++) {
        console.log(ans[i].join(' '));
      }
      rl.close();
    }
  }
});

function matrixTranspose(mat, n) {
  //Write your code here
  let transpose = [];  
for (let i = 0; i < matrix[0].length; i++) {
  transpose[i] = [];
  for (let j = 0; j < matrix.length; j++) {
    transpose[i][j] = matrix[j][i];
  }
}
return transpose
}