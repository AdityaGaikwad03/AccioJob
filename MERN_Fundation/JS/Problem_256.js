/* Word Game
Sara is playing a word game with the following rules:-

The first letter of the word should be the same as the end letter of the previous word
All words should be unique
Given N words which Sara has spoken your task is check if Sara is going to win or lose.

Input Format
The first line of input contains a single integer N. The next N line contains a single string each.

Output Format
Print "WIN" if Sara is going to win else print "LOSE".

Example 1
Input

 4
 school
 letsgo
 over
 right
 
Output

WIN

Constraints:

1 <= N <= 10000

1 <= |S| <= 20

Note:- String will contain only lowercase english letters */

function checkWin( words) {
  let seen = new Set();
  for (let i = 0; i < words.length; i++) {
    if (seen.has(words[i])) {
      return "LOSE";
    }
    seen.add(words[i]);
    if (i > 0) {
      let prev = words[i - 1];
      let curr = words[i];

      if (prev[prev.length - 1] !== curr[0]) {
        return "LOSE";
      }
    }
  }
  return "WIN";
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
let strs=[];

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }
  if(lineNumber>0){
      strs.push(line);
  }
  
  if (lineNumber ==  size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  console.log(checkWin(strs));
}



