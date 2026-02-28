/* Sort Characters By Frequency
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return lexicographically largest of them.

Input Format
Input consists of a single line that has the string s.

Output Format
Return the sorted string. If there are multiple answers, return lexicographically largest of them.

Example 1
Input

tree
Output

eetr
Explanation

''e'' appears twice while ''r'' and ''t'' both appear once. So ''e'' must appear before both ''r'' and ''t''. ''t'' comes before ''r'' as we return the lexicographically largest string and ''r''<''t''

Example 2
Input

cccaaa
Output

cccaaa
Explanation

Both ''c'' and ''a'' appear three times, but ''c'' is larger so it comes before ''a'' and we return lexicographically larger string.

Note that "cacaca" is incorrect, as the same characters must be together.

Constraints
1 <= s.length <= 10^5

s contains lowercase English letters. */

function sortStringByFrequency(s) {
  const freq = {};
  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  const sortedChars = Object.keys(freq).sort((a, b) => {
    if (freq[b] !== freq[a]) {
      return freq[b] - freq[a];
    }
    return b.localeCompare(a);
  });
  let result = "";
  for (let ch of sortedChars) {
    result += ch.repeat(freq[ch]);
  }
  return result;
}


var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
 
  if (lineNumber ==  0) {
    logic("s");
    readline.close();
  }
}



function logic(input) {
    
    let word1=inputArr[0];
  
    console.log(sortStringByFrequency(word1));
    
}

