/* Word Reversals
Given a string, reverse each word in the sentence

Input Format
A string containing multiple words

Output Format
A string with all words reversed

Example 1
Input

Welcome to this Javascript Guide!

Output

emocleW ot siht tpircsavaJ !ediuG
Explanation

The first word is reversed from "Welcome" to "emocleW" and similarly all other wrods are reversed but the order of the words is same

Example 2
Input

Hello world
Output

olleH dlrow 

Explanation

Hello is reversed as olleH and world as dlrow

Constraints
1 <= |length of string| <= 10^5 */

function reverseWords(str) {
  // write code here
  // use console.log to print output\
  console.log(
    str
      .split(/\s+/)
      .map((w) => w.split("").reverse().join(""))
      .join(" ")
  );
}

/*Do not change the code below*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
let noGuessName = [];
rl.on("line", function (line) {
  reverseWords(line);
});
