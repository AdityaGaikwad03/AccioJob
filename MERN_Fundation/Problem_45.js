/* N Stars
Print a line of n stars (*) horizontally, followed by n lines with one star (*) each, representing a vertical line. The horizontal and vertical lines should not intersect. The first line of input contains n. Your output should first print the stars in a horizontal line, followed by the stars in vertical lines.

Input Format
The first line of input contains n.

Output Format
print the stars in horizontal and vertical direction.

Example 1
Input

3
Output



Exaplantion

We print the 3 stars in horizontal and 3 stars vertical direction.

Example 2
Input

5
Output



Exaplantion

We print the 5 stars in horizontal and 5 stars vertical direction.

Constraints
1<= n <= 100 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  n = parseInt(n);

  // Print horizontal stars with space between each
  console.log('* '.repeat(n).trim());

  // Print vertical stars
  for (let i = 0; i < n; i++) {
    console.log('*');
  }

  readline.close();
});
