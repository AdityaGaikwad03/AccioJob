/* Subarray Problem 3
There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0. You are given an integer array gain[] of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n).

Print the highest altitude of a point that the biker reaches in his entire journey.

Input Format
The first line contains an integer N. The next line consists of N space-separated integers.

Output Format
An integer that represents the highest altitude the biker reaches.

Example 1
Input

5
-5 1 5 0 -7
Output

1
Explanation

The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

Example 2
Input

5
-5 1 5 0 8
Output

9
Explanation

The altitudes are [0, -5, -4, 1, 1, 9]. The highest is 9.

Constraints
1<=N<=10^7

-10^5<=gain[i]<=10^5 */




const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function largestAltitude(gain) {
  //Write your code here
  let current = 0;
  let max = 0;

  for(let i = 0; i < gain.length; i++){
    current += gain[i];
    if(max < current)
      max = current;
  }
  return max;
}

readline.question('', n => {
  readline.question('', gain => {
    gain = gain.split(' ').map(Number);
    let maxaltitude = largestAltitude(gain);
    console.log(maxaltitude);
    readline.close();
  });
});