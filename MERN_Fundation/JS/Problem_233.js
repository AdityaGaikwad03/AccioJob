/* Implementing Quick Sort
Given an array A[] of size N, containing positive integers. You need to sort the elements of array using Quick Sort algorithm.

Note : Since this will be a functional problem, you don't have to take input.

Input Format
First line of the input denotes number of test cases T. First line of the testcase is the size of array N and second line consists of array elements separated by space.

User Task:

Since this is a functional problem you don't have to worry about the input. You just have to complete the function quickSort() which contains following arguments.

arr[]: input array

low: starting index of array

high: ending index of array

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

 Testcase 1: The array after perfoming quick sort: 1 3 4 7 9.
 Testcase 2: The array after performing quick sort: 1 2 3 4 5 6 7 8 9 10

Constraints:
1 <= T <= 1000

1 <= N <= 10^4

-10^5 <= A[i] <= 10^5

Sum of "N" over all test cases does not exceed 10^5 */


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
    console.log(PrintQuickSort(N, Arr).join(" ").trim());
  }
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

// Helper function
function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}


const PrintQuickSort = (n, arr) => {
  // do not modify this function
   quickSort(arr,0,n-1);
   return arr;
};
