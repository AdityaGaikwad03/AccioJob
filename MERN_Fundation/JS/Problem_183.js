/* Typing Mistake
In the fairyland, there are two kinds of keyboard layouts, T1 and T2. The keyboards are exactly similar except for the position of letters.

You are given two strings consisting of 26 distinct letters each: all keys of the first and the second layouts are same.

You are also given some text consisting of small and capital English letters and digits. It is known that it was typed in the first layout, but the writer intended to type it in the second layout. Print the text if the same keys were pressed in the second layout.

Since all keys but letters are the same in both layouts, the capitalization of the letters should remain the same, as well as all other characters.

(See Sample Test Case for better understanding)

Input Format
The first line contains a string of length 26 consisting of distinct lowercase English letters. This is the first layout.

The second line contains a string of length 26 consisting of distinct lowercase English letters. This is the second layout.

The third line contains a non-empty string s consisting of lowercase and uppercase English letters and digits. This is the text typed in the first layout.

Output Format
Print the text on pressing the keys from the second layout.

Example 1
Input


qwertyuiopasdfghjklzxcvbnm
veamhjsgqocnrbfxdtwkylupzi
FpcpEbb2019
 
Output

BoloApp2019

Explanation

 f->b
 p->o
 c->l
 e->a
 b->p
 by these operation modified string becomes BoloApp2019

Constraints:

1 <= |s| <= 500 */


function convertKeyboardLayout(t1, t2, text) {
  const map = {};
  for (let i = 0; i < 26; i++) {
    map[t1[i]] = t2[i];
  }
  let result = "";
  for (let ch of text) {
    if (/[a-z]/.test(ch)) {
      result += map[ch];
    } else if (/[A-Z]/.test(ch)) {
      const lower = ch.toLowerCase();
      result += map[lower].toUpperCase();
    } else {
      result += ch; 
    }
  }

  return result;
}

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
 
  if (lineNumber ==  2) {
    logic("s");
    readline.close();
  }
}
function logic(input) {
  //  let k=inputArr[0];
    let word1=inputArr[0];
    let word2=inputArr[1];
    let word3=inputArr[2];
    console.log(convertKeyboardLayout(word1, word2, word3));
    
}

