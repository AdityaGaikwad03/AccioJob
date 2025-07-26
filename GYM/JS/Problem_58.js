/* Sum of several arrays
You will be given an array of several arrays that each contain integers and your goal is to write a function that will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]] then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22

Input Format
An array containing arrays that can contain any number of elements.

Output Format
Sum of all the elements in all of the arrays.

Example 1
Input

[[3, 2], [1], [4, 12]]
Output

22
Explanation

3 + 2 + 1 + 4 + 12 = 22

Constraints
1 <= n <= 10^5 */


function sum_array(arr) {
 // write code here
 // use console.log for displaying the output
 let sum = 0
 for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        sum += arr[i][j]
    }
 }
 console.log(sum)
}

const readline = require('readline');
 const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
 });
 

 rl.on('line', function(line){
  sum_array(JSON.parse(line))
  })


