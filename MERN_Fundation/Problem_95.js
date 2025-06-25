/* Fill Rows in Boolean Matrix
You are given a matrix Mat of m rows and n columns. The matrix is boolean so the elements of the matrix can only be either 0 or 1.

Now, if any row of the matrix contains a 1, then you need to fill that whole row with 1. After doing the mentioned operation, you need to return the modified matrix.

Your task is to complete the function BooleanMatrixProblem which takes m, n and the input array as the parameter and returns the modified matrix as specified in the question.

Input Format
The first line of contains m and n denoting number of rows and number of columns respectively.

Then next m lines contain n elements each denoting the elements of the matrix.

Output Format
Return the modified matrix as specified above.

Example 1
Input

5 4
1 0 0 0
0 0 0 0
0 1 0 0
0 0 0 0
0 0 0 1
Output

1 1 1 1
0 0 0 0
1 1 1 1
0 0 0 0
1 1 1 1
Explanation

rows = 5 and columns = 4

The given matrix is

1 0 0 0
0 0 0 0
0 1 0 0
0 0 0 0
0 0 0 1
Evidently, the first row contains a 1 so fill the whole row with 1. The third row also contains a 1 so that row will be filled too. Finally, the last row contains a 1 and therefore it needs to be filled with 1 too.

The final matrix is

1 1 1 1
0 0 0 0
1 1 1 1
0 0 0 0
1 1 1 1
Example 2
Input

2 2
1 0 
0 1 
Output

1 1 
1 1 
Explanation

rows = 2 and columns = 2

The given matrix is

1 0 
0 1
Evidently, the first row contains a 1 so fill the whole row with 1. The second row also contains a 1 so that row will be filled too. The final matrix is

1 1 
1 1
Constraints
1 <= m, n <= 300

Mat[i][j] ∈ {0,1} */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', m_n => {
  const [m, n] = m_n.split(' ').map(Number);
  let mat = [];
  let count = 0;
  readline.on('line', line => {
    mat.push(line.split(' ').map(Number));
    count++;
    if (count === m) {
      let ans = BooleanMatrixProblem(m, n, mat);
      for (let i = 0; i < m; ++i) {
        console.log(ans[i].join(' '));
      }
      readline.close();
    }
  });
});

function BooleanMatrixProblem(m, n, mat) {
  for (let i = 0; i < m; i++) {
    if (mat[i].includes(1)) {
      mat[i] = new Array(n).fill(1);
    }
  }
  return mat;
}


