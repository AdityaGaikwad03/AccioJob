/* Alphabet Coverage Check
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

Input Format
The first line inputs a string, S.

Output Format
In a new line, print "pangram" if string contains every letter of the alphabet else "not pangram".

Example 1
Input

We promptly judged antique ivory buckles for the next prize
Output

pangram
Explanation All of the letters of the alphabet are present in the string.

Example 2
Input

We promptly judged antique ivory buckles for the prize
Output

not pangram
Explanation

The string lacks an x.

Constraints:
0 < length of s <= 1000\

Each character of s, s[i]∈{a-z,A-Z,space} */


// your code here
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
 
  
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const str = (inputArr[0]);
  console.log(isPangram(str));
}

function isPangram(sentence) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  sentence = sentence.toLowerCase();
  for (let char of alphabet) {
    if (!sentence.includes(char)) {
      return "not pangram";
    }
  }
  return "pangram";
}

