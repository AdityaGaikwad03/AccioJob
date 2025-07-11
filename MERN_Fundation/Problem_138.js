/* Print ACCIOJOB
Using recursion, your task is to print string ACCIOJOB, n times.

Input Format
First line contains integer n

Output Format
Print the string ACCIOJOB, n times.

Example 1
Input

3
Output

ACCIOJOB
ACCIOJOB
ACCIOJOB
Explanation:

As the value of n is 3 so, we get 3 times ACCIOJOB.

Example 2
Input

1
Output

ACCIOJOB
Explanation:

As the value of n is 1, so we get ACCIOJOB 1 times.

Constraints
1 <= n <= 104 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  solve(parseInt(n));
  readline.close();
});

function solve(n) {
  // Your code here
  if(n === 0){
    return;
  }
  console.log("ACCIOJOB");
  solve(n - 1)
}