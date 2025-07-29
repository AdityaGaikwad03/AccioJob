/* First Occurence Index
You are given an array A of size N with possibly duplicate elements. Your task is to find the index of first occurence of an element T in the given array. Also, return -1 if the element is not present.

You have to complete firstIndex function which contains array A , integers T (target) and startIndex as inputs and returns the first index of occurence as integer output

Input Format
First line represents size of the array i.e. N

Second line represents n-spaced array elements of the array.

Third line represents element T for which we have to find the first index of occurence.

Output Format
Print the integer value i.e. first index of occurence of the element.

Example 1
Input

6
5 6 4 6 1 2
6
Output

1
Explanation

6 is present twice in the input array and the first time it appears is at index 1.

Example 2
Input

8
3 9 2 6 1 4 2 1 
7
Output

-1
Explanation

7 is not present in the array so the output is -1.

Constraints
0 <= N <= 10^5

-10^9 <= A[i] <= 10^9

-10^9 <= T <= 10^9 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.question('', (n) => {
  input.push(n);
  readline.question('', (arrLine) => {
    input.push(arrLine);
    readline.question('', (t) => {
      input.push(t);
      const N = parseInt(input[0]);
      const A = input[1].split(' ').map(Number);
      const T = parseInt(input[2]);

      console.log(firstIndex(A, T, 0));
      readline.close();
    });
  });
});

function firstIndex(A, T, startIndex) {
  if (startIndex === A.length) return -1;
  if (A[startIndex] === T) return startIndex;
  return firstIndex(A, T, startIndex + 1);
}
