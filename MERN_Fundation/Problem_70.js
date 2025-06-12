/* Consecutive Pair Sum
Karan has an array arr and an integer k. He wants to find out the number of consecutive pairs of array elements whose sum will be k.

Write a program to count the number of consecutive pairs.

Note that, if arr[5]={1,2,3,4,5} then consecutive pairs are (1,2),(2,3),(3,4),(4,5).

Input Format
The first line contains n, the size of the array, and a positive integer k.

The second line contains n elements of the array.

Output Format
Return the number of consecutive pairs whose sum will be equal to k.

Example 1
Input

4 3
1 2 4 3
Output

1
Explanation

The number of pairs is 1 (1,2).

Example 2
Input

3 10
4 6 4
Output

2
Explanation

The number of pairs is 2 (4,6) and (6,4).

Constraints
1 <= N <= 10000

1 <= K <= 100000000

1 <= A[i] <= 10000 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function ArrayProblem(arr, k) {
  // Write code here
  let count = 0;
  for(let i = 0; i <= arr.length; i++){
    let sum = arr[i] + arr[i+1];
    if(sum == k){
      count++;
    }

  }
  return count;
}

readline.question('', (input) => {
  const [n, k] = input.split(' ').map(Number);
  readline.question('', (input) => {
    const arr = input.split(' ').map(Number);
    console.log(ArrayProblem(arr, k));
    readline.close();
  });
});