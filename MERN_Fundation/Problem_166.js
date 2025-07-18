/* Iterative Insertion Sort
In Insertion Sort Part 1, you inserted one element into an array at its correct sorted position. Using the same approach repeatedly, can you sort an entire array?

Guideline: You already can place an element into a sorted array. How can you use that code to build up a sorted array, one element at a time? Note that in the first step, when you consider an array with just the first element, it is already sorted since there is nothing to compare it to.

In this challenge, print the array after each iteration of the insertion sort, i.e., whenever the next element has been inserted at its correct position. Since the array composed of just the first element is already sorted, begin printing after placing the second element.

Input Format
The first line contains an integer n,the size of the arr.

The next line contains n spaced integers arr[i].

Output Format
Print the entire array on a new line at every iteration.

Example
Input

6
1 4 3 5 6 2
Output

1 4 3 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 2 3 4 5 6 
Explanation

Skip testing 1 against itself at position 0. It is sorted.

Test position 1 against position 0:4>1, no more to check, no change.

Print arr

Test position 2 against positions 1 and 0:

3<4 new position may be 1.Keep checking.

3>1 so insert 3 at position 1 and move others to the right.

Print arr

Test position 3 against positions 2,1,0 (as necessary): no change.

Print arr

Test position 4 against positions 3,2,1,0: no change.

Print arr

Test position 4 against positions 4,3,2,1,0, insert 2 at position 1 and move others to the right.

Print arr
Constraints
 1<=n<=1000
 
 -10000<=arr[i]<=10000, 0<=<n */

 const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let arr = [];

readline.question('', num => {
  n = parseInt(num);
  readline.on('line', (line) => {
    arr = line.split(' ').map(Number);
    insertionSort(arr, n);
    readline.close();
  });
});

function insertionSort(arr, n) {
 // Write your code here
 n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    console.log(arr.join(' '));
  }
}