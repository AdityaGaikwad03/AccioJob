/* Number of primes
Given a number n find the number of prime numbers less than equal to that number.

Input Format
There is only one integer containing value of n.

Output Format
Return number of primes less than or equal to n

Example 1
Input

5
Output

3
Explanation

2 3 and 5 are the required primes.

Example 1
Input

5000
Output

669
Explanation

There are 669 primes having value less than equal to 5000.

Constraints:
1 <= n <= 10000000 */

function PrimeUptoN(n) {
  // return the number of primes
  // do not console.log here
  if (n < 2) return 0;

  let isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) count++;
  }

  return count;

}


const rl = require('readline')


const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})


reader.on('line', (line) => {
  const n = parseInt(line);


  console.log(PrimeUptoN(n));


})

