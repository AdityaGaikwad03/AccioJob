/* Alt Matrix Sum
You are given a chessboard of size N x N, where the top left square is black. Each square contains a value. Find the sum of the values of all black squares and all white squares.

Remember that in a chessboard, black and white squares are alternate.

Input Format
The first line contains N, the size of a row of the square matrix.

The next N lines contain N space-separated integers each.

Output Format
Print two lines, the first line containing the sum of black squares and the second line containing the sum of white squares.

Example 1
Input

3
1 2 3
4 5 6
7 8 9
Output

25
20
Explanation

Black squares contain 1, 3, 5, 7, 9: sum = 25

White squares contain 2, 4, 6, 8: sum = 20

Example 2
Input

2
3 5 
7 4
Output

7
12
Explanation

Black squares contain 3, 4: sum = 7

White squares contain 5, 7: sum = 12

Constraints
1 <= N <= 1000

1 <= matrix[i][j] <= 10^5 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  let mat = [];
  let count = 0;
  readline.on('line', (line) => {
    mat.push(line.split(' ').map(Number));
    count++;
    if(count == n) {
      alternateMatrixSum(mat, n);
      readline.close();
    }
  });
});

function alternateMatrixSum(mat, n) {
  let blackSum = 0;
  let whiteSum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 === 0) {
        // Black square
        blackSum += mat[i][j];
      } else {
        // White square
        whiteSum += mat[i][j];
      }
    }
  }

  console.log(blackSum);
  console.log(whiteSum);
}
