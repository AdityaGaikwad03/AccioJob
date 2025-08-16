/* Diagonal Traversal of a Matrix
Give a N * N square matrix, return all the elements of its anti-diagonals from top to bottom.

Input Format
First line contains N, representing the order of the 2D matrix.

Next N lines contains N spaced elements each representing matrix elements.

Output Format
Output in a sigle line, the Diagonal traversal of the matrix.

The traversal should start from the top right of the matrix in bottom right direction and should continue upto bottom left.

Example 1
Input

2
1 2
3 4
Output

2 1 4 3
Explanation:

Topmost anti-diagonal is [[2]]

Next anti-diagonal is [[1, 4]]

and the last anti-diagonal is [[3]]

Example 2
Input

3
1 2 3
4 5 6
7 8 9
Output

3 2 6 1 5 9 4 8 7
EXPLANATION

Topmost anti-diagonal is [[3]]

Next anti-diagonal is [[2, 6]]

Next anti-diagonal is [[1, 5, 9]]

Next anti-diagonal is [[4, 8]]

and the last-diagonal is [[7]]

CONSTRAINTS:
1 <= N <= 500

-10000 <= Mat[i][j] <= 10000 */


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line.trim());
}).on("close", () => {
  const solution = new Solution();
  solution.solve(inputLines);
});

class Solution {
  solve(input) {
    let N = parseInt(input[0]); // first line is N
    let matrix = [];

    for (let i = 1; i <= N; i++) {
      matrix.push(input[i].split(" ").map(Number));
    }

    let result = [];

    // Traverse diagonals starting from top row (right to left)
    for (let col = N - 1; col >= 0; col--) {
      let i = 0, j = col;
      while (i < N && j < N) {
        result.push(matrix[i][j]);
        i++;
        j++;
      }
    }

    // Traverse diagonals starting from left column (row=1 to bottom)
    for (let row = 1; row < N; row++) {
      let i = row, j = 0;
      while (i < N && j < N) {
        result.push(matrix[i][j]);
        i++;
        j++;
      }
    }

    console.log(result.join(" "));
  }
}
