/* Hey!
Now that Snapchat and Slingshot are soooo 2018, the teenagers of the world have all switched to the new hot app called BAPC (Bidirectional and Private Communication).

This app has some stricter social rules than previous iterations.

For example, if someone says goodbye using Later!, the other person is expected to reply with Alligator!. You can not keep track of all these social conventions and decide to automate any necessary responses, starting with the most important one: the greetings.

When your conversational partner opens with he…ey, you have to respond with hee…eey as well, but using twice as many e’s!

Given a string of the form he…ey of length at most 1000, print the greeting you will respond with, containing twice as many e’s.

Input Format
Input consists of one line

The input consists of one line containing a single string s as specified, of length at least 3 and at most 1000.

Output Format
Output the required string with twice as many e's

Example 1
Input

hey
Output

heey
Explanation

Doubling the number of e's.

Example 2
Input

heeeeey
Output

heeeeeeeeeey
Explanation

Doubling the number of e's

Constraints
1 <= n <= 10 ^ 3

where n is the size of the string. */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function hey(str) {
  // Your code here
   const eCount = str.length - 2;
  const response = 'h' + 'e'.repeat(eCount * 2) + 'y';
  return response;
}

readline.question('', str => {
  let result = hey(str);
  console.log(result);
  readline.close();
});