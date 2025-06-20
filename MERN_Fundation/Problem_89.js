/* Subarray Sum Zero
Write a program to print starting and ending indexes of all the subarrays of arr[] whose sum is equal to zero.

If no valid subarray exists whose sum is zero then print -1.

Print all the indexes in increasing order of the starting index and if starting index is the same then print in the increasing order of the ending index.

Input Format
First line contains an integer N denoting size of the array.

Second line contains N integers denoting the array elements

Output Format
Print the starting and ending indexes of all the subarrays whose sum is zero as shown in the sample test case.

If no valid subarray is present then print -1.

Subarray found from Index i to j
Example 1
Input

10
3 4 -7 3 1 3 1 -4 -2 -2
Output

Subarray found from Index 0 to 2
Subarray found from Index 0 to 9
Subarray found from Index 1 to 3
Subarray found from Index 2 to 5
Subarray found from Index 3 to 9
Subarray found from Index 5 to 7
Explanation

Adding the given subarray values we can see that we get sum as zero for each subarray.

Example 2
Input

3
0 0 0
Output

Subarray found from Index 0 to 0
Subarray found from Index 0 to 1
Subarray found from Index 0 to 2
Subarray found from Index 1 to 1
Subarray found from Index 1 to 2
Subarray found from Index 2 to 2
Explanation

Adding the given subarray values we can see that we get sum as zero for each subarray.

Constraints
1 <= N <= 10^3

-10^6 <= arr[i] <= 10^6 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function zeroSubarray(arr) {
  const sumMap = new Map();
  let sum = 0;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0) {
      result.push([0, i]);
    }

    if (sumMap.has(sum)) {
      const indices = sumMap.get(sum);
      for (let start of indices) {
        result.push([start + 1, i]);
      }
    }

    if (!sumMap.has(sum)) {
      sumMap.set(sum, []);
    }
    sumMap.get(sum).push(i);
  }

  if (result.length === 0) {
    console.log("-1");
  } else {
    // Sort by start index, then by end index
    result.sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      return a[1] - b[1];
    });

    for (let [start, end] of result) {
      console.log(`Subarray found from Index ${start} to ${end}`);
    }
  }
}

readline.question('', n => {
  readline.question('', arr => {
    zeroSubarray(arr.split(' ').map(Number));
    readline.close();
  });
});
