/* Array Subtracting
You have given a number n1, representing the size of array arr1. You have given n1 numbers, representing elements of array arr1. You have given a number n2, representing the size of array arr2.You have given n2 numbers, representing elements of array arr2. The two arrays represent digits of two numbers.

You are required to subtract the numbers represented by two arrays and print the arrays. n1 and n2 are of different size

Input Format
First line consists of an integer n1

Second line consists of n1 spaced integers, representing elements of arr1

Third line consists of an integer n2

Fourth line consists of n2 spaced integers, representing elements of arr2

Output Format
Subtract the two numbers and print the array

Example 1
Input

3
3 2 1
3
1 2 3
Output

1
9
8
Explanation

321 - 123 = 198

Example 2
Input

4
1 2 3 4
2
2 1
Output

1
2
1
3
Explanation

1234 - 21 = 1213

Constraints
1 <= n1, n2 <= 10

0 <= a1[i], a2[i] < 10 */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", function (line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 3) {
    performSubtraction();
    readline.close();
  }
});

function performSubtraction() {
  let N = parseInt(inputArr[0]);
  let Arr1 = inputArr[1].split(" ").map(Number);
  let M = parseInt(inputArr[2]);
  let Arr2 = inputArr[3].split(" ").map(Number);
  let result = findSubtraction(Arr1, N, Arr2, M);
  result.forEach(element => console.log(element));
}

function findSubtraction(arr1, l1, arr2, l2) {

  function isSmaller(a, b) {
    if (a.length !== b.length) return a.length < b.length;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return a[i] < b[i];
    }
    return false;
  }

  function subtract(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let borrow = 0;
    let res = [];

    while (i >= 0 || j >= 0) {
      let d1 = i >= 0 ? a[i] : 0;
      let d2 = j >= 0 ? b[j] : 0;

      d1 -= borrow;

      if (d1 < d2) {
        d1 += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }

      res.push(d1 - d2);
      i--;
      j--;
    }

    while (res.length > 1 && res[res.length - 1] === 0) {
      res.pop();
    }

    return res.reverse();
  }

  // NEGATIVE CASE
  if (isSmaller(arr1, arr2)) {
    let ans = subtract(arr2, arr1);
    ans.shift(); // 🔥 remove first digit
    return [-1, ...ans];
  }

  // POSITIVE CASE
  return subtract(arr1, arr2);
}
