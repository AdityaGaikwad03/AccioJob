/* Morse Convertor
Given a morse code, Your task is to figure out the exact words from it. Morse Code Dictionary : dict = {".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..", "L": "--", "M": "-.", "N": "---", "O": ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y", "--..": "Z"};


Input Format
The first line of the input contains the morse string.

Output Format
Print the English Alphabets from the given code

Example 1
Input

.... . .-.. .-.. --- .-- --- .-. .-.. -..
output

HELLOWORLD
Explanation

for the given morse the output is HELLOWORLD
constraints
1<= Total Words <= 1000 */

function decodeMorse(morseCode) {
 // return the decoded string
// do not console.log here
// Your code here
  const morseDict = {
    ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E",
    "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J",
    "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O",
    ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
    "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y",
    "--..": "Z"
  };

  let parts = morseCode.split(" ");
  let result = "";

  for (let code of parts) {
    if (morseDict[code]) {
      result += morseDict[code];
    }
  }
  return result;
}




/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    // size = parseInt(inputArr[0].trim());
  }
  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  console.log(decodeMorse(inputArr[0].trim()));
}
