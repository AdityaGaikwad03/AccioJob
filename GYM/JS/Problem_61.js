/* JS callbacks
Complete the function callThisFnBack Such that it takes a number as first arguement and a function (callback function) as an argument and returns the result of the callback function with its argument as the first argument to the callThisFnBack.

Input Format
Function will take two arguments, one which is a number and second which will be a function.

Output Format
Returns the result of the second argument which is a function that is ran with the first argument.

Example 1
Input


5 +

Output

10

Explanation

for '+' function returns 5+5=10

Constraints:
1 <= number <= 100000 */


function callThisFnBack(number, fn) {
  // return the output using return keyword
  // do not console.log it
  return fn(number);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  const args = line.split(" ");
  const num = parseInt(args[0], 10);
  const op = args[1];

  switch (op) {
    case "+":
      console.log(
        callThisFnBack(num, (mun) => {
          return mun + mun;
        })
      );
      break;
    case "-":
      console.log(callThisFnBack(num, (mun) => mun - mun));
      break;
    case "*":
      console.log(callThisFnBack(num, (mun) => mun * mun));
      break;

    case "/":
      console.log(callThisFnBack(num, (mun) => mun / mun));
      break;

    default:
      break;
  }
});


