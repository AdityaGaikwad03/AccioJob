/* Find Indices
Given an array arr of size N and an integer X. The task is to find all the indices of the integer X in the array recursively and print them.

Input Format
The first line of input is the size of array N and an integer X denoting the number whose indices need to be printed. the second line consists of N integers separated by space denoting array arr.

Output Format
print the indices where X is there in array in order

Example
Input

6 2
1 2 3 2 3 5
Output

1 3
Explanation

2 is present on index 1 and index 3 in the provided array

Constraints
1 <= N <= 1000
1 <= X <= 1000
-10^6 <= arr[i] <= 10^6 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', input => {
  const inputs = input.split(' ');
  const n = parseInt(inputs[0]);
  const x = parseInt(inputs[1]);
  readline.question('', arrayInput => {
    const arr = arrayInput.split(' ').map(Number);
    findX(arr, n, x);
    readline.close();
  });
});

function findX(arr, n, x) {
  // write code here
   function helper(i) {
    if (i === n) return;
    if (arr[i] === x) {
      process.stdout.write(i + ' ');
    }
    helper(i + 1);
  }

  helper(0);
}
