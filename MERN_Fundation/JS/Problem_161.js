/* Implementing Selection Sort
Given an array arr of size n, containing positive integers. You need to sort the elements of array using the Selection Sort algorithm.

Input Format
First line contains an integer n which is the size of array arr

Second line contains n space separated integers of arr

Output Format
Return the sorted array

Example 1
Input

5
4 1 3 9 7
Output

1 3 4 7 9
Explanation

The array after performing Selection sort: 1 3 4 7 9.

Example 2
Input

10
10 9 8 7 6 5 4 3 2 1
Output

1 2 3 4 5 6 7 8 9 10
Constraints
1 <= n <= 104

-106 <= A[i] <= 106 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function selectionSort(arr) {
  // Write your code here
  let n = arr.length;
  for(let i = 0; i < n - 1; i++){
    let minIdx = i;
    for(let j = i + 1; j < n; j++){
      if(arr[j] < arr[minIdx]){
        minIdx = j;
      }
    }
    if(minIdx != i){
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }
  return arr;
}

readline.question('', n => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    let ans = selectionSort(arr);
    console.log(ans.join(' '));
    readline.close();
  });
});