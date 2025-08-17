/* Longest Common Prefix in an Array
Given an array of N strings, find the longest common prefix among all strings present in the array.

Input Format
The fist line of each test contains a single integer N. Next line has space-separated N strings.

Each testcase contains one line of input containing the string S.

Output Format
Print the longest common prefix as a string in the given array. If no such prefix exists print "-1"(without quotes).

Example 1
Input


4
geeks
geems
geese
geefs
 
Output

gee

Explanation

Longest Common prefix of all the string is "gee"

Constraints:

1 <= N <= 10^3

1 <= |S| <= 10^3 */


function longestCommonPrefix(arr) {
    if (arr.length === 0) return -1;

    // Take the first word as a reference
    let prefix = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let word = arr[i];
        let j = 0;

        // Compare characters until mismatch
        while (j < prefix.length && j < word.length && prefix[j] === word[j]) {
            j++;
        }

        // Reduce prefix
        prefix = prefix.substring(0, j);

        // If prefix becomes empty, break
        if (prefix === "") return -1;
    }

    return prefix;
}


var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
let arr = [];
let n;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) n = parseInt(line);
  else arr.push(line);

  if (lineNumber == n) {
    logic();
    readline.close();
  }
}

function logic() {
    console.log(longestCommonPrefix(arr));
}
