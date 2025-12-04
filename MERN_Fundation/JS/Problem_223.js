/* Student Sorted Array
You are working on a project for a local school. The school has a list of students and their grades, stored in a 2D array. Your task is to create a function that takes in a 2D array of students and returns an array of the students'' names sorted in alphabetical order.

Input Format
A 2D array of strings, arr, where each subarray represents a student and has the following format:

[name, grade]
Output Format
An array of strings containing the names of the students in arr, sorted in alphabetical order.

Example 1
Input

[ 
  ["Student 1", "A"],
  ["Student 2", "B"],
  ["Student 3", "C"],
  ["Student 4", "D"]
]
output

["Student 1", "Student 2", "Student 3", "Student 4"]
Example 2
Input

[ 
  ["Student B", "A"],
  ["Student C", "B"],
  ["Student A", "C"],
  ["Student D", "D"]
]
output

["Student A", "Student B", "Student C", "Student D"]
Explanation

testcase 1 : Names sorted in alphabetical order is displayed as output

testcase 2: similar to the first testcase
constraints
0 < = Size of array < = 1000 */

function sortStudents(arr) {
 // return the sorted array
// do not console.log here
return arr
    .map(student => student[0])   // extract names
    .sort();   
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
  console.log(sortStudents(str).join(" "));
}
