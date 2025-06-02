/* Character Case Identifier
You are required to take input of a character from the user. The task is to print the following

1, if the character is a uppercase alphabet(A to Z)

0, if the character is a lowercase alphabet(a to z)

-1, if the character is not an alphabet

Input Format
First line contains a character

Output Format
One line output of either 1 or 0 or -1 according to the conditions mentioned in the question

Example 1
Input

B
Output

1
Explanation

'B' is an uppercase alphabet.

Example 2
Input

i
Output

0
Explanation

'i' is a lowercase alphabet.

Constraints
User can input any one character. */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', ch => {
  // Your code here
 let c = ch.trim();

  if (c.length !== 1) {
    console.log(-1); // Not a single character
  } else if (c >= 'A' && c <= 'Z') {
    console.log(1); // Uppercase
  } else if (c >= 'a' && c <= 'z') {
    console.log(0); // Lowercase
  } else {
    console.log(-1); // Not an alphabet
  }
  readline.close();
});