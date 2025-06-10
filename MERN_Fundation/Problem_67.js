/* Increase Integer by Five
Lily wants to enter a positive integer and increase its value by 5 using for loop.

She wants to increase the value in fun function & print the result in the caller function.

Help Lily by writing a program for the same.

Input Format
First line contains an integer n

Output Format
Output will be (n+5)

Example 1
Input

15
Output

20
Explanation

The value is increased by 5 so 15+5 becomes 20

Example 2
Input

10
Output

15
Explanation

The value is increased by 5 so 10+5 becomes 15

Constraints
1 <= n <= 10^9 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fun(n) {
  // write code here
  for(let i = 1; i <= 5; i++){
    n += 1;
  }
  return n;
}

rl.on('line', (n) => {
  let result = fun(parseInt(n));
  console.log(result);
  rl.close();
});