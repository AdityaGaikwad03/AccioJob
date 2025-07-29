/* Sorted Insert Position
In JavaScript, write a function searchInsert(A, B) that takes a sorted array A of integers and a target integer B. The function should return the index if the target is found in the array. If the target is not found, the function should return the index where the target would be if it were inserted in order. Assume there are no duplicates in the array. The array A can contain up to 100,000 elements, and each element is an integer between 1 and 10^9. The target B is an integer between 1 and 10^9

Input Format
The first line of input contains an integer n.

The second line of input contains n space-separated integers, each a value of A[i].

The third line of input contains target value B.

Output Format
Print the index where the element is present. If it's not present, print the index it would be inserted into the sorted array.

Example 1
Input

4
1 3 5 6 
5
Output

2
Explanation

5 is found at index 2

Example 2
Input

4
1 3 5 6
2
Output

1
Explanation

2 will be inserted at index 1.

Constraints
1 <= N <= 100000

1 <= A[i] <= 10^9

1 <= B <= 10^9 */



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
  let N = Number(input[0]);
  let A = input[1].split(' ').map(Number);
  let B = Number(input[2]);
  console.log(searchInsert(A, B));
});

function searchInsert(a, b) {
  // Write code here
  let low = 0;
  let high = a.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (a[mid] === b) {
      return mid;
    } else if (a[mid] < b) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}