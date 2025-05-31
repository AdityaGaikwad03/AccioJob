/* Number Comparison
You are provided with a number n.
Your task is to return a string according to the following conditions:
If the number is greater than 1, then return You entered more
If the number is less than or equal to 1 then return You entered less

Input Format
First line contains a positive integer n.

Output Format
Return the output as per instruction in the input.

Example 1
Input:
1
Output:
You entered less
Explanation
Since 1 = 1, you entered less is printed.

Example 2
Input
5
Output
You entered more
Explanation
Since 5 > 1, you entered more is printed.

Constraints:
-10^5<=n<=10^5 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  // write code here
  n = Number(n);
  if(n <= 1){
    console.log("You entered less");
  }
  else{
    console.log("You entered more");
  }
  readline.close();
});