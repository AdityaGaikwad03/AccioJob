/* The Rotation Policy
English Team has now adopted a rotation policy for two of their players: Dom and Leach. On the first day, both of them played but, from the second day onwards, Dom plays every second day, while Leach plays every third day.

For example, on:

Day 1 - Both the players play,

Day 2 - Neither of them play,

Day 3 - Only Dom plays,

Day 4 - Only Leach plays,

Day 5 - Only Dom plays,

Day 6 - Neither of them play,

Day 7 - Both the players play.. and so on.

Find the number of days in the interval [A, B] (A and B, both inclusive) when neither Dom nor Leach plays.

Input Format
User Task:

Since this will be a functional problem, you don't have to take input. You just have to complete the function RotationPolicy() that takes integers A, and B as arguments.

Output Format
Return the number of days when neither of the two players played the game.

Example 1
Input

3 8


output

2

Explanation

on day 6 and day 8 neither of the plays.

constraints
1 <= A, B <=100000 */


function RotationPolicy(A,B) {
  // write code here
  // do no console.log the answer
  // return the output using return keyword
  let count = 0;

  for (let day = A; day <= B; day++) {
    const domPlays = day % 2 === 1;      // Dom plays on odd days
    const leachPlays = day % 3 === 1;    // Leach plays on days 1,4,7,...

    if (!domPlays && !leachPlays) {
      count++;
    }
  }

  return count;
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
  // if (lineNumber == 0) {
  //   size = parseInt(inputArr[0]);
  // }
  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const [n1, n2] = inputArr[0].split(" ").map((x) => parseInt(x));
  console.log(RotationPolicy(n1, n2));
}
