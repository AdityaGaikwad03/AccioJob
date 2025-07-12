/* Sum of Array elements using recursion
Given an array of integers, find sum of array elements using recursion.

Input Format
Input consists of a 2 lines.

First line contains n.

Second line contains n spaced integers.

Output Format
Return the sum of array elements.

EXAMPLE 1
Input:

4
1 2 3 4
Output::

10
EXPLANATION:

1 + 2 + 3 + 4 = 10

EXAMPLE 2
Input:

3
1 3 3
Output::

7
EXPLANATION:

1 + 3 + 3 = 7.

CONSTRAINTS
1 <= n <= 10^5

-10^4 <= arr[i] <= 10^4 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    console.log(sumofArrayRec(arr, arr.length));
    readline.close();
  });
});

function sumofArrayRec(arr, n) {
	
	//  Write your code here
	// Return your answer. Do not print anything here
	if( n === 0){
    return 0;
  } 
  if (n === 0) return 0;
  return arr[n - 1] + sumofArrayRec(arr, n - 1);
}