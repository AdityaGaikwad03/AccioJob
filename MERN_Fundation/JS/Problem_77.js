/* Plus Minus
Given an array arr of N integers, Calculate the ratios of its elements that are positive, negative, and zero to the array size N.

Print the decimal value of each fraction in a new line up to 6 decimal places.

Input Format
The first line contains an integer N, the size of the array.

The second line contains N space-separated integers representing the array arr.

Output Format
Print the 3 required ratios up to 6 decimal places.

Example 1
Input

6
-4 3 -9 -5 4 1
Output

0.500000
0.500000
0.000000
Explanation

There are 3 positive integers, 3 negative integers, and 0 zeroes in the array.

The ratio of occurrence is - Positive: 0.500000, Negative: 0.500000, and Zeroes: 0.000000

Example 2
Input

3
1 0 -1   
Output

0.333333
0.333333
0.333333
Explanation

There is 1 positive integer, 1 negative integer, and 1 zero in the array.

The ratio of occurrence is - Positive: 0.333333, Negative: 0.333333, and Zeroes: 0.333333

Constraints
1 <= n <= 10^6

-10^8 <= arr[i] <= 10^8 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    printRatios(arr);
    readline.close();
  });
});

function printRatios(arr) {
  let pos = 0, neg = 0, zero = 0;
  const n = arr.length;

  for (let num of arr) {
    if (num > 0) pos++;
    else if (num < 0) neg++;
    else zero++;
  }

  console.log((pos / n).toFixed(6));
  console.log((neg / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}
