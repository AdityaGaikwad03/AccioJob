/* Digit, Symbol or Alphabet
You are given a character ch, your task is to print if this character ch is a digit(0 - 9), or an English Alphabet (a - z, A - Z) or a special symbol.

Print the required strings

Digit, if ch is a Number
Alphabet, if ch is an English Alphabet
Symbol, if ch is a Special Symbol
Input Format
First line contains the character ch.

Output Format
Print the required string in first line for each testcase.

Example 1
Input

9
Output

Digit
Example 2
Input

h
Output

Alphabet
Example 3
Input

;
Output

Symbol
Constraints
ch can be any ASCII character */

function solve(ch) {
  if (ch >= '0' && ch <= '9') {
    return "Digit";
  } 
  else if (
    (ch >= 'a' && ch <= 'z') ||
    (ch >= 'A' && ch <= 'Z')
  ) {
    return "Alphabet";
  } 
  else {
    return "Symbol";
  }
}

/* Do not change the code below  */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  let ch = input.trim();
  console.log(solve(ch)); // ✅ PRINT THE RESULT
  rl.close();
});
