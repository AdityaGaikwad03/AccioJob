/* Find Split Point
Write a program to Partition an array into two subarrays with the same sum. Take input of size of array and the array elements then find if it is possible to split the array in two subarrays (without reordering the elements), such that the sum of the two subarrays is the same.

Input Format
Input consists of two lines.

First line contains an integer N denoting size of array

Second line contains N integers denoting the array elements separated by single space

Output Format
Print the two partitioned subarray in two lines. Print "Not Possible" if it is not possible to partition the array into subarrays of equal sum.

Note:- Print left subarray in first line and right subarray in second line.

Example 1
Input

5
6 -4 3 2 -3
Output

6 -4 
3 2 -3
Explanation Sum of 6+(-4) is equal to Sum of 3+2+(-3)

Example 2
Input

4
4 3 2 1
Output

Not Possible
Explanation No partition of the array will make the left and right sum equal

Constraints
1<= arr.size() <= 10000 */


const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question('',(N) => {
	readline.question('',(arr) => {
		N = parseInt(N);
		arr = arr.split(' ').map(Number);
		splitArray(N,arr);
	})
})

function splitArray (N, arr){
	// Write your code here
	let total = 0;
  for (let i = 0; i < N; i++) {
    total += arr[i];
  }

  let leftSum = 0;
  for (let i = 0; i < N - 1; i++) {
    leftSum += arr[i];
    let rightSum = total - leftSum;

    if (leftSum === rightSum) {
      let left = "";
      let right = "";

      for (let j = 0; j <= i; j++) left += arr[j] + " ";
      for (let j = i + 1; j < N; j++) right += arr[j] + " ";

      console.log(left.trim());
      console.log(right.trim());
      return;
    }
  }

  console.log("Not Possible");
}