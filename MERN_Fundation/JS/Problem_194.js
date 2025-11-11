/* Implementing Insertion Sort
Given an array A[] of size N, containing positive integers. You need to sort the elements of array using Insertion sort algorithm.

Note : Since this will be a functional problem, you don't have to take input.

Input Format
First line of the input denotes number of test cases T. First line of the testcase is the size of array N and second line consists of array elements separated by space.

Output Format
You need to return the sorted array. The driver code will print the array in sorted form.

Example 1
Input

2
5
4 1 3 9 7
10
10 9 8 7 6 5 4 3 2 1
 


Output

 1 3 4 7 9
 1 2 3 4 5 6 7 8 9 10

Explanation

 Testcase 1: The array after perfoming insertion sort: 1 3 4 7 9.
 Testcase 2: The array after performing insertion sort: 1 2 3 4 5 6 7 8 9 10

Constraints:
1 <= T <= 100

1 <= N <= 10^3

-10^3<= A[i] <= 10^3 */

const InsertionSort = (n, arr) => {
//return the sorted array
//do not console.log here
for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements greater than key one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};




var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }

  if (lineNumber == 2 * size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const T = size;
  for (let i = 1; i <= T * 2; i = i = i + 2) {
    let N = parseInt(inputArr[i]);
    let Arr = inputArr[i + 1].split(" ").map((x) => parseInt(x));
    console.log(InsertionSort(N, Arr).join(" ").trim());
  }
}

