/* ASCII string
You are given a string str that contains only lowercase alphabets.

You have to form a string that contains the difference of ASCII values of every two consecutive characters between those characters.

Note Complete the given function. The input and output would be handled by the driver code.

Input Format
The only line contains the string str.

Output Format
Print the new string.

Example 1
Input

abecd
Output

a1b3e-2c1d
Explanation

'b' - 'a' = 1
'e' - 'b' = 3
'c' - 'e' = -2
'd' - 'c' = 1
Example 2
Input

abc
Output

a1b1c
Explanation

'b' - 'a' = 1
'c' - 'b' = 1
Constraints
1 <= |str| <= 1000 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (str) => {
   console.log(asciiString(str));
  rl.close();
});

function asciiString(str) {
  let result = str[0]; 
  for (let i = 1; i < str.length; i++) {
    let diff = str.charCodeAt(i) - str.charCodeAt(i - 1);
    result += diff + str[i];  
  }
  return result;
}