/* Anagram
Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “act” and “tac” are an anagram of each other.

Input Format
Input consists of two strings in lowercase english characters.

Output Format
Print "YES" without quotes if the two strings are anagram else print "NO".

Example 1
Input

naman
manan

Output

 YES

Explanation

Both are anagrams

Constraints
1 ≤ |s1|, |s2| ≤ 10^5 */

// str1 and str2 are the two input strings
function isAnagram(str1, str2) {

  // return YES or NO
  // Do not console.log here
  if (str1.length !== str2.length) return "NO";
  const freq = new Array(26).fill(0);
  const base = "a".charCodeAt(0);
  for (let i = 0; i < str1.length; i++) {
    freq[str1.charCodeAt(i) - base]++;
    freq[str2.charCodeAt(i) - base]--;
  }
  for (let count of freq) {
    if (count !== 0) return "NO";
  }

  return "YES";
}

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
  const str1 = inputArr[0].trim();
  const str2 = inputArr[1].trim();
  console.log(isAnagram(str1, str2));
}
