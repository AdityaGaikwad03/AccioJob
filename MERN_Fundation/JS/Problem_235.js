/* um of Two
Given an array of integers, find two numbers such that they add up to a specific target number k.

Output the indices of the elements that add up to the sum (array is 1 indexed).

If multiple solutions exist, output the one where index2 is minimum. If there are multiple solutions with the minimum index2, choose the one with minimum index1 out of them.

Input Format
The first line contain integers N and k, the number of elements in the array and the target sum.

The second line of the input contains N singly spaces integers.

Output Format
Output two integers the indices of the two elements.

It is guaranteed that the ans will always exist

Example 1
Input


5 3
1 1 3 2 2
 
 

Output

1 4

Explanation

Explanation: pair of indices which gives target k are: (1, 4), (1, 5), (2, 4), (2, 5). Among all such pairs (1, 4) satisfies above condition.
Example 2
Input

2 2
1 1
Output

1 2

Constraints:

2 <= N <= 100000

1 <= A[i] <= 1000000000

1 <= k <= 2000000000 */

function findPair(array, k) {
 const map = new Map();
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const needed = k - current;
    if (map.has(needed)) {
      return [map.get(needed), i + 1];
    }
    if (!map.has(current)) {
      map.set(current, i + 1);
    }
  }
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
 
  
    let N =parseInt(inputArr[0].split(" ")[0]);
    let X=parseInt(inputArr[0].split(" ")[1]);
    let Arr = inputArr[1].split(" ").map((x) => parseInt(x));
 
  
    console.log(findPair(Arr,X).join(" "));
  
}


