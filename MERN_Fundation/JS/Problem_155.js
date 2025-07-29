/* Count X in a string
Count recursively the total number of character x that appear in the given string.

Input Format
Only line contains the string in which we have to count character x.

Output Format
Print the number of x in string in a single line.

Example 1
Input

abcxxabc
Output

2 
Explanation

2 'x' are there in the given string.

Example 2
Input

addthe
Output

0
Explanation

No x is there in the given string.

Constraints
1 <= Len(str) <= 1000
string contains lowercase letter only. */


const readline = require('readline');
   const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
     });
   rl.on('line', (input) => {
     console.log(countX(input, 0, input.length));
     rl.close();
     });

function countX(s, count, n){
  if (s.length === 0) {
    return count;
  }
  if (s[0] === 'x') {
    return countX(s.slice(1), count + 1);
  } else {
    return countX(s.slice(1), count);
  }
}