/* Sunrise View from Buildings
Given an array h representing heights of buildings. You have to count the buildings which will see the sunrise (Assume : Sun rise on the side of array starting point).

Input Format
line 1: contains an integer n denoting size of array.

line 2: contains n spaced integers denoting elements of array.

Output Format
Print a single integer denoting the number of buildings which will see the sunrise.

Example 1
Input

5
7 4 8 2 9
Output

3
Explanation

7 can watch the sunrise, 4 can't, then 8 can but 2 can't and lastly 9 can watch the sunrise too, hence 3 buildings can watch the sunrise.

Example 2
Input

6
6 2 8 4 11 13
Output

4
Explanation

Only buildings of height 6, 8, 11 and 13 can see the sun, hence output is 4.

Example 3
Input

4
1 1 1 1
Output

1
Explanation

Only 1st building will be able to see.

Constraints
1<=n<=10^6

1<=h[i]<=10^9 */




const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function facingSun(n, arr) {
  //Write your code here
  let count = 0;
  let maxHeight = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > maxHeight) {
      count++;
      maxHeight = arr[i];
    }
  }

  return count;
}

readline.question('', n => {
  readline.question('', arr => {
    const array = arr.split(' ').map(Number);
    console.log(facingSun(n, array));
    readline.close();
  });
});