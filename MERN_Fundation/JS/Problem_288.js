/* Index of Target Element 2
Alice loves to give competitions. One day, she went to her college to give the competition. There she got an integer array arr of size n and an integer target. She needs to find the index of the given target element after sorting and then reversing the given array arr. Assume that the array contains only unique elements. Can you help Alice in finding the index?

Input Format
The first line of the input contains an integer n denoting the size of the array.

The second line of the input contains n space-separated integers denoting the elements of the array.

The third line of the input contains an integer target denoting the target element.

Output Format
Print a single integer representing the index of the target element after sorting the given array arr. If the target element is not present in the array, print -1.

Example 1
Input

5
4 2 1 5 3
4
Output

1
Explanation

After sorting the given array arr in non-descending order, we get [1, 2, 3, 4, 5] and after reversing it , we get [5, 4, 3, 2, 1]. The index of the target element 4 in the sorted array is 1. Therefore, the function should return 1.

Example 2
Input

5
7 2 5 1 15
5
Output

2
Explanation

After sorting the given array arr in non-descending order, we get [1, 2, 5, 7, 15] and after reversing it , we get [15, 7, 5, 2, 1]. The index of the target element 5 in the sorted array is 2. Therefore, the function should return 2.

Constraints
1 ≤ n ≤ 10^6

0 ≤ arr[i], target ≤ 10^9 */


function findTargetIndex(n, arr, target) {
    // Write your code here
     arr.sort((a, b) => a - b);

  const ascIndex = arr.indexOf(target);
  if (ascIndex === -1) return -1;

  return arr.length - 1 - ascIndex;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputArr = [];
let lineNumber = -1;
let n, arr, target;

readline.on("line", line => {
    lineNumber++;

    if (lineNumber === 0) {
        n = parseInt(line);
    }

    if (lineNumber === 1) {
        arr = line.trim().split(" ").map(Number);
    }

    if (lineNumber === 2) {
        target = parseInt(line);
        console.log(findTargetIndex(n, arr, target));
        readline.close();
    }
});