/* Paindrome strings in the array
Given an array of strings, return an array of the palindromes strings.

Input Format
An array of strings.

Output Format
An array containing the palindrome strings.

Example 1
Input

["racecar", "hello", "level", "radar", "civic"]
output

["racecar", "level", "radar", "civic"]
Explanation

racecar ,level ,radar ,civic are the palindromes among the input array.
constraints
1 <= arr.length , arr[i].length <= 100 */

function palindromes(arr) {
 // return the array
// do not console.log here
 return arr.filter(str => {
    return str === str.split("").reverse().join("");
  });
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
  if (lineNumber ==0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = JSON.parse(inputArr[0].trim());
  //let k = parseInt(inputArr[1].trim());
  // console.log(Arr,k);
  console.log(palindromes(Arr).join(", "));
}
