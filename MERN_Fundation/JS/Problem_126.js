/* Maximum Frequency Character
Given a string s containing lowercase alphabets, return the character with the highest occurrence in s.

If there are multiple such characters, then return the lexicographically smallest one of them.

Input Format
The only line of the input contains the string s.

Output Format
Print the maximal occurring character in the string s. If there are multiple, print the lexicographically minimum one.

Example 1
Input

abbbc
Output

b
Explanation

Here, a occurs 1 time, c occurs 1 time, and b occurs 3 times. Hence our answer for this is b.

Example 2
Input

aabbbccc
Output

b
Constraints
1 < s.length() < 100 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', s => {
  console.log(MaximumFrequencyChar(s));
  readline.close();
});

function MaximumFrequencyChar(s){
  let freq = {};

  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  let maxFreq = 0;
  let result = '';

  for (let ch in freq) {
    if (
      freq[ch] > maxFreq ||
      (freq[ch] === maxFreq && ch < result)
    ) {
      maxFreq = freq[ch];
      result = ch;
    }
  }
  return result
}

