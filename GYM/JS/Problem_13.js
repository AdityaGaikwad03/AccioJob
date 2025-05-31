/* Delete JSON Object Property
You are given a JSON Object with key and value pairs. You are also given a key x, which is gauranteed to exist in the object. Write a JavaScript program to delete the x property from the given object.

Input Format
First line contains a number n, which is the number of key-value pairs in our object

Next n lines contains two space separated string keyx valx

Last line contains the key x

Output Format
Return the object after deleting the key x

Example 1
Input

3
name Virat
country India
role Batsman
role
Output

name Virat
country India
Explanation

The JSON object is:

{
    "name": "Virat",
    "country": "India",
    "role": "Batsman"
}
Thus the keys to delete is "role". So after deleting the key, JSON object becomes:

{
    "name": "Virat",
    "country": "India"
}
Example 2
Input

4
name Dinesh
rollnumber 47
grade A
attendence 90
rollnumber
Output

name Dinesh
grade A
attendence 90
Constraints
1 <= n <= 100 */


const readline = require('readline');


function deleteProperty(obj, x) {
    //Write your code here

     delete obj[x];
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
  deleteProperty(obj, stringX)
  for(let key in obj) {
    console.log(`${key} ${obj[key]}`);
  }
});
