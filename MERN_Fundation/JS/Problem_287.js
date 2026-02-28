/* Diagonal Sum
Given a matrix of size N*N, your task is to find the sum of the primary and secondary diagonal of the matrix.

For Matrix:- M00 M01 M02 M10 M11 M12 M20 M21 M22

Primary diagonal:- M00 M11 M22 Secondary diagonal:- M02 M11 M20

Input Format
The first line of input contains a single integer N, The next N lines of input contains N space-separated integers depicting the values of the matrix.

Output Format
Print the sum of primary and secondary diagonal separated by a space.

Example 1
Input

2
1 4
2 6

output

7 6

Explanation

1 + 6 = 7 and 4 + 2 = 6
constraints
1 <= N <= 500

1 <= Matrix[][] <= 100000 */

function DiagonalSum(n, mat) {

  // do not console.log here
  // return using return method
  let primary = 0;
  let secondary = 0;

  for (let i = 0; i < n; i++) {
    primary += mat[i][i];
    secondary += mat[i][n - 1 - i];
  }

  return [primary, secondary];
}

/*Do not change any code below*/
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  } else if (lineNumber < size) {
  }

  //Exit Condition
  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = parseInt(inputArr[0]);
  inputArr.shift();
  let Matrix = [];
  for (let i = 0; i < N; i = i + 1) {
    const Arr = inputArr[i].split(" ").map((x) => +x);
    Matrix.push(Arr);
  }

  console.log(DiagonalSum(N, Matrix).join(" "));
}


