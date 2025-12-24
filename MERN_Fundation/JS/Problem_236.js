/* Print Counts
You are given a string (STR) of length N, consisting of only the lower case English alphabet. you have to print the count of all alphabet.(using maps) in alphabetical order.

Input: abcadeecfb

Input Format
There is only one string containing lower case English alphabet.

Output Format
Return String after removing the Duplicates.

Example 1
Input

abcadeecfb
Output

a = 2
b = 2
c = 2
d = 1
e = 2
f = 1
Explanation

a occurs 2 times b occurs 2 times c occurs 2 times d,e,f occurs one time.
Constraints:
1 <= length of the string <=100000 */

const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  PrintCharFreq(line.trim());
  reader.close();
});

function PrintCharFreq(myStr) {
  const map = new Map();

  // Count frequency
  for (let ch of myStr) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  // Sort only present characters
  const keys = Array.from(map.keys()).sort();

  // Print result
  for (let key of keys) {
    console.log(`${key} = ${map.get(key)}`);
  }
}
