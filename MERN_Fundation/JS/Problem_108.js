/* Good Strings
You are given a set 'S' of distinct characters. You are also given an array 'A' of 'N' strings.

A String in array 'A' is called good if all the characters of the string is present in the set 'S'.

You have to find how many strings in the array 'A' are good.

Input Format
The first line contains the number of test cases.

For each test case: The first line contains a string denoting the characters of the set 'S'.

The next line contains 'N', the number of strings in 'A'.

The next 'N' lines contains a string each, which are the elements of the array 'A'.

Output Format
For each test case print the count of good strings in a new line.

Example 1
Input:

1
abc
4
ab
abd
cacb
cabef
Output:

2
Explanation:

Only 'ab' and 'cacb' are good strings. Rest of the strings contain characters apart from 'abc'.

Example 2
Input:

1
pq
3
pqqqpp
abc
rst
Output:

1
Explanation:

Only 'pqqqpp' is a good string.

Constraints
1 <= T <= 10

1 <= |S| <= 26

1 <= N <= 1000

1 <= |A[i]| <= 1000 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  let t = Number(input.shift());
  while (t-- > 0) {
    let s = input.shift();
    let n = Number(input.shift());
    let A = [];
    for (let i = 0; i < n; i++) {
      A.push(input.shift());
    }
    console.log(goodStrings(s, A, n));
  }
});

function goodStrings(s, A, n) {
  // your code here
   let allowedSet = new Set(s.split(''));
  let count = 0;

  for (let i = 0; i < n; i++) {
    let isGood = true;
    for (let ch of A[i]) {
      if (!allowedSet.has(ch)) {
        isGood = false;
        break;
      }
    }
    if (isGood) count++;
  }

  return count;
}