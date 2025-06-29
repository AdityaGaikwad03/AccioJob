/* Camel Case
You are given a string consisting of different words separated by underscores _. You have to convert the string to camel case. The first letter of the entire case should be lowercase.

eg: app_dsd_sdda to appDsdSdda

Note:

StringBuilder in Java represents a mutable sequence of characters.

Input Format
The first line contains the number of test cases.

For each test case: The first line contains the string S.

Output Format
For each test case print the final formed string in a new line.

Example 1
Input:

1
abb_b_cc_d
Output:

abbBCcD
Explanation:

We remove the underscores and convert the next character to uppercase.

Example 2
Input:

1
how_are_you
Output:

howAreYou

Explanation:

We remove the underscores and convert the next character to uppercase.

Constraints
1 <= T <= 10

1 <= |S| <= 100000 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let t;

rl.on('line', (line) => {
  if (!t) {
    t = parseInt(line);
    return;
  }
  console.log(camelCase(line));
  t--;
  if (t === 0) {
    rl.close();
  }
});

function camelCase(s) {
  // your code here
  let pairs = s.split("_");
  let camelCase = pairs[0];
  for(let i = 1; i < pairs.length; i++){
    camelCase += pairs[i][0].toUpperCase() + pairs[i].slice(1); 
  }
  return camelCase
}