/* Bubble Sort (descending order)
Given an array, sort the array in reverse order by simply swapping its adjacent elements.

This is JS only question.

Input Format
First line of the input contains an integer, N, which denotes the length of the array. Next N inputs are elements of the array that is to be sorted in descending order.

Output Format
Output sorted array in descending order where each element is space separated.

Example 1
Input

 6
 3 1 2 7 9 87


Output

  87 9 7 3 2 1

Explanation

  87 9 7 3 2 1 is the array after sorting


Constraints:
1<=N<=1000

-10000<=Arr[i]<=100000 */


const BubbleSort=(Arr,N)=>{
  //return the sorted array
  //do not console.log here
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - i - 1; j++) {
      if (Arr[j] < Arr[j + 1]) {
        // Swap adjacent elements
        [Arr[j], Arr[j + 1]] = [Arr[j + 1], Arr[j]];
      }
    }
  }
  return Arr;
}



var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }
  //else if (lineNumber < size) {
  // }

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N=size;
  const Arr=inputArr[1].split(" ").map(x=>parseInt(x));
  console.log(BubbleSort(Arr,N).join(" ").trim());
}

