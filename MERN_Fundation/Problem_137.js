/* Sum of natural numbers
Write a recursive program to find out the sum of all natural numbers till N. Take input of N from the user and make a recursive function that returns the sum of all the natural numbers upto N.

Input Format
First line is an integer N

Output Format
Print the sum of first N natural numbers.

Example 1
Input

5
Output

15
Explanation

Here, n = 5, so 1 + 2 + 3 + 4 + 5 = 15

Example 2
Input

1
Output

1
Explanation

Here n = 1, so 1 = 1

Constraints
1 <= N < = 10^3 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function NumberSum(N) {
  //Write your code here
  if(N === 1){
    return 1;
  }
 return N + NumberSum(N - 1);
}

readline.question('', N => {
  console.log(NumberSum(Number(N)));
  readline.close();
});