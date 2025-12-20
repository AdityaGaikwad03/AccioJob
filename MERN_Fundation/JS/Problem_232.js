/* Longest Palindromic Substring
You are given a string (STR) of length N.

Your task is to find the longest palindromic substring. If there is more than one palindromic substring with the maximum length, print the one with the smaller start index.

Note: A substring is a contiguous segment of a string.

For Example : The longest palindromic substring of "ababc" is "aba", since "aba" is a palindrome and it is the longest substring of length 3 which is a palindrome. There is another palindromic substring of length 3 is "bab". Since starting index of "aba" is less than "bab", so "aba" is the answer.

Input Format:
The first line of input contains a single integer 'T', representing the number of test cases or queries to be run.
Then the 'T' test cases follow.
The first and only one of each test case contains a string (STR).
Output Format :
For every test case, print a single line containing the longest palindromic substring.
If there are multiple possible answers then you need to print the substring which has the lowest starting index.
Follow up: Try to solve it using O(1) space complexity.

Example 1:
Input

1  
abccbc
Output :

bccb
Explanation :

For string "abccbc" there are multiple palindromic substrings like "a", "b", "c", "cc", "bccb", "cbc". But "bccb" is of the longest length. Thus, answer is "bccb".

Example 2:
Input

1  
aeiou
Output :

a
Explanation :

For string "aeiou" there are multiple palindromic substrings like "a", "e", "I", "o", "u", and all of the same length. But palindromic substring "a" has the minimum starting index. Thus, the answer is "a".

Constraints :
1 <= T <= 10
0 <= N <= 10^3
where 'T' is the number of test cases, 'N' is the length of the given string.
Time Limit: 1 sec */


// your code here
function longestPalindromicSubstring(str) {
  let start = 0, maxLen = 0;

  function expand(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      let len = right - left + 1;
      if (len > maxLen) {
        maxLen = len;
        start = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    expand(i, i);       // Odd length
    expand(i, i + 1);   // Even length
  }

  return str.substring(start, start + maxLen);
}

// Input handling
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
readline.on("line", line => input.push(line.trim()));
readline.on("close", () => {
  let t = parseInt(input[0]);
  let idx = 1;

  while (t--) {
    let s = input[idx++];
    console.log(longestPalindromicSubstring(s));
  }
});
