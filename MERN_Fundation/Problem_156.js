/* Countabc
Count recursively the total number of "abc" and "aba" substrings that appear in the given string.

countAbc("abc") → 1

countAbc("abcxxabc") → 2

countAbc("abaxxaba") → 2

Input Format
Only line contains the string in which we have to count "abc" and "aba".

Output Format
Print the number of "abc" and "aba" in string.

Example 1
Input

abcxxabc
Output

2
Explanation

There are 2 abc from 0 -> 2 and from 5 -> 7

Example 2
Input

abaxxaba
Output

2
Explanation

There are 2 aba from 0 -> 2 and from 5 -> 7

Constraints
1 <= s.size() <= 1000 */


const readline = require('readline');
   const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
     });
   rl.on('line', (input) => {
     console.log(CountABC(input, 0));
     rl.close();
     });

function CountABC(s, count) {
  if (s.length < 3) return count;

  const sub = s.slice(0, 3);
  if (sub === "abc" || sub === "aba") {
    return CountABC(s.slice(1), count + 1);
  } else {
    return CountABC(s.slice(1), count);
  }
}