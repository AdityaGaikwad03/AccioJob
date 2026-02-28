/* SQUID GAMES II - Marbles
You are Player-50 and your opponent is Player-218. You will be given N marbles and each will have a number written on it. But, before this, you along with your opponent are asked to decide a game. So, you come up with a game that goes as follows: Both of you will take turns, with you starting first. On each turn, the player removes any marble from the given marbles. The player who removes a marble loses if the sum of the values of all removed marbles is divisible by 3. But if there are no remaining marbles, then Player 218 wins(even if it was your turn). Since none of you wants to die, players play mindfully. Given a function that should return true if you win and false if Player 218 wins. But, there is some logical error. Fix the bug…

Note: - String will contain only lowercase english letters.

Input Format
First-line contains an integer t - the number of test cases.

Each of the next pair of lines is as follows:

First-line contains an integer N - number of marbles.
Second-line has space-separated integers which are the numbers written on marbles.
Output Format
For each test case, the output should be

1 - if you win
0 - if you lose (i.e. Player-218 wins) ### Example 1
Input

1
5
2 3 5 1 4
Output

0

Explanation


Player-218 will always win. One possible way for Player-218 to win is shown below:

 Turn 1: You can remove the marble with value 1. Sum of removed marbles = 1.

 Turn 2: Player-218 can remove the marble with value 3. Sum of removed marbles = 1+3 = 4.

 Turn 3: You can remove the marble with value 4. Sum of removed marbles = 1+3+4 = 8.

 Turn 4: Player-218 can remove the marble with value 2. Sum of removed marbles = 1+3+4+2 = 10.

 Turn 5: You can remove the marble with a value of 5. Sum of removed marbles = 1+3+4+2+5 = 15.

 15 is divisible by 3, hence you lose.

Constraints:
1 <= N <= 100

0 <= marble’s value <= 100 */

function SquidGameII(n, Arr) {
  let c0 = 0, c1 = 0, c2 = 0;

  for (let num of Arr) {
    let r = num % 3;
    if (r === 0) c0++;
    else if (r === 1) c1++;
    else c2++;
  }

  if (c0 % 2 === 0) {
    return (c1 > 0 && c2 > 0);
  } else {
    return Math.abs(c1 - c2) > 2;
  }
}
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
let x = 0;
//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);

  lineNumber++;

  if (lineNumber === 0) {
    size = parseInt(inputArr[0]);
    
  } else if (lineNumber < size) {
    
  }

  //Exit Condition
  if (lineNumber == size * 2) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  for (let i = 1; i < inputArr.length - 1; i += 2) {
    const N = inputArr[i];
    let myArr = inputArr[i + 1].split(" ").map((x) => +x);

    // console.log(N,myArr);
    if (SquidGameII(N, myArr)) {
      console.log(1);
    } else {
      console.log(0);
    }
    // i=i+N+1;
  }
}

