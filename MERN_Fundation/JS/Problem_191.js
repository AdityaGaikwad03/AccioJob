/* String Sum
Given a number String S, Your task is to find the sum of the numbers.

Input Format
User Task: Since this will be a functional problem, you don't have to take input. You just have to complete the function Sum() that takes the String S as a parameter.

Note: - String will contain only numbers from 0-9.

Output Format
Return the sum of the string.

Example 1
Input

123

output

6

Explanation

1 + 2 + 3 = 6

constraints
1 <= |S| <= 1000 */

function StringSum(S){
  //return string Sum
   let total = 0;
    for (let i = 0; i < S.length; i++) {
        total += Number(S[i]); // convert each character to number and add
    }
    return total;
}


const rl = require('readline')
const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})
reader.on('line',(line)=>{
  let str = line;
  str=str.trim();
  console.log(StringSum(str));
})

