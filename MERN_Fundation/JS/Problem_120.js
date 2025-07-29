/* Comma Separated String to Integer Array
You are given a string S, consisting of , separated positive integers. You need to form an array by extracting these integers from the given string.

It is guaranteed that the formed integers will fit in 32-bit signed integer.

Input Format
The first line contains the number of test cases.

For each test case: The first line contains the string S

Output Format
For each test case print the final formed array.

Example 1
Input

1
1321,3213,424,124
Output

[1321 , 3213 ,  424 , 124]
Explanation

The first integer is 1321 which is separated from 3213 by ','. 3213 is separated from 424 which is further separated from 124.

Example 2
Input

1
89,82,21
Output

[89 , 82 , 21]

Explanation

The first integer is 89 which is separated from 82 by ','. 82 is separated from 21.

Constraints
1 <= T <= 10

1 <= |S| <= 100000 */


function arrayGenerator(s) {
  const arr = s.split(',').map(Number);
  return `[${arr.join(', ')}]`;
}


var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
let strs=[];

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
 
	lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }
  if(lineNumber>0){
      strs.push(line);
  }
  
  if (lineNumber ==  size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
	 
  for(let i=0;i<strs.length;i++){
	let ans=arrayGenerator(strs[i]);
	  console.log(ans);
  }
}

