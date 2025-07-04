/* Shuffle String
Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Print the shuffled string.

Input Format
Input consists of two lines.

First line contains an integer n.

Second line contains the string.

Last line contains the indices separated by space.

Output Format
Print the shuffled string.

Example 1
Input

8
acciojob
4 5 6 7 0 2 1 3
Output

ojobacci
Explanation

As the problem states "acciojob" becomes "ojobacci" after shuffling.

Example 2
Input

3
abc
0 1 2
Output

abc
Explanation

No shuffling is done here.

Constraints
1 <= n <= 500 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function shuffleString(indices, s) {
  // Write your code here and print output in this function
   let res = new Array(indices.length);
  for (let i = 0; i < indices.length; i++) {
    res[indices[i]] = s[i];
  }
  console.log(res.join(''));
}

readline.question('', n => {
  readline.question('', str => {
    readline.question('', arr => {
      arr = arr.split(' ').map(Number);
      shuffleString(arr, str);
      readline.close();
    });
  });
});