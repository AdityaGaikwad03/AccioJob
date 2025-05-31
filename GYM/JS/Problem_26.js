/* Multiple
Given an Array A of size N. For each index i you have to tell the count of numbers which have index greater than i and are multiples of A[i].

Input
The first line of the input should contains an integer N ,length of Array.
Next line contains N integers which are elements of Array

Output
Print the list which contains the answer for each person ith integer.

Example 1
Input:
3
1 2 3
Output:
2 0 0 
Explaination:
2,3 are multiple of 1
Example 2
Input:
4
2 4 6 12
Output:
3 1 1 0
Constraints:
1<=N<=1000
1<=A[i]<=10^6 */



const Multiple = (N, Arr) => {
  // return the answer as an array
  let res = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if(Arr[j] % Arr[i] === 0) {
        res[i]++;
      }
    }
  }

  return res;
};

/*Do Not Change anything below*/
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  } else if (lineNumber < size) {
  }

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = parseInt(inputArr[0]);
  inputArr.shift();
  const Arr = inputArr[0].split(" ").map((x) => +x);

  console.log(Multiple(N, Arr).join(" "));
}
