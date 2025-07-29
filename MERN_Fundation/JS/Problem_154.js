/* String Palindrome
A string is said to be a palindrome if it is the same if we start reading it from left to right or right to left. So given a string str, determine whether it is a palindrome or not.

Input Format
The first line of input contains string str.

Output Format
Print YES or NO.

EXAMPLE 1
Input

abba
Output

YES
Explanation

abba is a palindromic string.

Example 2
Input

geeks
Output

NO
Explanation

geeks is not a palindromic string.

Constraints
0 <= |str| <=10000 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });
rl.on('line', (input) => {
  const result = isPalindrome(input);
  console.log(result ? 'YES' : 'NO');
  rl.close();
  });
function isPalindrome(str) {
  // Write your code here
  function check(left, right) {
    if (left >= right) return true;
    if (str[left] !== str[right]) return false;
    return check(left + 1, right - 1);
  }

  return check(0, str.length - 1);

}