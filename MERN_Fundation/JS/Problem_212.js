/* JS Promise me - 1
Complete the function promiseMe Such that it takes a number as first arguement(time) and a string as second argument(data). It returns a promise which resolves after time milliseconds and data is returned.

Note:- You only have to implement the function, in the example it shows your implemented question will be ran.

Input Format
Function should take number as first argument and data to be returned as second.

Output Format
Resolves to the data given as input

Example 1
Input


200 hi

Output

hi

Explanation

you need to return whatever input given to you after the timeout ie 'hi' in this case.
Constraints:
1<= number <= 20000

second arguement only contains lowecase letters. */

function promiseMe(number, dat) {
  
  // return the output using return keyword
  // do not console.log it
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dat);
    }, number);
  });

 }
const readline = require('readline');
 const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
 });
 

 rl.on('line', function (line) {
  const args = line.split(" ")
  const num = parseInt(args[0], 10)
  const op = args[1]
 

  let start = Date.now()
 

  promiseMe(num,op).then((dat)=>{
  let end = Date.now()
  console.log(num< end-start < num + 200, dat==op);
  rl.close()
  })
 })

 