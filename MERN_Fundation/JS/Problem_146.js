/* Print Reverse Array Recursively
You are given an array arr of n elements, you are required to print all the n elements but in a reverse order, in a single line.

Note: Print the elements using a Recursive approach and not using loops(for, while, etc).

Input Format
First line contains an integer n which is the number of elements.

Second line contains n space separated integers.

Output Format
Print all the n elements but in reverse space-separated in a single line

Example 1
Input

4
1 2 3 4
Output

4 3 2 1
Example 2
Input

5
4 7 1 3 2
Output

2 3 1 7 4
Constraints
1 <= n <= 1000

0 <= arr[i] <= 1000 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    printReverseArray(arr, n);
    readline.close();
  });
});

function printReverseArray(arr, n) {
  printReverseArrayRecursive(arr, 0, n);
}

function printReverseArrayRecursive(arr, i, n) {
  
	// Write your code here
		if(n === 0){
    return
  }
  printReverseArrayRecursive(arr, i + 1, n - 1)
  process.stdout.write(arr[i] + ' ')
}