/* Compressed Strings
You are given a string 'S'. You need to compress it using the following algorithms:

Take an empty string res. For every block of consecutive repeating character, do the following:

If the size of block is 1, concatenate it to the end of `S`.
Else, concatenate the character followed by the size of the block.

Return res after completing the above operations on the whole string

Note

StringBuilder in Java represents a mutable sequence of characters.

Input Format
The first line contains the number of test cases.

For each test case: The first line contains the string 'S'

Output Format
For each test case return the string res. Input and output is inbuilt.

Example 1
Input:

1
abbbccd
Output:

ab3c2d
Explanation:

a occurs once, so, we add a to res.

Then, b is repeated 3 times so, b3 is added.

Then, c is repeated 2 times so, c2 is added.

d occurs once, so, we add d to res.

Example 2
Input:

1
aabccc
Output:

a2bc3
Explanation:

a is repeated 2 times so, a2 is added.

b occurs once, so, we add b to res.

Then, c is repeated 3 times so, c3 is added.

Constraints
1 <= T <= 10
1 <= |S| <= 100000 */


var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
let strs=[];
let q

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  
  if(lineNumber==0){
      q=parseInt(line);
      
  }
  if(lineNumber>0){
      strs.push(line);
      q--;
  }
  
  if(q==0){
       logic("s");
    readline.close();
  }
}

function logic(input) {
 
 
 
  for(let i=0;i<strs.length;i++){
	  console.log(compressString(strs[i]));
  }
    
  
}
function compressString(S) {
     let res = "";
  let count = 1;

  for (let i = 1; i <= S.length; i++) {
    if (S[i] === S[i - 1]) {
      count++;
    } else {
      res += S[i - 1];
      if (count > 1) {
        res += count;
      }
      count = 1;
    }
  }

  return res;
}
