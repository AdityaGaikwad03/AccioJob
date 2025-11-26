/* JS Math - 1
Implement the function round, which should take a number which can be a float(decimal) and return its result as an integer rounded of (Use JS In built functions)

Input Format
User Task: Function will take a float as input (can be negative or positive)

Output Format
Function will return a rounded off number

Example 1
Input

1.112
Output

 1
Explanation

float for 1.112 is 1

Example 2
Input

-0.66
Output

 -1
Explanation

float for -0.66 is -1

Constraints:
-10^6 <= n<= 10^6 (n will be float ) */


 function round(num) {
  return Math.round(num)
 }

const rl = require('readline')
 

 const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout
 })
 

 reader.on('line', (line) => {
  const n=parseFloat(line);

 ///console.log(n)

  
  console.log(round(n));
 

 })
