/* No X
Given a string, compute recursively a new string where all the x chars have been removed.

Input Format
Only line contains the string S.

Output Format
Print the string with no x.

Example 1
Input

xaaax
Output

aaa
Explanation

Remove the x at the start and the end.

Example 2
Input

xaxb
Output

ab
Explanation

Remove the x at 0th and 2nd position.

Example 3
Input

xxx
Output

Explanation

Remove all the x so the string becomes empty.

Constraints
1 <= s.length() <= 10 ^ 4 */


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });
rl.on('line', (input) => {
  console.log(noX(input));
  rl.close();
  });
function noX(s) {
  // Write your code here
  if(s.length === 0){
    return '';
  }
  if(s[0] === 'x'){
    return noX(s.slice(1));
  }
  return s[0] + noX(s.slice(1))
}