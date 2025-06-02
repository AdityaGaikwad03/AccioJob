/* Reverse Integer Digits
Write a program that prompts the user to input an integer and then outputs the number with the digits reversed.

For example, if the input is 12345, the output should be 54321.

Note: Input number will not have any trailing zeros.

Input Format
The first line of input contains the integer n.

Output Format
The output should be the reverse of n.

Example 1
Input

12345
Output:

54321
Example 2
Input

143323
Output

323341
Constraints
1 <= n <= 10^9

n will not have any trailing zeros. */





const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  //Write your code here
 let reversed = 0;

  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  console.log(reversed);
  readline.close();
});