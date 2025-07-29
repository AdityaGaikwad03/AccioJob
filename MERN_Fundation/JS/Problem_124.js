/* Word from Keyboard
You are given array of strings, you need to print words from that array which can be typed using only one row of Keyboard.

First row of keyboard = "qwertyuiop"

Second row of keyboard = "asdfghjkl"

Third row of keyboard = "zxcvbnm"

KeyBoard
Input Format
First line contains n number of strings in array

Next n lines contains strings denoting elements of array

Output Format
Print strings which can be formed using single row of keyboard in separate lines

Example 1
Input

2
glad
monkey
Output

glad
Explanation

glad can be formed only from the characters present in row 2

Example 2
Input

3
horse
peter
jass
Output

peter
jass
CONSTRAINTS
1 <= n <= 1000

1 <= |s| <= 100

Each string consist of lowercase english letter only. */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let arr = [];

readline.question('', num => {
  n = parseInt(num);
  readArray(0);
});

function readArray(i) {
  if(i < n) {
    readline.question('', word => {
      arr.push(word);
      readArray(i+1);
    });
  } else {
    let result = getStrings(arr);
    for(let i = 0; i < result.length; i++){
      console.log(result[i]);
    }
    readline.close();
  }
}

function getStrings(arr) {
   const row1 = new Set('qwertyuiop');
  const row2 = new Set('asdfghjkl');
  const row3 = new Set('zxcvbnm');

  const result = [];

  for (let word of arr) {
    const lowerWord = word.toLowerCase();

    if (
      isFromRow(lowerWord, row1) ||
      isFromRow(lowerWord, row2) ||
      isFromRow(lowerWord, row3)
    ) {
      result.push(word); // Keep original casing
    }
  }

  return result;
}

function isFromRow(word, rowSet) {
  for (let ch of word) {
    if (!rowSet.has(ch)) return false;
  }
  return true;
}
