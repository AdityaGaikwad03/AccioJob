/* Ultra Fast Mathematician
Bob is given 2 numbers a and b, each of them contains only 0 and 1. Your task is to find a number c, such that if the ith digit of number a and b differ then the ith digit of c is 1, 0 in rest of the cases.

Input Format
The first line of input contains a number a.

The second line of input contains a number b.

Output Format
You need to find such a number c, such that if the ith character of a and b are different then the ith position of string c is 1, else 0 in any other case.

Example 1
Input

000
111
Output

111
Explanation

As the both the numbers have different digits in the ith position so the number c is 111.

Example 2
Input

01110
01100
Output

00010
Explanation

only the number at 4th position differs, so the number c has 4th digit as 1.

Constraints
1 <= a,b <= 10100

a,b - {0,1} */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

class Solution {
  solve(a, b) {
    let result = '';
    for (let i = 0; i < a.length; i++) {
      result += (a[i] === b[i]) ? '0' : '1';
    }
    console.log(result);
  }
}

rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) { // only run after reading both lines
    const solution = new Solution();
    solution.solve(input[0], input[1]);
    rl.close();
  }
});
