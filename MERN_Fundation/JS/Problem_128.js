/* Sum of 2D Array Elements
You are given a 2D array A of order N * M.

Your task is to find out the sum of elements of the 2D array.

Input Format
The first line of input contains two space-separated integers N and M.

The next N lines contain M space-separated integers.

Output Format
For each test case return an integer.

Example 1
Input

2 2
1 2
3 4
Output

10
Explanation

1 + 2 + 3 + 4 = 10. Thus answer is 10.
Example 2
Input

2 3
1 2 3
4 5 6
Output

21
Explanation

1 + 2 + 3 + 4 + 5 + 6 = 21. Thus answer is 21.
Constraints
0 <= N <= 10^3

0 <= M <= 10^3

1 <= A[i][j] <= 10^3 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  let [n, m] = input[0].split(' ').map(Number);
  let arr = [];
  for(let i = 1; i <= n; i++){
    arr.push(input[i].split(' ').map(Number));
  }
  console.log(findSum(arr, n, m));
});

function findSum(arr, n, m) {
  //Write your code here
  let sum = 0;
  for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
      sum += arr[i][j]
    }
  }
  return sum
}