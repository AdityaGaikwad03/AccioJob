/* Find Most Frequent Element
You are given an array arr of length n. Your task is to print the element which has maximum occurrences in the array. If two elements have the same occurrence then print the smaller element

Input Format
The first line of input contains an integer n, size of the array.

The next line contains n space seperated integers denoting the elements of the array.

Output Format
Print single integer denoting the maximum occurring element in the array.

Example 1
Input

8
7 7 6 4 8 7 3 1
Output

7
Explanation

We have arr = [7 7 6 4 8 7 3 1]

As 7 is occurring 3

Example 2
Input

7
9 8 1 1 2 2 3
Output

1
Explanation

1 and 2 have smae occurrence that is 2 so print smaller element i.e. 1.

Constraints
1 <= n <= 10^6

1 <= arr[i] <= 10^9 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let arr = [];

rl.on('line', (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    arr = input.split(' ').map(Number);
    console.log(maximum_occurrence(arr, n));
    rl.close();
  }
});

function maximum_occurrence(arr, n) {
  //Write code here
  let freq = {};
  let max = 0;
  let result = -Infinity;

  for(let num of arr){
    freq[num] = (freq[num] || 0) + 1;
    if(freq[num] > max || (freq[num] === max && num < result)){
      max = freq[num];
      result = num
    }
  }
    return result
}