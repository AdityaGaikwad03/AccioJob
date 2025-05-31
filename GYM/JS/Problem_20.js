/* Equal Heights
Gian and Suneo want to be the same height, so they ask Doraemon for help. Doraemon gives each of them a special "big light" that can make them grow taller. However, Gian's big light makes him grow at a speed of v1 meters per second, and Suneo's big light makes him grow at a speed of v2 meters per second.

At the end of every second, Doraemon checks if their heights have become equal. Your task is to figure out if their heights will ever become the same.

Input Format
You are given 4 integers:

h1: Gian's initial height
h2: Suneo's initial height
v1: The speed at which Gian's height increases (in meters per second)
v2: The speed at which Suneo's height increases (in meters per second)
Both start growing at the same time.

Output Format
You need to return or print true if Gian and Suneo will have the same height at some point. If not, return or print false.

Example 1
Input

4 2 2 4
Output

true
Explanation

Gian's height over time: 4, 6, 8, 10, ...
Suneo's height over time: 2, 6, 10, ...
After 1 second, they both have a height of 6, so the answer is true.

Example 2
Input

5 4 1 6
Output

false
Explanation

Gian grows too slowly compared to Suneo, so their heights will never be equal. Thus, the answer is false.
Constraints
1 <= h2 < h1 <= 10000
1 <= v1 <= 10000
1 <= v2 <= 10000 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const [h1, h2, v1, v2] = input.split(' ').map(Number);
  // Write your code here
  if (v1 === v2) {
    console.log(h1 === h2 ? 'true' : 'false');
  } else {
    const diff = h2 - h1;
    const speedDiff = v1 - v2;
    
    // They meet if time is a positive integer
    if (diff % speedDiff === 0 && (diff / speedDiff) >= 0) {
      console.log('true');
    } else {
      console.log('false');
    }
  }

  rl.close();

});