/* All substrings of a string
Given a string str, print all possible non-empty substrings of str, in order of occurrence in the string.

Input Formats
Input consists of a single line of string.

Output Format
Print all the substrings of a string in order of occurrence in the string in different lines.

Example 1
Input

abc
Output

a
ab
abc
b
bc
c
Explanation:

These are the possible non-empty substrings.

Example 2
Input

abcd
Output

a
ab
abc
abcd
b
bc
bcd
c
cd
d
Explanation:

These are the possible non-empty substrings.

Constraints
0 <= str.length() <= 280 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function SubString(str) {
  //Write code here
    let substrings = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.slice(i, j));
        }
    }
    substrings.forEach(sub => console.log(sub));
    return substrings;
}

rl.on('line', (str) => {
  SubString(str);
  rl.close();
});