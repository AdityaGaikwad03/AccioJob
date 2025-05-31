/* Subarray Problem 2
Given an array arr[] of size N. The user will take the elements of the array as input. Count the total number of subarrays of size 4 where all the elements are strictly increasing in order. Print 0 if there exist no such subarrays.

Input Format
First line consists of N which is the size of the array. Next line consists of N space separated integers.

Output Format
An integer that counts the number of subarrays with size 4, and strictly increasing elements

Example 1
Input

12
8 6 3 4 5 9 12 7 20 22 31 38
Output

4
Explanation The subarray {3 4 5 9}, {4 5 9 12}, {7 20 22 31} and {20 22 31 38} are of size 4 and has all the elements in strictly increasing order. Hence there are 4 such subarrays.

Example 2
Input

4
1 2 3 4
Output

1
Explanation The subarray { 1 2 3 4} is of size 1 and has all the elements in strictly increasing order. Hence there is 1 such subarrays.

Constraints
1<=N<=10^7

-10^5<=arr[i]<=10^5 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function solve(arr, n) {
  // Write your code here
  let count = 0;
  for(let i = 0; i <= n - 4; i++){
    if(arr[i] < arr[i + 1] && 
       arr[i + 1] < arr[i + 2] &&
       arr[i + 2] < arr[i + 3]){
      count++;
    }
  }
  console.log(count);
}

readline.question('', n => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    solve(arr, parseInt(n));
    readline.close();
  });
});