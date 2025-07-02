/* Palindrome String
Given a string str, determine if it is a palindrome, considering only alphabetic characters and ignoring the upper or lower case. Return 0 if it is not a palindrome, else return 1.

Input Format
Input consists of one line

The first line given is a string str.

Output Format
Returns 0 if it is not a palindrome, else return 1 if it is a palindrome

Example 1
Input

race a car
Output

0
Explanation

Not a palindrome because 'race a car' doesnt not read the same when read from right side till the middle because of the 'a' from a and the 'e' from race.

Example 2
Input

a man, a plan, a canal Panama
Output

1
Explanation

It is a palindrome. Because 'a man, a plan, a canal Panama' reads the same if read from right side till the middle.

Constraints
1 <= str.length <= 10000 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (str) => {
  console.log(isPalindrome(str));
  rl.close();
});

function isPalindrome(str) {
  // Keep only alphabetic characters and convert to lowercase
  let cleanStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char.toLowerCase() !== char.toUpperCase()) { // is alphabetic
      cleanStr += char.toLowerCase();
    }
  }

  // Compare with its reverse
  let reversed = '';
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversed += cleanStr[i];
  }

  return cleanStr === reversed ? 1 : 0;
}
