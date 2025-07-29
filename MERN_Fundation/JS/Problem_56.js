/* Diamond Pattern
Given an integer N, print a diamond full of stars * with height equal to N.

Note It is given that N is odd.

Input Format
The first line contains the number of test cases.

For each test case: The first line contains an integer N denoting the height of the pyramid.

Output Format
For each test case print the required pattern.

Example 1
Input

1
5
Output


Explanation

The required diamond of height 5 has been returned.

Example 2
Input

1
3
Output


Explanation

The required diamond of height 3 has been returned.

Constraints
1 <= T <= 10

1 <= N <= 100

N is odd. */


const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let inputLines = [];
rl.on('line', line => inputLines.push(line.trim())).on('close', () => {
  let t = parseInt(inputLines[0]);
  let idx = 1;

  while (t > 0) {
    let n = parseInt(inputLines[idx++]);

    let x = Math.floor(n / 2) + 1;
    let cnt = 1;

    // Upper half
    for (let i = 1; i <= x; i++) {
      process.stdout.write('  '.repeat(x - i));
      for (let j = 1; j <= cnt; j++) {
        process.stdout.write('* ');
      }
      cnt += 2;
      process.stdout.write('\n');
    }

    cnt -= 4;

    // Lower half
    for (let i = 1; i < x; i++) {
      process.stdout.write('  '.repeat(i));
      for (let j = 1; j <= cnt; j++) {
        process.stdout.write('* ');
      }
      cnt -= 2;
      process.stdout.write('\n');
    }

    t--;
  }
});
