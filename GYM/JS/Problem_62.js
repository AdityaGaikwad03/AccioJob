/* Sort Strings
Given an array of strings, return an array of the strings sorted alphabetically.

Input Format
The first line of input contains n denoting the size of array.

Next line contains n different strings.

Output Format
Print the array of string in the sorted manner.

Example 1
Input

4
ant mant xant rent
Output

ant mant rent xant

Explanation

Testcase1: The new array is sorted in lexicographically ascending order.

Constraints:

1 <= N <= 100000

1 <= |S| <= 1000 */

function sortStrings(arr) {
// Your code here
// do not console.log here
// return the sorted string array


// return arr.sort()

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
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

    console.log(sortStrings(Arr).join(" "));
  }



