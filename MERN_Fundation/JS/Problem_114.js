/* Reverse String Word Wise
You are given a string S containing several space-separated words. You need to reverse the order of appearence of the words.

NOTE

You need to complete the given function. The input and printing of output will be handled by the driver code.

Input Format:
The first line contains the number of test cases.

For each test case: The first line has the string S.

Output Format
For each test case return the new reversed string.

Example 1
Input

1
how are you
Output

you are how
Explanation

We reverse the order of appearence.

Example 2
Input

1
gear fifth
Output

fifth gear
Explanation

We reverse the order of appearence.

Constraints
1 <= T <= 10

1 <= |S| <= 10000 */


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let t = 0;
let testCases = [];

rl.on('line', function(line) {
  if (t === 0) {
    t = parseInt(line);
  } else {
    testCases.push(line);
    if (testCases.length === t) {
      rl.close();
    }
  }
}).on('close', function() {
  for (let i = 0; i < t; i++) {
    console.log(reverseWords(testCases[i]));
  }
  process.exit(0);
});

function reverseWords(s) {
  // your code here
  let words = s.split(' ').filter(word => word !== '');
  return words.reverse().join(' ');
}