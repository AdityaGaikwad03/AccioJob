/* Infinity Stone : The Time Stone in Mystery Box
The time stone is hidden inside a sacred box which has a lock of N different rings and each ring has 0-9 serially on it. Initially, all N- rings together show an N- digit integer but there is a particular code only that can open the lock. You can rotate each ring any number of times in either direction. You have to find the minimum number of rotations done on rings of the lock to open the lock.

Input Format
First line contains the integer N. Second line contains a string that depicts the digit on rings Third line contains a string that depicts the unlock code

Output Format
Print the minimum rotation of rotations done on the rings to unlock the box.

Example 1
Input

4
2345
5432
output

8
Explanation

1st ring is rotated thrice as 2- >3- >4- >5
2nd ring is rotated once as 3- >4
3rd ring is rotated once as 4- >3
4th ring is rotated thrice as 5- >4- >3- >2
 

constraints
0 <= digit on each ring <= 9

1 <= |String| <= 100000 */


function minRotations(n, lock, code) {
  // return the value
// do not console.log here
 let total = 0;

  for (let i = 0; i < n; i++) {
    let a = Number(lock[i]);
    let b = Number(code[i]);

    let diff = Math.abs(a - b);
    total += Math.min(diff, 10 - diff);
  }

  return total;
}

/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  //Exit Condition
  if (lineNumber == 2) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let n = parseInt(inputArr[0].trim());
  let str1 = inputArr[1].trim();
  let str2 = inputArr[2].trim();
  console.log(minRotations(n,str1, str2));
}

