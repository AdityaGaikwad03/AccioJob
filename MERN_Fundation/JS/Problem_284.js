/* Form the biggest number
Given an array of integers. you have to form the biggest number possible after concatenating them in any order.

Input Format
First line of input contains a single integer N, next line contains N space-separated integers depicting values of the array.

Output Format
Print the largest number that can be formed using the array elements.

Example 1
Input

 3
 10 3 31

Output

 33110

Explanation

 largest number that can be formed using the array will be 3 31 and 10 in order.

Constraints:
1 < = N < = 100000

1 < = Arr[i] < = 100000 */

function BiggestNumber(n,Arr){
 // return the value as a string
// do not console.log here
	let strs = Arr.map(String);
  strs.sort((a, b) => (b + a).localeCompare(a + b));
  if (strs[0] === "0") return "0";
  return strs.join("");
}
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  } else if (lineNumber < size) {
  }

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = +inputArr[0];
  inputArr.shift();
  const Arr = inputArr[0].split(" ").map(x=>+x);

  console.log(BiggestNumber(N, Arr));
}

