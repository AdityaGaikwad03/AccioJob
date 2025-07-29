/* Print n times
Write a recursive program to print the word "AccioSchool" N times. Take an integer input, N, from the user and create a recursive function to print "AccioSchool" N times.

Input Format
A single line containing the integer N

Output Format
Print the word "AccioSchool" N number of times, each time in the next line.

Example 1
Input

5
Output

AccioSchool
AccioSchool
AccioSchool
AccioSchool
AccioSchool
Explanation

We print AccioSchool 5 times.

Example 2
Input

3
Output

AccioSchool
AccioSchool
AccioSchool
Explanation

We print AccioSchool 3 times.

Constraints
1 <= |N| <= 10^4 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printWord(N) {
  // Write your code here
  if(N === 0){
    return
  }
  console.log("AccioSchool")
  printWord(N - 1)
}

rl.on('line', (N) => {
  printWord(parseInt(N));
  rl.close();
});