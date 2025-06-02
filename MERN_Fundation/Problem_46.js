/* Palindrome Number Checker
Given a number N, you need to check whether the given number is Palindrome or not. A number is said to be Palindrome when it reads the same from backward as forward.

Input
The line inputs N.

Output
You need to print "true" if the number is palindrome otherwise "false" (without quotes).

Example 1
Input

5
Output

true 
Example 2
Input

121
Output

true 
Constraints:
1 <= N <= 9999 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', input => {
  let n = parseInt(input.trim());  // convert input to number
  let rev = 0;
  let temp = n;  // store original number to compare later

  while (temp !== 0) {
    rev = rev * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  if (rev === n) {
    console.log("true");
  } else {
    console.log("false");
  }

  readline.close();
});
