/* Most occurred string
Given N strings of the same length, your task is to find the lexicographically largest string which has occurred mostly from the given strings.

Input Format
The first line of input contains a single integer N. The next N lines contain a single string each.

Output Format
Print the lexicographically largest string which has occurred mostly from the given strings.

Example 1
Input


4
ab
ab
ba
ba

 
 
Output

ba

Constraints:

1 <= N <= 100000

1 <= |S| <= 10

Note:- String will contain only lowercase english letters. */


function largestString(strings) {
    const freq = new Map();
  for (let str of strings) {
     freq.set(str, (freq.get(str) || 0) + 1);
   }
   let maxCount = 0;
   let result = "";
   for (let [str, count] of freq.entries()) {
     if (count > maxCount || (count === maxCount && str > result)) {
       maxCount = count;
       result = str;
     }
   }
   return result;
 }
 
 var readline = require("readline").createInterface(process.stdin);
 
 let inputArr = [];
 var lineNumber = -1;
 let strs=[];
 readline.on("line", readInputs);
 
 function readInputs(line) {
   inputArr.push(line);
   lineNumber++;
   if (lineNumber == 0) {
     size = parseInt(inputArr[0]);
   }
   
   if(lineNumber>0)strs.push(line);
   
   if (lineNumber ==  size) {
     logic("s");
     readline.close();
   }
 }
 
 function logic(input) {
     console.log(largestString(strs));
 }
 
 
 
 
 
 
 
 