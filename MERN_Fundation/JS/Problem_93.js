/* Matrix 90 Degree Rotation
You are given a n x n 2-D matrix representing an image. Your task is to rotate the image by 90 degrees in the clockwise direction.

Input Format
The first line will contain two integers n and n again.

The next n lines contain n integers each representing the matrix.

Output Format
Print a matrix that is rotated by 90 degrees in the clockwise direction.

Example 1
Input

2 2 
1 2
2 3 
Output

2 1 
3 2
Explanation

We do a 90 degree clockwise rotation of the matrix.

Example 2
Input

3 3
7  2  3 
2  3  4 
5  6  1 
Output

5 2 7
6 3 2
1 4 3
Explanation

We do a 90 degree clockwise rotation of the matrix.

Constraints
1 <= n <= 100 */


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
    n=inputArr[0].split(' ')[0];
	  m=inputArr[0].split(' ')[1];
  
     
  }
   
  else{
      let Arr = inputArr[lineNumber].split(' ').map((x) => x.trim()).filter((x) => x !== '');

       mat.push(Arr);
      
  }
  
  
  if (lineNumber ==  n) {
    logic("s");
    readline.close();
  }
}

function logic(input) {

  let rotated=rotateImage(mat);
  for(let i=0;i<mat.length;i++){
	  console.log(rotated[i].join(' '));
  }
}




function rotateImage(matrix) {
 
	// Write your code here
  let n = matrix.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    result[i] = [];
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }

  return result;
}