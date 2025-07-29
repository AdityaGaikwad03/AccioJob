/* Group of Numbers
You are given an array a that contains N integers. All the integers in the array may not be distinct. The number of repetitions of each integer in the array is represented by ri. Your task is to print the integers in the decreasing order of their occurrence in the array.

Note

If ri > rj, then ai must be printed before aj.
If ri == rj, then among ai and aj whichever has a larger value, is printed first.
Here ri and rj is the number of repetitions of integers ai and aj in the array.

Input Format
The first line of the input contains an integer N. The second line contains N space- separated integers representing the elements of array a.

Output Format
Print the space separated integers in the decreasing order of their occurrence in the array. The output must be printed in a single line.

Example 1
Input

6
1 2 3 3 2 1
output

3 2 1
Explanation

 Explanation:


constraints
1<= N <= 1000

1<= ai <= 1000 */

function sortByFrequency(array) {
 // return an array
// do not console.log here
let freq = {};
for(let nums of array){
   freq[nums] = (freq[nums] || 0) + 1;
}
  let unique = [...new Set(array)];
  unique.sort((a, b) => {
      if (freq[a] !== freq[b]) {
          return freq[b] - freq[a]; 
      } else {
         return b - a; 
      }
  });
  return unique
}
/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var query = 100000;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }
  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let n = parseInt(inputArr[0].trim());
  //let str1 = inputArr[1].trim();
  let Arr = inputArr[1]
    .trim()
    .split(" ")
    .map((x) => parseInt(x));
  console.log(sortByFrequency(Arr).join(" "));
}
