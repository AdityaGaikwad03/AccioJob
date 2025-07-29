/* Check whether Array is a Palindrome using Recursion
Given an array arr of length n, you have to find whether the given array is a palindrome using recursion.

Note: A palindrome is an array which reads the same both forwards and backwards.

Input Format
First line consists of an integer n, the number of elements in the array

Second line consists of n spaced inetegrs, representing the array arr.

Output Format
Print true if the array is a palindrome else print false.

Example 1
Input

4
4 3 2 10
Output

false
Explanation

Backwards, it reads 10, 2, 3, 4 which is not the same

Example 2
Input

5
1 2 3 2 1
Output

true
Explanation

Backwards it reads 1, 2, 3, 2 1 which is the same.

Constraints
1 <= n <= 10^3

-10^4 <= arr[i] <= 10^4 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    console.log(isPalindrome(arr, n));
    readline.close();
  });
});

function isPalindrome(arr, n) {
  let res = isPalindromic(arr, 0, n - 1);
  if (res === 1)
    return true;
  return false;
}

function isPalindromic(arr, begin, end) {
  if (begin >= end) return 1;
  if (arr[begin] !== arr[end]) return 0;
  return isPalindromic(arr, begin + 1, end - 1);
}