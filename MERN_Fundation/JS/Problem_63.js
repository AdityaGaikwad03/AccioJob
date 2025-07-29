/* Second Last Digit Zero Checker
Given a positive integer N. The task is to Create a function and return true or false according to the condition that whether zero is present at the second last place value or not.

You have to print the output in the calling function itself based on the boolean value you get in return from the function.

The output should be Yes or No.

Input Format
Input consists of a single line of integer n.

Output Format
Print Yes if the second last place value is 0 else No.

EXAMPLE 1
Input:

100
Output::

Yes
EXPLANATION:

0 is it's second last digit.

EXAMPLE 2
Input:

11
Output::

No
EXPLANATION:

1 is it's second last digit.

CONSTRAINTS
10 <= n <= 1000000 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  let res = determineSecondLastDigit(parseInt(n));
  if (res)
    console.log('Yes');
  else
    console.log('No');
  readline.close();
});

function determineSecondLastDigit(n) {
  // write code here
  let digit = 0;
    digit = Math.floor((n % 100) / 10);
    if(digit == 0){
      return 1; 
    }
    else{
      return 0;
    }
}