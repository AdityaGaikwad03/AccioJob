/* AS Basic DataTypes 2
Write a JavaScript function named printCount that takes three integer arguments (a, b, c). The function should determine how many of the input integers are negative and return this count. If none of the numbers are negative, the function should return 0. You will receive the input as a string of three numbers separated by a space, which you should split and convert into integers.

Please note the following constraints: -10^6 <= a, b, c <= 10^6.

Input Format
First line contains input of a, b, c separated by a space.

You need to complete printCount function which contains 3 integers and then and return return the result

Output Format
First line contains total count of negative numbers out of the three input numbers (a,b,c)

Example 1
Input

2 3 -10
Output

1
Explanation

There is only 1 negative number i.e. -10 , so count is 1.

Example 2
Input

7 -20 -16
Output

2
Explanation

There are two negative numbersM : -20 & -16 , so count is 2.

Constraints
-10^6<=a<=10^6
-10^6<=b<=10^6
-10^6<=c<=10^6 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function printCount(a, b, c) {
  // Write your code here
  let count = 0;
  if(a < 0) count++;
  if(b < 0) count++;
  if(c < 0) count++;
  return count;
}

readline.question('', (input) => {
  const [a, b, c] = input.split(' ').map(Number);
  console.log(printCount(a, b, c));
  readline.close();
});