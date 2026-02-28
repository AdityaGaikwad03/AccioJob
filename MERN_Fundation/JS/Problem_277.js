/* Strange String
The question is super small and super simple. You are given an integer n. Initially you have an empty string. You need to construct the string of length n with the following rules:

Insert the first character in the beginning of string, the second in the end, the third in the beginning, fourth in the end, and so on.
The first character should be 'a', followed by 'b', 'c', and so on. 'z' will be followed by 'a'.
Input Format
The first and the only line of input contains a single number n.

Output Format
Print the output by figuring out the logic.

Example 1
Input

4

Output

cabd 

Input

30

Output

caywusqomkigecabdfhjlnprtvxzbd
 

Explanation

 In the first case the string transforms as follows: "" -> "a" -> "ab" -> "cab" -> "cabd"
 
Constraints:
1 <= n <= 500000 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  let str = line;
  const n=+line;
  console.log(StrangeString(n));

});


function StrangeString(N){
	 const front = [];
  const back = [];

  for (let i = 0; i < N; i++) {
    const ch = String.fromCharCode(97 + (i % 26));

    if (i % 2 === 0) {
      front.push(ch);   
    } else {
      back.push(ch);
    }
  }

  front.reverse();
  return front.join('') + back.join('');
}

