/* Max sum column
Given a matrix of size M*N, your task is to find the maximum sum of a column.

Input Format
The first line of input contains two space- separated integers M and N. The next M lines of input contains N space- separated integers each depicting the values of the matrix.

Output Format
Print the maximum sum between the columns.

Example 1
Input


 3 3
 1 2 3
 4 5 6
 7 8 9
 
Output

18
Explanation

1 + 4 + 7 = 12

2 + 5 + 8 = 15

3 + 6 + 9 = 18

Example 2
Input

 3 2
 1 4
 9 6
 9 1

Output

19

Constraints:

1 <= M, N <= 100

1 <= Matrix[][] <= 100000 */


function maxColSum(mat) {
 // do not console.log here
// return the sum 
 let rows = mat.length;
  let cols = m; // use given column count

  let maxSum = -Infinity;

  for (let j = 0; j < cols; j++) {
    let colSum = 0;

    for (let i = 0; i < rows; i++) {
      colSum += mat[i][j] || 0; // safe against undefined
    }

    maxSum = Math.max(maxSum, colSum);
  }

  return maxSum;
}

/*Do not edit the code below*/

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
let mat =[];
var lineNumber = -1;

readline.on("line", readInputs);

let n, m;

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  
  if (lineNumber == 0) {
    
    let Arr = inputArr[0].split(" ").map((x) => parseInt(x));
     n=Arr[0];
     m=Arr[1];
  
     
  }
   
  else{
       let Arr = inputArr[lineNumber].split(" ").map((x) => parseInt(x));
       mat.push(Arr);
      
  }
  
  
  if (lineNumber ==  n) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
 

  
  console.log(maxColSum(mat));
}





