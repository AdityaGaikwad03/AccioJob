/* Most occurred string
Given N strings of the same length, your task is to find the lexicographically largest string which has occurred mostly from the given strings.

Note: - String will contain only lowercase english letters.

Input Format
The first line of input contains a single integer N. The next N lines contain a single string each.

Output Format
Output two integers the indices of the two elements. It is guaranteed that the ans will always exist

Example 1
Input

5
accio
job
accio
job
abcdef
Output

job

Explanation

'job' and 'accio' has occured 2 times but job is lexicographically greater so we return job
Constraints:
1 <= N <= 100000

1 <= |S| <= 10 */

function MostOccured(N, myArr) {
  const freq = {};
  let maxFreq = 0;
  let answer = "";
  for (let str of myArr) {
    freq[str] = (freq[str] || 0) + 1;
    if (
      freq[str] > maxFreq ||
      (freq[str] === maxFreq && str > answer)
    ) {
      maxFreq = freq[str];
      answer = str;
    }
  }
  return answer;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  } else if (lineNumber < size) {
  }

  //Exit Condition
  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = +inputArr[0];
  inputArr.shift();

  console.log(MostOccured(N, inputArr));
}


