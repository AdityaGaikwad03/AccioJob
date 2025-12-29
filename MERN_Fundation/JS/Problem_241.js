/* Tower of Hanoi
From wiki- The Tower of Hanoi is a mathematical puzzle where we have 3 rods and N disks.

Tower of hanoi

The puzzle starts with all the disks in ascending order of size on the first row. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:


 1. Only one disk can be moved at a time.

 2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.

 3. No larger disk may be placed on top of a smaller disk.

Let the rods have names A, B and C. Given N number of disks, numbered 1 to N from top to bottom, display all the moves required to move the disks from rod A to C in minimum number of steps.

Input Format
The only line of input contains an integer N denoting the number of disks

Output Format
Print sequence of moving disks, where each move is shown in the following format- {DiskNumber}:{FromRod}->{ToRod} Each move in the sequence is separated by a new line

Example 1
Input

2

output

1:A->B
2:A->C
1:B->C

Explanation

first moving the disk 1 to B and disk 2 to C and finally we can move the disk 1 to C which will be above the disk 2.

constraints
1 <= n <= 15 */

function towerOfHanoi(n, fromRod, toRod, auxRod) {
  if (n === 0) return;
  towerOfHanoi(n - 1, fromRod, auxRod, toRod);
  console.log(`${fromRod}->${toRod}`);

  towerOfHanoi(n - 1, auxRod, toRod, fromRod);
}

// Reading input
var readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on("line", (line) => {
  input.push(line.trim());
});

readline.on("close", () => {
  let N = parseInt(input[0]);
  towerOfHanoi(N, "A", "C", "B");
});