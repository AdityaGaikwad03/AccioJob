/* 0-2-1 Sorting
You are given an array arr of size n that only consists of 0s 1s and 2s. Sort the array in such a way that it has all the 0s first then all the 2s and lastly all the 1s .

Input Format:
line 1: contains an integer n denoting number of elements of array.

line 2: contains n separated integers denoting elements of array.

Output Format:
Return the array such that it has all the 0s first then all the 2s and lastly all the 1s.

Example 1
Input

7
2 0 1 0 2 1 1
Output

0 0 2 2 1 1 1
Explanation

The required array consist of all the 0s followed by 2s and 1s.

Example 2
Input

5
0 1 0 1 1
Output

0 0 1 1 1 
Explanation

The required array consist of all the 0s followed 1s.

Constraints
0 <= n <= 10^6

0 <= arr[i] <= 2 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    let ans = Sorting021(n, arr);
    console.log(ans.join(' '));
    readline.close();
  });
});

function Sorting021(n, arr) {
  // Write your code here
  let count0 = 0, count1 = 0, count2 = 0;

  for (let num of arr) {
    if (num === 0) count0++;
    else if (num === 1) count1++;
    else if (num === 2) count2++;
  }
  return [
    ...Array(count0).fill(0),
    ...Array(count2).fill(2),
    ...Array(count1).fill(1)
  ];
}