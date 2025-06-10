/* Calculate nPr
Given 2 numbers n and r. Your task is to calculate nPr n!/(n-r)!.

Input Format
The first line of Input contains a single integer n.

The second line of input contains a single integer r.

Output Format
Return the value of nPr.

Example 1
Input

5
2
Output

20
Explanation

The value of 5! is 120 and 3! is 6, 120/6 = 20.

Example 2
Input

3
3
Output

6
Explanation

The value of 3! is 6, and 0! is 1.

Constraints
1 <= n <= 10

1 <= r <= n */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', r => {
    console.log(solve(parseInt(n), parseInt(r)));
    readline.close();
  });
});

function solve(n, r) {
  // Your code here
  if (r > n) return 0;

  let a = fact(n);
  // let b = fact(r);
  let c = fact(n - r);
  let npr = a / c;
  return npr;
}

function fact(num) {
  let f = 1;
  for (let i = 1; i <= num; i++) {
    f *= i;
  }
  return f;
}