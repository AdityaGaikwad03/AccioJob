/* Sum of Two Integers
Write a program in which user will enter two positive integers and those two integers will be passed to another function fun.

The fun function will perform the addition of the two and will print the output.

Note that, output will be printed inside fun function.

Input Format
First line contains two integers n and m.

Output Format
Print the sum of two integers.

Example 1
Input

2 3
Output

5
Explanation sum of two numbers is printed which for 2 and 3 is 5

Example 2
Input

1 4
Output

5
Explanation sum of two numbers is printed which for 1 and 4 is 5

Constraints
-1000 <= n, m <= 1000 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function fun(n, m) {
  // write code here
  console.log(n + m);
}

readline.question('', (input) => {
  const [n, m] = input.split(' ').map(Number);
  fun(n, m);
  readline.close();
});