/* Print Matrix Column Wise
Given a 2-D matrix A with N rows and M columns. Print the matrix in column-major order.

Your task is to complete the function printMatrixColumnwise which receives the input matrix, N, and M as its parameters and prints the matrix in column major order.

Input Format
The first line contains the number of test cases.

For each test case: The first line contains two integers N and M denoting the number of rows and columns respectively.

The next N lines contains M integers each denoting the elements of matrix A.

Output Format
For each test case print N*M space-separated integers, the elements of the matrix column wise in a single line.

Example 1
Input:

1
3 3
1 2 3
4 5 6
7 8 9
Output:

1 4 7 2 5 8 3 6 9
Explanation:

The elements of the matrix have been printed column wise.

Example 2
Input:

1
2 2
1 3
2 4
Output:

1 2 3 4
Explanation:

The elements of the matrix have been printed column wise.

Constraints
1 <= T <= 10

1 <= N,M <= 1000

0 <= A[i] <= 100000 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  let t = Number(input.shift());
  while (t--) {
    let [n, m] = input.shift().split(' ').map(Number);
    let matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push(input.shift().split(' ').map(Number));
    }
    printMatrixColumnwise(matrix, n, m);
    console.log();
  }
});

function printMatrixColumnwise(mat, n, m) {
  // Write code here and print output
  for (let col = 0; col < m; col++) {
    for (let row = 0; row < n; row++) {
      process.stdout.write(mat[row][col] + ' ');
    }
  }
}