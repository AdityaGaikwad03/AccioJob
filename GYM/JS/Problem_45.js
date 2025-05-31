/* Circle Area and Perimeter Calculation
You are required to take the radius of a circle as input from the user, and finally, print the area and perimeter of the circle.

Note: Take pi as 3

Input Format
One line contains a number which is the radius of a circle.

Output Format
Print the area of the circle in the first line

Print the perimeter of the circle in the second line

Example 1
Input

4
Output

48
24
Explanation

The formula for perimeter is 2 * pi * r  and for area is pi * r * r 

Putting the values of pi and r we get 2 * pi * r = 24 and pi * r * r = 48.

Example 2
Input

7
Output

147
42
Explanation

The formula for perimeter is 2 * pi * r  and for area is pi * r * r 

Putting the values of pi and r we get 2 * pi * r = 147 and pi * r * r = 42, where r is radius

Constraints
0 <= radius <= 100000

pi = 3 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (radius) => {
  //Write your code here
  radius = Number(radius);
  const pi = 3;
  let area = pi * radius * radius;
  let perimeter = 2 * pi * radius;
  console.log(area);
  console.log(perimeter);
 
});