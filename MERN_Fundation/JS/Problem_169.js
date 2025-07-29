/* AS Sorting 4
Given a set of N distinct points lying on the X-axis and an integer L, the task is to find the number of ways of selecting three points such that the distance between the most distant points is less than or equal to L

Input Format
The first line contains integer N denoting the number of points

The second line contains N integers denoting the points

The third line contains L denoting the maximum distance possible

Output Format
Print the count of the total ways of selecting three points

Example 1
Input

4
2 1 3 4
3
Output

4
Explanation

{1, 2, 3} Here distance between farthest points = 3 – 1 = 2 <= L

{1, 2, 4} Here distance between farthest points = 4 – 1 = 3 <= L

{1, 3, 4} Here distance between farthest points = 4 – 1 = 3 <= L

{2, 3, 4} Here distance between farthest points = 4 – 2 = 2 <= L

Example 2
Input

4
2 1 3 4
2
Output

2
Explanation

{1, 2, 3} Here distance between farthest points = 3 – 1 = 2 <= L

{2, 3, 4} Here distance between farthest points = 4 – 2 = 2 <= L

Constraints
1 <= N <= 100

0 <= points <= 1000

1 <= L <= 500 */


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let n = parseInt(input[0]);
  let arr = input[1].split(' ').map(Number);
  let L = parseInt(input[2]);

  let ans = sorting4(n, arr, L);
  console.log(ans);
});

function sorting4(n, arr, maxDist) {
  arr.sort((a, b) => a - b);
  let count = 0;

  for (let r = 0; r < n; r++) {
    let left = 0;
    while (arr[r] - arr[left] > maxDist) {
      left++;
    }
    let numElements = r - left;
    if (numElements >= 2) {
      count += (numElements * (numElements - 1)) / 2;
    }
  }

  return count;
}
