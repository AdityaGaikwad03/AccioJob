/* Square Matrix Multiplication
Given two square Matrices A and B each of N rows and N columns, you need to multiply the two matrices. Return the product matrix.

NOTE You need to complete the given function. The input and printing of output will be handled by the driver code.

Input Format:
The first line contains the number of test cases.

For each test case: The first line has 'N', the dimensions of the matrices.

The next N rows will have N elements each. These are the elements of matrix A.

The next N rows will have N elements each. These are the elements of matrix B.

Output Format:
For each test case return your answer.

Example 1:
Input:

1
2
1 1
1 1
2 2 
2 2
Output:

4 4
4 4
Explanation:

We multiply the two matrices.

Example 2:
Input:

1
3
1 1 1
2 2 2
3 3 3
1 1 1
2 2 2
3 3 3
Output:

6 6 6
12 12 12
18 18 18
Explanation:

We multiply the two matrices.

Constraints:
1 <= T <= 10

1 <= N <= 50 */


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
  while(t-- > 0) {
    let n = Number(input.shift());
    let matrix1 = [];
    let matrix2 = [];
    for(let i = 0; i < n; i++) {
      matrix1.push(input.shift().split(' ').map(Number));
    }
    for(let i = 0; i < n; i++) {
      matrix2.push(input.shift().split(' ').map(Number));
    }
    printMultiplication(matrix1, matrix2, n);
  }
});

function printMultiplication(matrix1, matrix2, n) {
  let resultMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < n; j++) { 
      for (let k = 0; k < n; k++) { 
        resultMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(resultMatrix[i].join(' '));
  }
}
