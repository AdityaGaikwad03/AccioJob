/* Prime Factors
Complete the funciton primeFactors which returns array of prime factors of given number n in ascending order.

Input Format
Input consists of single line which has the integer n.

Output Format
print prime factorisation of n in a single line in space separated manner.

Example 1
Input

15
Output

3 5
Explanation

3,5 are the prime factors of 15. 3*5 =15.

Example 2
Input

24
Output

2 2 2 3
Explanation

2 * 2 * 2 * 3= 24.

Constraints
1 <= n <= 10^9 */

function primeFactors(n) {
   let result = [];
  while (n % 2 === 0) {
    result.push(2);
    n = n / 2;
  }
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      result.push(i);
      n = n / i;
    }
  }
  if (n > 2) {
    result.push(n);
  }

  return result;
}
/* Do not change the code below  */

const rl = require("readline");
const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line1) {
  const primeFactorsArray = primeFactors(parseInt(line1));
  let output = "";
  for (let i = 0; i < primeFactorsArray.length; i++) {
    output = output + primeFactorsArray[i] + " ";
  }
  console.log(output);
  reader.close();
});
