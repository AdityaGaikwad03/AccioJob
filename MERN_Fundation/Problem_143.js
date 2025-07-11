/* Print Array Recursively
You are given an array arr of n elements, you are required to print all the n elements in a single line.

Note: Print the elements using a Recursive approach and not using loops(for, while, etc).

Input Format
First line contains an integer n which is the number of elements.

Second line contains n space separated integers.

Output Format
Print all the n elements space-separated in a single line

Example 1
Input

4
1 2 3 4
Output

1 2 3 4
Example 2
Input

5
3 6 5 7 2
Output

3 6 5 7 2
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
    printArray(arr, n);
    readline.close();
  });
});

function printArray(arr, n) {
  printArrayRecursive(arr, 0, n);
}

function printArrayRecursive(arr, i, n) {
  
	// Write your code here
	if(n === 0){
    return
  }
  process.stdout.write(arr[i] + ' ')
  printArrayRecursive(arr, i + 1, n - 1)
}