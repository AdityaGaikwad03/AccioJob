/* Distinct Palindromic SubStrings
Given a string s, print all the substrings of s that are palindromic. Print all the required substrings in lexicographical order.

A substring is a subset or part of another string, or it is a contiguous sequence of characters within a string.

A lexicographic order is an arrangement of characters, words, or numbers in alphabetical order, that is, the letters are sorted from A-Z.

Input Format
First line contains a string s.

Output Format
Print various strings according to the question, each string should be in a new line

Example 1
Input

abc
Output

a
b
c
Example 2
Input

abccbc
Output

a
b
bccb
c
cbc
cc
Constraints
1 <= s.size() <= 1000 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (s) => {
  palindromeSubStrs(s);
  rl.close();
});

function palindromeSubStrs(s) {
  // Write your code here and print output in this function
  let palindromicSubstrings = new Set();

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substring = s.substring(i, j);
      if (isPalindrome(substring)) {
        palindromicSubstrings.add(substring);
      }
    }
  }

  let sortedSubstrings = Array.from(palindromicSubstrings).sort();
  console.log(sortedSubstrings.join('\n'));
}
function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s[left] !== s[right]) {
        return false;
        }
        left++;
        right--;
    }
    return true;
}

    