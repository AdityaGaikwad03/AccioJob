/* Sum of First N Natural Numbers
Write a program to calculate the sum of first 10 natural number.

Input Format
No input.

Output Format
Print the sum of first 10 natural number.

Example 1
Input

No input
Output

55
Explanation

1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
Constraints
None */




// Write your code here
const n = 10;
const sum = (n * (n + 1)) / 2;
console.log(sum);