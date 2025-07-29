/* Last Occurence Index
You are given an array A of size N with possibly duplicate elements. Your task is to find the index of last occurence of an element T in the given array. Also, return -1 if the element is not present.

You have to complete lastIndex function which contains array A , integers T (target) and startIndex as inputs and returns the last index of occurence as integer output

Input Format
First line represents size of the array i.e. N

Second line represents n-spaced array elements of the array.

Third line represents element T for which we have to find the last index of occurence.

Output Format
Print the integer value i.e. last index of occurence of the element.

Example 1
Input

6
8 9 4 1 1 2
1
Output

4
Explanation

1 is present twice in the input array and the last time it appears is at index 4.

Example 2
Input

8
6 2 5 9 1 4 5 5 
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

readline.question('', N => {
  readline.question('', A => {
    readline.question('', T => {
      const arr = A.split(' ').map(Number);
      console.log(lastIndex(arr, Number(T), Number(N)-1));
      readline.close();
    });
  });
});

function lastIndex(A, T, startIndex) {
  //Write your code here
  if(startIndex < 0){
    return -1;
  }
  if(A[startIndex] === T){
    return startIndex
  }
  return lastIndex(A, T, startIndex - 1)
}