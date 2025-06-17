/* Angry Professor
A professor has set a rule: if fewer than k students arrive on time for the class, then the class will be canceled. Based on the arrival times of each student, determine if the class gets canceled.

Input Format:
Two space-separated integers: n (the number of students) and k (the minimum number of students who should arrive on time to avoid class cancellation).
An array of n integers representing the students' arrival times. A non-positive value (<=0) means the student arrived on time, and a positive value (>0) means the student was late.
Output Format:
If the class is canceled, print YES.
Otherwise, print NO.
Example:
Input:

5 3
0 0 0 0 -1
Output:

NO
Constraints:
1 <= n <= 1000
1 <= k <= n
-100 <= a[i] <= 100 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function AngryProfessor(arr, n, k) {
  // your code here

  let onTime = arr.filter(time => time <= 0).length;

  if (onTime < k) {
    console.log("YES"); // Class is canceled
  } else {
    console.log("NO");  // Class is not canceled
  }
}

  readline.question('', (input) => {
    const [n, k] = input.split(' ').map(Number);
    readline.question('', (input) => {
      const arr = input.split(' ').map(Number);
      AngryProfessor(arr, n, k);
      readline.close();
    });
  });