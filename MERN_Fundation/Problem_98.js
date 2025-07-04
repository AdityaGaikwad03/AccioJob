/* Count words in a given string
You are given a string containing some space-separated words. You need to count the number of words in the string.

NOTE

You need to complete the given function. The input and printing of output will be handled by the driver code.

Input Format
The first line contains the number of test cases.

For each test case: The first line has the string S.

Output Format
For each test case return the number of words.

Example 1
Input:

1
this is a sample string
Output

5
Explanation

There are five words which are 'this' , 'is' , 'a' , 'sample' , 'string'.

Example 2
Input

1
gear five
Output

2
Explanation

The two words that are present here are 'gear', and 'five'.

Constraints:
1 <= T <= 10
1 <= |S| <= 10000 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (t) => {
  t = Number(t);
  let count = 0;
  rl.on('line', (input) => {
    if(count < t) {
      console.log(countWords(input));
      count++;
    }
    if(count === t) {
      rl.close();
    }
  });
});

function countWords(s) {
  // your code here
  const words = s.trim().split(/\s+/);
const wordCount = words.length;

return wordCount 
}