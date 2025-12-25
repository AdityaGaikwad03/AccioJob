/* Big String sorting
Consider an array of numeric strings where each string is a positive number (number of digits in the number can be from 1 to 1000000). Sort the array''s elements in non-decreasing, or ascending order of their integer values and print each element of the sorted array on a new line.

Each string is guaranteed to represent a positive integer without leading zeros.

Input Format
The first line contains an integer n, denoting the number of strings in unsorted. Each of the n subsequent lines contains a number string (unsorted[i]).

Output Format
For each test case in a new line print the space separated values of all the pairs u,v where u belongs to array A and v belongs to array B, such that each pair is "u,v"(without the quotes) and pairs must be ordered on the basis of order of u in the array A. If no such pair exist print -1.

Example 1
Input

5 5 9
1 2 4 5 7
5 6 3 4 8
output

1,8 4,5 5,4

Explanation

1 + 8 = 9 , 4 + 5 =9 and 5 + 4 = 9
constraints
1<=n<=2*10^4

The total number of digits across all strings is between 1 and 10^6 (inclusive). */

function sortNumericStrings(unsorted) {
    // return the array as sorted
    // do not console.log here
    // code here
      unsorted.sort((a, b) => {
        if(a.length !== b.length){
          return a.length - b.length;
        }
        return a.localeCompare(b);
      });
      return unsorted;
    }
    /*Do not change the code below */
    
    var readline = require("readline").createInterface(process.stdin);
    
    let inputArr = [];
    var lineNumber = -1;
    readline.on("line", readInputs);
    
    function readInputs(line) {
      inputArr.push(line);
      lineNumber++;
      if (lineNumber == 0) {
        size = parseInt(inputArr[0]);
      }
      //Exit Condition
      if (lineNumber == size) {
        logic("s");
        readline.close();
      }
    }
    
    function logic(input) {
      //let s = parseInt(inputArr[0].trim());
      //let str1 = inputArr[1].trim();
      let n = parseInt(inputArr[0]);
      let Arr = [];
      for (let i = 1; i <= n; i++) {
        Arr.push(inputArr[i].trim());
      }
      console.log(sortNumericStrings(Arr).join(" "));
    }
    
    