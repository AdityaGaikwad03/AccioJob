/* Closure Multiplication
Complete the "mul" function which will properly return answer by performing multiplication when invoked as below syntax.

Ex: - mul(2)(3)(4) - > 24

Note :- Consider the first element to start from 1.

Input Format
Your function will be run by giving 3 numbers in this format

mul(1)(5)(2)

Output Format
Number resulting multiplication of 3 input numbers

Example 1
Input

 1 5 2

Output

  10

Explanation

  1*5*2 = 10
 
Constraints:
0 <= a,b,c <= 100000 */



// here arguments are not passed.
// in the function mul try to pass arguments accordingly.
function mul(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };

}


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  let [a, b, c] = line.split(" ").map((x) => +x);
  console.log(mul(a)(b)(c));
});

