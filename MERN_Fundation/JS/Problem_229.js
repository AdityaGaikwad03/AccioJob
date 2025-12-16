/* List Properties
You are given a JSON Object with key and value pairs. Your task is to find all the keys of this object

Input Format
First line contains a number n, which is the number of key-value pairs in our object

Output Format
The keys of this object with each key in new line.

Example 1
Input

3
name Virat
country India
role Batsman
Output

name
country
role
Explanation

The JSON object is:

{
    "name": "Virat",
    "country": "India",
    "role": "Batsman"
}
Thus the keys are: "name", "country" and "role"

Example 2
Input

4
name Dinesh
rollnumber 47
grade A
attendence 90
Output

name
rollnumber
grade
attendence
Constraints
1 <= n <= 100 */

const readline = require('readline');

function listProperties(obj) {
    //Write your code here
     return Object.keys(obj);

}


/* Do not change the code below  */

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
const obj = {};

rl.on('line', (input) => {
  if (n === 0) {
    n = parseInt(input);
  } else {
    const [key, value] = input.split(' ');
    obj[key] = value;
    n--;
    if (n === 0) {
      const ans = listProperties(obj)
      ans.sort();
      console.log(ans.join('\n'));rl.close();
    }
  }
});