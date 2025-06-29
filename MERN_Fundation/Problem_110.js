/* Inverse Camel Case
One of the important aspect of object oriented programming is readability of the code. To enhance the readability of code, developers write function and variable names in Camel Case.

You are given a string S, written in Camel Case. Find All The Words Contained In It.

Note Complete the given function. The input would be handled by the driver code. You only have to print the answer.

Input Format
The only line contains the string S.

Output Format
Print each word in a new line

Example 1
Input

IAmAJavaProgrammer
Output

I
Am
A
Java
Programmer
Explanation

We separate each word and print them in a new line.

Example 2
Input

OnePiece
Output

One
Piece
Explanation

We separate each word and print them in a new line.

Constraints
1 <= |str| <= 10000 */


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (str) => {
  solution(str);
  rl.close();
});

function solution(str) {
   let result = [];
  let word = "";

  for (let ch of str) {
    if (ch === ch.toUpperCase() && word.length > 0) {
      result.push(word);
      word = ch;
    } else {
      word += ch;
    }
  }

  if (word.length > 0) {
    result.push(word);
  }

  result.forEach(w => console.log(w));
}