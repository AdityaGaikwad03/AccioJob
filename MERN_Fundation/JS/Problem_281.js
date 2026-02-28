/* Longest Distinct characters in string
Given a string S, you have to find the length of the longest substring of S containing all unique characters, i.e, no character is repeating within that substring. For example, for input string S = "abca", the output is 3 as "abc" is the longest substring with all distinct characters.

Input Format
The first line of input contains an integer T denoting the number of test cases. The first and the only line of each test case contains the string S.

Output Format
Print length of longest substring containing all the distinct characters of string. Note: The output substring should have all distinct characters.

Example 1
Input

 2
 abababcdefababcdab
 gccksfvrgccks

Output

 6
 7

Explanation

 "bcdefa" have length 6 in first

 "cksfvrg" have length = 7.

Constraints:
1 ≤ T ≤ 100

1 ≤ length of S ≤ 1000 */

const longestDistinctSubstr = (s) => {
  // Your Code here
// do not console.log here
  let set = new Set();
  let left = 0;
  let maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

/*Do not change the code below*/
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  } else if (lineNumber < size) {
  }

  //Exit Condition
  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = +inputArr[0];
  //inputArr.shift();

  for (let i = 1; i <= N; i = i + 1) {
    console.log(longestDistinctSubstr(inputArr[i]));
  }
}


