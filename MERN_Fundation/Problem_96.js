/* Boundary Traversal of matrix
Given an m*n matrix, print the boundary traversal of the matrix in clockwise order.

Input Format
First line contains the values m and n.

Next m lines contain n-spaced integers.

Output Format
Print the boundary traversal of the matrix in clockwise order.

Example 1
Input

2 3
1 2 3
1 5 3
Output

1
2
3
3
5
1
Explanation

We can see that while traversing in a clockwise fashion we go in the order of 1, 2, 3, 3, 5, 1.

Example 2
Input

3 4
5 4 6 3
1 4 3 5
5 1 9 6
Output

5
4
6
3
5
6
9
1
5
1
Explanation

We can see that while traversing in a clockwise fashion we go in the order of 5, 4, 6, 3, 5, 6, 9, 1, 5, 1.

Constraints
1 <= n <= 10^3

1 <= m <= 10^3

1 <= mat[i][j] <=10^5 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let [m, n] = input[0].split(' ').map(Number);
  let matrix = [];
  for (let i = 1; i <= m; i++) {
    matrix.push(input[i].split(' ').map(Number));
  }
  boundaryTraversal(m, n, matrix);
});

function boundaryTraversal(m, n, matrix) {
  // const boundary = [];
  for (let i = 0; i < n; i++) {
    // boundary.push(matrix[0][i]);
    console.log(matrix[0][i])
  }
  for (let i = 1; i < m; i++) {
    // boundary.push(matrix[i][n - 1]);
    console.log(matrix[i][n - 1])
  }
  if (m > 1) {
    for (let i = n - 2; i >= 0; i--) {
      // boundary.push(matrix[m - 1][i]);
      console.log(matrix[m - 1][i])
    }
  }
  if (n > 1) {
    for (let i = m - 2; i > 0; i--) {
      // boundary.push(matrix[i][0]);
      console.log(matrix[i][0])
    }
  }
}