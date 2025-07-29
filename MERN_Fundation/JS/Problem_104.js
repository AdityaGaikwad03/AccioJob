/* JSON Property Checker
You are given a JSON Object with key and value pairs. You are also given a key x. Complete the JavaScript function containsProp() which returns true if key x is present in given JSON Object, else return false.

Input Format
First line contains a number n, which is the number of key-value pairs in our object

Next n lines contains two space separated string keyx valx

Last line contains the key x

Output Format
Print true or false according to the question

Example 1
Input

3
name Virat
country India
role Batsman
role
Output

true
Explanation

The JSON object is:

{
    "name": "Virat",
    "country": "India",
    "role": "Batsman"
}
Thus the keys to check is "role", which is present in this object, so we print true.

Example 2
Input

4
name Dinesh
grade A
attendence 90
rollnumber
Output

false
Constraints
1 <= n <= 100 */

const readline = require('readline');


function containsProp(obj, key) {
    //Write your code here
    return obj.hasOwnProperty(key)
}

// Dont change the code below

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n = 0;
let obj = {};
let stringX = '';

let count = 0;

rl.on('line', (line) => {
  count++;

  if(count === 1) {
    n = parseInt(line);
  } else if(count > 1 && count <= n+1) {
    let [key, val] = line.split(' ');
    obj[key] = val;
  } else if(count === n+2) {
    stringX = line;
    rl.close();
  }
});

rl.on('close', () => {
  if(containsProp(obj, stringX)) {
    console.log("true")
  }
  else {
    console.log("false")
  }
});
