/* Armstrong Numbers in Range
You are given two numbers m and n, you are required to print all the Armstrong Numbers between m and n (both inclusive).

Armstrong Numbers are numbers those have the sum of their own digits raised to the power number of digits equals the number itself. Eg. 153 = 13 + 53 + 33, so 153 is an Armstrong number.

Input Format
First line contains two integers m and n

Output Format
Print all the Armstrong numbers between m and n in a single line with space   in between.

Example 1
Input

0 160
Output

0 1 2 3 4 5 6 7 8 9 153
Constraints
0 <= m <= n <= 105 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', (line) => {
  let [m, n] = line.split(' ').map(Number);

  for (let num = m; num <= n; num++) {
    let temp = num;
    let digits = [];
    if (temp === 0) digits.push(0); // handle 0 as special case
    while (temp > 0) {
      digits.push(temp % 10);
      temp = Math.floor(temp / 10);
    }
    let power = digits.length;
    let sum = 0;
    for (let d of digits) {
      let powered = 1;
      for (let i = 0; i < power; i++) {
        powered *= d;
      }
      sum += powered;
    }
    if (sum === num) {
      console.log(num);
    }
  }

  readline.close();
});
