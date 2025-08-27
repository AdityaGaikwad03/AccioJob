/* Simple Numbers
You are given a number N. If any digit from 1 to 9 occurs consecutive for more than or equal to 3 times, this number is awesome. Example: 12333, 211115, 555 are awesome numbers while 11211, 3456 are not. A number which is not awesome is considered good.

You are given a number N, find out whether it is awesome or good.

Input Format
The first and the only line of input contains the number N.

Output Format
Output "Awesome", if the number is awesome, else output "Good".

Example 1
Input

12333

output

Awesome
Input

11211


output

Good
Explanation

In the first number, 3 occurs consecutively 3 times while in the second
number, no digit appears 3 or more times consecutively.
constraints
100 <= N <= 1000000000 (10^9) */


function isAwesome(n) {
  const str = n.toString();
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== '0' && str[i] === str[i - 1]) {
      count++;
      if (count >= 3) {
        return "Awesome";
      }
    } else {
      count = 1; // reset if different digit OR zero
    }
  }

  return "Good";
}


/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let str = parseInt(inputArr[0].trim());
  console.log(isAwesome(str));
}
