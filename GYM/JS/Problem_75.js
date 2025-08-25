/* JS Date - 1
Unix time is a system for describing a point in time. It is the number of seconds that have elapsed since the Unix epoch, excluding leap seconds. The Unix epoch is 00:00:00 UTC on 1 January 1970

Implement the function msSinceEpoch, which returns milliseconds since Unix epoch. (Use JS built in functions)

Input Format
Function takes no argument

Output Format
Function returns a number */

function msSinceEpoch() {
  // write code here
  // return the output , do not use console.log here
  return Date.now();
 }

const rl = require('readline')
 

 const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout
 })
 

 reader.on('line', (line) => {
  const [line1, ch, hc] = line.split(",")
 

  const start = Date.now()
  const ans = msSinceEpoch()
  console.log((start - 100 < ans) && (ans < start+500));
 

 })

 