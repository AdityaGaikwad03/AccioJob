/* Caesar''s Cipher
Write a JavaScript function that takes a string and a shift value and returns the Caesar''s Cipher of the string. The function should preserve whitespace and non-alphabetic characters. For example, if the input string is "hello world" and the shift value is 3, the output should be "khoor zruog".

Input Format
The first line is the string, str that is going to be encrypted. The second line is the shift value.

Output Format
For each test case, print the encrypted string.

Examples
Example 1
Input
hello world
3
Output
khoor zruog
Example 2
Input
hi mom
4
Output
lm qsq */

function caesarsCipher(str, shift) {
  shift = shift % 26;
  let result = "";

  for (let ch of str) {
    if (ch >= 'a' && ch <= 'z') {
      let code = ch.charCodeAt(0) - 97;
      let newChar = String.fromCharCode((code + shift) % 26 + 97);
      result += newChar;
    }
    else if (ch >= 'A' && ch <= 'Z') {
      let code = ch.charCodeAt(0) - 65;
      let newChar = String.fromCharCode((code + shift) % 26 + 65);
      result += newChar;
    }
    else {
      result += ch;
    }
  }
  return result;
}


const readline = require("readline");

const input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (cmd) {
  input.push(cmd);
});

rl.on("close", function (cmd) {
  Main(input);
});

function Main(input) {
  const str = input[0];
  const shift = input[1];
  const cipher = caesarsCipher(str, shift);
  console.log(cipher);
}
