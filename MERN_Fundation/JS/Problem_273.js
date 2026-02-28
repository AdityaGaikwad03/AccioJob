/* Selection Sort
Implement Selection Sort on a given array, and make it sorted.

Input Format
First line of the input contains an integer, N, which denotes the length of the array. Next N inputs are elements of the array that is to be sorted in ascending order.

Output Format
Sorted output where each element is space separated

Example 1
Input

5
1 2 7 3 4
Output

1 2 3 4 7

Example 2
Input

5
5 4 -1 2 1
Output

-1 1 2 4 5

Constraints:

1<=N<=1000

-10000<=Arr[i]<=10000 */

function selectionSort(arr) {
  // do not console.log here
// return the array
 let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}


/*do not change the code below*/
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
 

    let Arr = inputArr[1].split(" ").map((x) => parseInt(x));

    console.log(selectionSort(Arr));
  }



