/* Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. Your task is to print the number of distinct ways you can climb to the top.

Input Format
The only line of input contains an integer n.

Output Format
The only line of output contains an integer denoting the distinct ways can you climb to the top.

Example 1
Input

2
Output

2
Explanation

There are two ways to climb to the top.

1 step + 1 step

2 steps

Example 2
Input

3
Output

3
Explanation

There are three ways to climb to the top.

1 step + 1 step + 1 step
1 step + 2 steps
2 steps + 1 step
Constraints
1 <= n <= 45 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function climbingStairs(n) {
  // Write your code here
  if (n <= 2) return n;
  let prev2 = 1; 
  let prev1 = 2;
  for (let i = 3; i <= n; i++) {
    let curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

readline.question('', n => {
  console.log(climbingStairs(Number(n)));
  readline.close();
});