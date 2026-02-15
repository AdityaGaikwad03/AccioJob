/* Longest Common Prefix in an Array
Given an array of N strings, find the longest common prefix among all strings present in the array.

Input Format
The fist line of each test contains a single integer N. Next line has space-separated N strings.

Output Format
Print the longest common prefix as a string in the given array. If no such prefix exists print "-1"(without quotes).

Example 1
Input

4
geeksforgeeks geeks geek geezer

Output

 gee

Example 2
Input

3
a b c

Output

-1
 
Explanation

in the first testcase gee was the longest common prefix.
for the second testcase no string was common prefix.
Constraints
1 <= N <= 10^3

1 <= |S| <= 10^3 */

// n is number of individual space seperated strings inside strings variable,
// strings is the string which contains space seperated words.
function longestCommonPrefix(strings, n) {
  // write code here
  // do not console,log answer
  // return the answer as string
  const arr = strings.split(" ");
  let prefix = arr[0];
  for (let i = 1; i < n; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") {
        return "-1";
      }
    }
  }
  return prefix;
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
  // if (lineNumber == 0) {
  //   size = parseInt(inputArr[0]);
  // }
  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let n = parseInt(inputArr[0].trim());
  let str = inputArr[1].trim();

  console.log(longestCommonPrefix(str, n));
}
