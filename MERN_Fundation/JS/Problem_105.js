/* Distinct alphabets
Given a string. Find out the distinct alphabets and the number of times they occur .

Input Format
The input contains a single string S.

Output Format
Print 26 space separated numbers that denote the number of occurrences of each character from 'a' to 'z'.

Example 1
Input

 stole now noch 


Output

 0 0 1 0 1 0 0 1 0 0 0 1 0 2 3 0 0 0 1 1 0 0 1 0 0 0

Explanation

occurrences of each character.

Constraints:
1 <= |S| <= 100000 */

function Alphabets(str) {
  let count = new Array(26).fill(0)
  for(let i = 0; i < str.length; i++){
    let ch = str[i]
    if(ch >= 'a' && ch <= 'z'){
      let index = ch.charCodeAt(0) - 'a'.charCodeAt(0)
      count[index]++
    } else if(ch >= 'A' && ch <= 'A'){
        let index = ch.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)
        count[index]++
    }
  }
  return count.join(" ")
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  let str = line;
  //str = str.replace(/\\n/g, " ");

  console.log(Alphabets(str));
});
