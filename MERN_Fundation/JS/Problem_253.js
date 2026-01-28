/* Unique Characters
You are given a string str. Your task is to write a function uniqueChars(str) that returns a new string containing only the unique characters of the input string.

Input Format
A string str where 1 <= str.length <= 10^5.
Output Format
A string containing only the unique characters of str.
Example 1
Input

str = "Hello World"
Output

"Helo Wrd"
Explanation

Example 2
Input

str = "aabbc"
Output

"abc"
Constraints
The input string str contains only ASCII characters.
The output string should maintain the order of the original input string.
Your solution should have a time complexity of O(n), where n is the length of the input string. */


function uniqueChars(str) {
  // write your code here
  let seen = new Set();
  let result = "";

  for (let ch of str) {
    if (!seen.has(ch)) {
      seen.add(ch);
      result += ch;
    }
  }

  return result;
}

/* Do not change the code below  */

const rl = require("readline");
const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line1) {
  console.log(uniqueChars(line1));
  reader.close();
});
