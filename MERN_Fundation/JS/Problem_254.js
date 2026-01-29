/* Sum of Two
Given an array of integers, find two numbers such that they add up to a specific target number k. Output the indices of the elements that add up to the sum (array is 1 indexed). If multiple solutions exist, output the one where index2 is minimum. If there are multiple solutions with the minimum index2, choose the one with minimum index1 out of them.

Input Format
The first line contain integers N and k, the number of elements in the array and the target sum. The second line of the input contains N singly spaces integers.

Output Format
Output two integers the indices of the two elements.It is guaranteed that the ans will always exist

Example 1
Input

5 3
1 1 3 2 2
Output

  1 4
Explanation

``` 
The satisfying pairs are (1, 4), (2, 4), (1, 5), (2, 5). ```

Constraints:
2 <= N <= 100000

1 <= A[i] <= 1000000000

1 <= k <= 2000000000 */

function SumofTwo(N, Target, myArr) {
  // do not console.log here
  // complete your code
  let map = new Map();
  for (let j = 0; j < N; j++) {
    let need = Target - myArr[j];
    if (map.has(need)) {
      return map.get(need) + " " + (j + 1);
    }
    if (!map.has(myArr[j])) {
      map.set(myArr[j], j + 1);
    }
  }
}


/*Do not change the code below */
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
let x = 0;
let K;
//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);

  lineNumber++;

  if (lineNumber === 0) {
    [size, K] = inputArr[0].split(" ").map((x) => +x);
    ///console.log(size,K);
    // cool=false;
  } else if (lineNumber < size) {
    //lineNumber--;
  }

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const myArr = inputArr[1].split(" ").map((x) => +x);
  console.log(SumofTwo(size, K, myArr));
}

