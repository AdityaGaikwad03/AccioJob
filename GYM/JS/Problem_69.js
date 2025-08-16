/* Distinct char
Given a string S find the length of the longest substring of S with all distinct characters.

Input Format
First line of input contains S

Output Format
Output a single integer, the length of the longest substring of S with all distinct characters.

Example 1
Input


aab
 
Output

2

Example 2
Input

icpcprog

Output

5

Explanation:

Example 1: Longest substring with all distinct characters is ab.

Constraints:

1 <= |S| <= 100000 */


function findLongestSubstring(s) {
   let n = s.length;
    let seen = new Map();  // character -> last index
    let left = 0, maxLen = 0;

    for (let right = 0; right < n; right++) {
        let ch = s[right];

        // If char already seen in window, move left pointer
        if (seen.has(ch) && seen.get(ch) >= left) {
            left = seen.get(ch) + 1;
        }

        seen.set(ch, right); // update last seen index
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
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
  
    console.log(findLongestSubstring(word1));
    
}

