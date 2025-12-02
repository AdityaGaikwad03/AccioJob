/* Make it small
Given two strings S and T of the same length, you can rearrange the characters in S and T. Your task is to find if it is possible to rearrange S and T such that S is lexicographically smaller than T.

Input Format
The first line of input contains the string S. The next line of input contains the string T.

Output Format
Print "YES" if it is possible to rearrange S and T such that S is lexicographically smaller than T else print "NO".

Example 1
Input

efgh
abcd
output

NO
Explanation

The smallest charcter present in S is greater than the greatest in T (e and d).
So it is not possible. 
constraints
1 <= |S| = |T| <= 100000

Note:- Both the string will contain only lowercase english letters. */


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

class Solution {
  solve(S, T) {
    const s = S.split("").sort().join("");
    const t = T.split("").sort().reverse().join("");
    return s < t ? "YES" : "NO";
  }
}

rl.on("line", (input) => {
  lines.push(input.trim());
  
  if (lines.length === 2) {       // Wait for BOTH S and T
    const solution = new Solution();
    console.log(solution.solve(lines[0], lines[1]));
    rl.close();
  }
});
