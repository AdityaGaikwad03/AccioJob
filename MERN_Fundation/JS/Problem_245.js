/* Sum of Prime
Given a number (greater than 2), print two prime numbers whose sum will be equal to given number, else print -1 if no such number exists.

NOTE: A solution will always exist if the number is even. Read Goldbach’s conjecture.

If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, and a < c then print [a, b] only and not all possible solutions.

Input Format
The first line contains an integer T, depicting total number of test cases. Then following T lines contains an integer N.

Output Format
Print the two prime numbers in a single line with space in between if exist else print -1.

Example 1
Input


2
8
3

Output

3 5
-1

Explanation


 Testcase 1: 3+5=8 and 3,5 are prime numbers.

 Testcase 2: Not possible

Constraints:

1 ≤ T ≤ 100

2 ≤ N ≤ 1000000 */

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimeSum(n) {
  if (n % 2 !== 0) {
    if (isPrime(n - 2)) {
      return [2, n - 2];
    }
    return [-1];
  }
  for (let i = 2; i <= n / 2; i++) {
    if (isPrime(i) && isPrime(n - i)) {
      return [i, n - i];
    }
  }

  return [-1];
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }
  
  if (lineNumber ==  size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const T = size;
  for (let i = 1; i <= T; i = i+1) {
  
  let N=parseInt(inputArr[i]);
  
    console.log(findPrimeSum(N).join(" "));
  }
}

