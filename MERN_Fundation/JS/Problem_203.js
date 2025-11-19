/* Crazy Numbers
Ninja loves playing with numbers. So one day, he wants to arrange a few numbers in the ‘N’ number of rows. The first row contains 1 number, the second row has two numbers, the third row has 3 digits, and so on.

Ninja starts placing numbers in increasing order, with absolute difference 1, starting from 1 and continuing till he encounters 9, and then he again restarts from 1.

You are given an integer ‘N’ denoting the given number of rows. Can you print the pattern that Ninja wants to create?

Pattern for N = 4:

   1
  23
 456
7891
Input Format
The first line contains a single integer ‘N’, denoting the number of rows.

Output Format
Print the integers denoting the required pattern in the following ‘N’ lines.

Example 1
Input

3
Output

  1
 23
456
Explanation

We are required to create a pattern consisting of 3 lines. First-line contains ‘1’. From the second line, we have to place a number one more than the previous value. So we place 2.Then we put 3 and move to the following line because this line will contain only 2 elements. In the following line, we have to place 3 numbers, so we put 4, 5, and 6.

Example 2
Input

4
Output

   1
  23
 456
7891
Explanation

We are required to create a pattern consisting of 4 lines. First-line contains ‘1’. From the second line, we have to place a number one more than the previous value. So we place 2 elements. We put 2 and 3 and move to the following line because this line will contain only 2 elements. In the following line, we have to place 3 numbers, so we put 4, 5, and 6. In the last line, we have to place 4 digits, so we place 7, 8, 9, and 1.

Constraints
1 <= N <= 500 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Solution {
  solve(input) {
    // write your code here
    const N = Number(input.trim());
    let curr = 1;
    for (let i = 1; i <= N; i++) {
      let line = "";
      line += " ".repeat(N - i);
      for (let j = 0; j < i; j++) {
        line += curr;
        curr++;
        if (curr === 10) curr = 1;
      }

      console.log(line);
    }
  }
}
rl.on("line", (input) => {
  const solution = new Solution();
  solution.solve(input);
  rl.close();
});
