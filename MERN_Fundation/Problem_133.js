/* Recursive Multiplication
You are given two integers N and M. Calculate and return their multiplication using recursion.

You can only use subtraction and addition for your calculation. No other operators are allowed.

Note

Complete the given function. The input would be handled by the driver code. You only have to print the answer.

Input Format
The first line contains N.

The second line contains M.

Output Format
Print the product.

Example 1
Input

10
13
Output

130
Explanation

10 * 13 = 130

Example 2
Input

5
4
Output

20
Explanation

5 * 4 = 20.

Constraints
1 <= N, M <= 10000 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function multiplyRecursively(n, m) {
  //Write code here and print output
  if (m === 0){
    return;
  }
  function helper(a, b){
    if(b === 0) return 0;
    return a + helper(a, b - 1);
  }
  const result = helper(n, m);
  console.log(result)
}

readline.question('', n => {
  readline.question('', m => {
    multiplyRecursively(parseInt(n), parseInt(m));
    readline.close();
  });
});