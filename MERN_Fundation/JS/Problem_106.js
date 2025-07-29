/* Simple Strings
You are given three string A, B, C consisting of only characters ''a'', ''b'' and ''c''. You need to follow the given procedure:

-> Initially start with string A.

-> At each turn, if the current string contains atleast 1 character, remove the first character. Now if the removed character is a, turn goes to string A. Similarly b -> B, and c -> C.

-> If the current string has no character, output the string name.

Note: The length of the strings maybe different

See sample for better understanding.

Input Format
The input consists of 3 lines containing strings A, B, C.

Output Format
Output a single character A or B or C.

Example 1
Input

 aca
 accc
 ca

 
Output

A

Explanation:

Initially its turn of string A. Its first character is a, ''a'' gets removed from the string. The turn goes to A. Now its first character is ''c'', ''c'' gets removed from the string. The turn goes to C. Now its first character is ''c'', ''c'' gets removed from the string. The turn goes to C. Now its first character is ''a'', ''a'' gets removed from the string. The turn goes to A. Now its first character is ''a'', ''a'' gets removed from the string. The turn goes to A.

Since string A is empty, the answer is A.

Constraints:

1 <= |A|, |B|, |C| <= 1000 */


function findString(A, B, C) {
  let map = {
    'a': A.split(''),
    'b': B.split(''),
    'c': C.split('')
  };
  let turn = 'a';
  while (true) {
    if (map[turn].length === 0) {
      return turn.toUpperCase();
    }
    let next = map[turn].shift();
    turn = next;
  }
}

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
let lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber === 2) {
    logic();
    readline.close();
  }
}

function logic() {
  let word1 = inputArr[0].trim();
  let word2 = inputArr[1].trim();
  let word3 = inputArr[2].trim();
  console.log(findString(word1, word2, word3));
}
