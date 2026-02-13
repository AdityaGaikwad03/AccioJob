/* Tile Teamwork Tactics
In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player''s piece, both of you earn a bonus.

Can you reach your friend''s tile number in the next roll? Complete the possibleBonus function that takes your position a and your friend''s position b and returns a boolean representation of whether it''s possible to earn a bonus on any die roll.

Input Format
First line contains number a. Second line contains number b.

Output Format
First line contains a boolean representation of whether it''s possible to earn a bonus on any die roll.

Example 1
Input

3
7
Output

true
Explanation

a. The difference between b (7) and a (3) is 4.

b. The condition b - a <= 6 && b - a > 0 evaluates to true && true, which is true.

c. The function returns true because the condition is true.

Therefore, the output is true.

Example 2
Input

1
9
Output

false
Explanation

a. The difference between b (9) and a (1) is 8.

b. The condition b - a <= 6 && b - a > 0 evaluates to false && true, which is false.

c. The function returns false because the condition is false.

Therefore, the output is false.

Constraints
You cannot move backward (which is why example #3 doesn''t work).
If you are already on the same tile, return false, as you would be advancing away.
Expect only positive integer inputs. */

function possibleBonus(a, b) {
  // write your code here
  let diff = b - a;
  return diff > 0 && diff <= 6;
}

/* Do not change the code below  */

const rl = require("readline");
const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line1) {
  reader.on("line", function (line2) {
    console.log(possibleBonus(parseInt(line1), parseInt(line2)));
    reader.close();
  });
});
