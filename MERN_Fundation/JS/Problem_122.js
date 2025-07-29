/* Time Conversion
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note
12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.

12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Input Format
First line contains a 12-hour clock time as a string s.

Output Format
Print the 24-hour clock time.

Example 1
Input

07:05:45PM
Output

19:05:45
Explanation

The seventh hour in a 12 hour clock (in post meridiem) can be represented as nineteenth hour on a 24 hour clock.

The minute value and second value remain unchanged. So, the time on 24 hour clock is 19:05:45.

Example 2
Input

12:01:00PM
Output

12:01:00
Explanation

The twelfth hour of 12 hour clock (in post meridiem) remains unchanged on 24 hour clock.

The minute value and second value also remain unchanged. So, the time on 24 hour clock is 12:01:00.

Constraints
All valid 12-hour clock times.

s.length() == 10 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function timeConversion(s) {
  // Write your code here
  const period = s.slice(-2);
  let [hour, minute, second] = s.slice(0, 8).split(':');

  if (period === 'AM' && hour === '12') {
    hour = '00';
  } else if (period === 'PM' && hour !== '12') {
    hour = String(Number(hour) + 12);
  }

  console.log(`${hour}:${minute}:${second}`);
}

readline.question('', s => {
  timeConversion(s);
  readline.close();
});