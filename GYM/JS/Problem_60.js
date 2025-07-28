/* Unique categories
You are working on a project for a local museum. The museum has a list of exhibits and their corresponding categories, stored in a 2D array. Your task is to create a function that takes in a 2D array of exhibits and returns an array of the categories, with no duplicate categories.

Input Format
A 2D array of strings, arr, where each subarray represents an exhibit and has the following format:

[title, category]

Output Format
An array of strings containing the categories of the exhibits in arr, with no duplicate categories.

Example 1
Input

[["Exhibit 1", "Category 1"],["Exhibit 2", "Category 2"],["Exhibit 3", "Category 3"],["Exhibit 4", "Category 3"]]


Output

Category 1 Category 2 Category 3



Explanation

Testcase1: There are 3 unique categories

Constraints:

1 <= N <= 100000 */



function uniqueCategories(arr) {
    let unique = new Set()
  for(let i = 0; i < arr.length; i++){
    unique.add(arr[i][1])
  }
  return [...unique]
}
var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
 
  if (lineNumber ==  0) {
    logic("s");
    readline.close();
  }
}



function logic(input) {
    let arr=JSON.parse(inputArr[0]);
    let word=inputArr[1];
    console.log(uniqueCategories(arr).join(" "));
    
}
