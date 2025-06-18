/* Find Geometric Triplets
Write a program to print all the triplets that form a geometric progression. All the elements of the array are in increasing order of their value.

Input Format
Input consists of two lines.

First line contains an integer N denoting size of array

Second line contains N integers denoting the array elements separated by single space

Output Format
Print all the triplets that form a geometric progression, each in a new line. Print each geometric triplet in lexicographic form i.e. if a set of triplet has a lesser value at the same position compared to some other triplet then it has to be printed before the latter one.

Example 1
Input

6
1 2 6 10 18 54
Output

2 6 18 
6 18 54
Example 2
Input

8
2 8 10 15 16 30 32 64
Output

2 8 32
8 16 32
16 32 64
Constraints
1 <= arr.size() <= 10 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function findGeometricTriplets(arr, n) {
  // Write code here
   n = Number(n);
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[j] * arr[j] === arr[i] * arr[k]) {
          console.log(`${arr[i]} ${arr[j]} ${arr[k]}`);
        }
      }
    }
  }
}

readline.question('', N => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    findGeometricTriplets(arr, N);
    readline.close();
  });
});