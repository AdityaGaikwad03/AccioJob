/* Odd-Even Sort
Implement Odd-Even sort /Brick sort.

Input Format
The first line  contains one integer 'N' denoting the number of elements.

The Second line  contains 'N' space separated integers denoting the elements of the array.

Output Format
Print the array in sorted fashion.

Example 1
Input

6
7 6 8 5 4 9
Output

4 5 6 7 8 9
Explanation

Printed sorted array.

Example 2
Input

5
11 5 12 6 13
Output

5 6 11 12 13
Explanation

Printed sorted array.

Constraints
0 <= nums.length <= 10^4

-10^9 <= nums[i] <= 10^9 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function oddEvenSort(a, n) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i <= n - 2; i += 2) {
      if (a[i] > a[i + 1]) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
        isSorted = false;
      }
    }
    for (let i = 1; i <= n - 2; i += 2) {
      if (a[i] > a[i + 1]) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
        isSorted = false;
      }
    }
  }
console.log(a.join(' '));}

readline.question('', n => {
   n = Number(n);
  readline.question('', aay => {
    aay = aay.split(' ').map(Number);
    oddEvenSort(aay, n);
    readline.close();
  });
});