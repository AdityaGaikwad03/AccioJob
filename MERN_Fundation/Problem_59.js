/* Prime Numbers Range
Given an integer n, print all prime numbers between 1 and n (both inclusive).

Example:

If n = 8, your program should output all prime numbers between 1 and 8. Thus, it should output:

2
3
5
7
Input Format
The first line of the input contains one integer n.

Output Format
Your code should output all integers between 1 and n that are prime (both inclusive).

Example 1
Input:

8
Output:

2
3
5
7
Example 2
Input:

13
Output:

2
3
5
7
11
13
Constraints
1 <= n <= 10^5 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', input => {
  const end = parseInt(input)

  for (let num = 1; num <= end; num++) {
    if (isPrime(num)) {
      console.log(num + ' ');
    }
  }

  process.stdout.write('\n');
  readline.close();
});

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
