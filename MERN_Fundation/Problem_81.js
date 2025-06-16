/* Array Reversal
You are given an array arr of length n. You have to print the reversed array.

Input Format
The first line of input contains an integer n, size of the array.

The next line contains n space-separated integers denoting the elements of the array.

Output Format
Print n space separated integers denoting the reverse of the input array.

Example 1:
Input

4
1 3 5 7
Output

7 5 3 1
Explanation

We have array = [1 3 5 7].

Print the array from the ending. The reversed array is [7 5 3 1]

Example 2:
Input

7
0 0 1 1 0 2 3
Output

3 2 0 1 1 0 0
Explanation

The reversed array is [3 2 0 1 1 0 0].

Constraints
1 <= n <= 10^6

1 <= arr[i] <= 10^9 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let arr = [];

rl.on('line', (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    arr = input.split(' ').map(Number);
    reverseArray(arr, 0, n - 1);
    console.log(arr.join(' '));
    rl.close();
  }
});

function reverseArray(arr, start, end) {
  //Write code here
  while (start < end) {
    // Swap arr[start] and arr[end]
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}