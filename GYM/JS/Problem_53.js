/* Sum of Two Numbers
You are given two numbers a and b and your task is to make a third variable sum and assign the sum of a and b to this new variable.

Finally print sum.

Input Format
First line contains the number a

Second line contains the number b

Output Format
Complete the function sumOfTwoNumbers() that prints the required sum

Example 1
Input

6
4
Output

10
Explanation

Here a = 6, b = 4, so their sum is 10

Example 2
Input

10
20
Output

30
Constraints
1 <= a, b <= 106 */


function sumOfTwoNumbers(a, b) {
  //Write your code here
  
  let sum = a + b;
  console.log(sum)
}




/*Do not change the code below */
const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a, b;

reader.on("line", (line) => {
  if (!a) {
    a = parseInt(line);
  } else if (!b) {
    b = parseInt(line);
    sumOfTwoNumbers(a, b)
    reader.close();
  } else {
    // we already have both variables, do nothing
  }
});
