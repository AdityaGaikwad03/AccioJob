/* Longest String
You want to implement a function that takes an array of strings and returns the longest string in the array.

Input Format
An array of strings arr such that 1 <= arr.length <= 10^5. Each string in arr has length 1 <= str.length <= 100.

Output Format
A string representing the longest string in arr.

Example 1
Input

4
ant mant santa rent
Output

santa

Explanation

Testcase1: Santa is the longest string

Constraints:

1 <= N <= 100000

1 <= |S| <= 1000 */



function longestString(arr) {
  let longest = "";
  for (let str of arr) {
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
}


var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
 

    let Arr = inputArr[1].split(" ").map((x) => (x));

    console.log(longestString(Arr));
  }



