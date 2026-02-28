/* Date to String
The JS Date object has many useful properties.

Implement the function whichDay, which returns takes a Date object and returns a string like this "It is the first day of the week" depedning on dat object it will show return string which day of the week it is. (Use JS built in functions)

Note:- Sunday is "last" day of the week while rest all days are first, second, third, fourth, fifth and sixth day

Input Format
Function takes an argument date which is a Date object.

Output Format
Function returns a a string

Example 1
Input

2022 1 2

Output

Today is the third day of the week

Explanation

it is Wed Feb 02 2022 which means Wednesday is the thrd day of the week starting from Monday.

Constraints
1 <= Year <= 10^5

0 <= Month <=11 (0 repersents Jan)

1<= Day <=31 */

function whichDay(date) {
  // write code here
  // return the output , do not use console.log here
 const day = date.getDay();

  const map = {
    1: "first",
    2: "second",
    3: "third",
    4: "fourth",
    5: "fifth",
    6: "sixth",
    0: "last"
  };

  return `Today is the ${map[day]} day of the week`;

 }
const rl = require('readline')
 

 const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout
 })
 

 reader.on('line', (line) => {
  const [yyyy, mm, dd] = line.split(" ")
 

  const date = new Date(yyyy, mm, dd)
  const ans = whichDay(date)
  console.log(ans);
 

 })
