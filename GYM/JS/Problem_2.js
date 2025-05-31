/* Average Grades
You are working on a project for a local school. The school has a list of student grades, stored in an array. Your task is to create a function that takes in an array of grades and returns the average grade.

Input Format
An array of integers, arr, representing the grades of the students.

Output Format
return the average marks of the students.

Example 1
Input

[10, 20, 30, 40]
output

25
Example 2
Input

[5, 10, 15, 20]
output

12.5
Explanation

testcase 1 : (10 + 20 + 30 + 40)/4 = 100/4 = 25

testcase 2: (5 + 10 + 15 + 20)/4 = 50/4 = 12.5
constraints
1 < = Size of array < = 100000

1 < = arr[i] < = 100 */


function averageGrade(arr) {
 // return the average value
// do not console.log here
 const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
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
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let str = JSON.parse(inputArr[0].trim());
  console.log(averageGrade(str));
}
