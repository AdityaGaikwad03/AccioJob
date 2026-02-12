/* Array Adding
You have given a number n1, representing the size of array arr1. You have given n1 numbers, representing elements of array arr1. You have given a number n2, representing the size of array arr2.You have given n2 numbers, representing elements of array arr2. The two arrays represent digits of two numbers.

You are required to add the numbers represented by two arrays and print the arrays. n1 and n2 are of diferent size

Input Format
First line consists of an integer n1

Second line consists of n1 spaced integers, representing elements of arr1

Third line consists of an integer n2

Fourth line consists of n2 spaced integers, representing elements of arr2

Output Format
Add the two numbers and print the array

Example 1
Input

3
1 2 3
3
3 2 1
Output

4
4
4
Explanation

Adding corresponding elements gives 4 at each index -> 1 + 3 = 2 + 2 = 3 + 1 = 4

Example 2
Input

2
2 1
4
1 2 3 4
Output

1
2
5
5
Explanation

1234 + 21 = 1255

Constraints
1 <= n1, n2 <= 10

0 <= a1[i], a2[i] < 10 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function calSumUtil(a, b, n, m) {
  let i = n - 1;
  let j = m - 1;
  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry > 0) {
    let d1 = i >= 0 ? a[i] : 0;
    let d2 = j >= 0 ? b[j] : 0;

    let sum = d1 + d2 + carry;

    result.push(sum % 10);
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result.reverse();
}

function calSum(a, b, n, m) {
  return calSumUtil(a, b, n, m);
}


readline.question('', n1 => {
  readline.question('', arr1 => {
    readline.question('', n2 => {
      readline.question('', arr2 => {
        arr1 = arr1.split(' ').map(Number);
        arr2 = arr2.split(' ').map(Number);
		n1 = parseInt(n1);
		n2 = parseInt(n2);  
        let res = calSum(arr1, arr2, n1, n2);
		  console.log(res.join('\n'));
        readline.close();
      });
    });
  });
});