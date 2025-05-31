/* Oddball Sum
Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements. Try to solve with and without reduce function.

Input Format
An array containing numbers

Output Format
Sum of all the odd numbers in that array

Example 1
Input

1 3 5 4
Output

9
Explanation

1+3+5=9

Constraints
1 <= n <= 10^5 */



function oddball_sum(nums){
 // write code here
 // use console.log to display the output 
// do not return here
let sum = 0;
  for (let num of nums) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }
  console.log(sum)
}

/*Do not change the code below*/

const readline = require('readline');
 const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
 });
 let noGuessName = []
 rl.on('line', function(line){
  noGuessName= line.split(" ").map(a=>parseInt(a))
  oddball_sum(noGuessName)
  })
