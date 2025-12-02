/* JS Object - 1
Implement createUserObj which takes two arguments, email and password and the funtion returns and object with key email and value as email argument and key password and value as password.

Input Format
Function will take two arguments.

Function will return object with keys email and password

Output Format
Output N*N integers in a single line separated by spaces, which are the elements of the matrix in anti-clockwise order.

Example 1
Input

akshat.sethi@acciojob.com 123456

output

{email:"akshat.sethi@acciojob.com", password:"123456"}

Explanation

The output returned object with keys email and password  
constraints
1 <= String length <= 100 */

/*complete the function*/
const CreateUserObject = (Email, Password) => {
  // Your code here
// do not console.log here return expected JSON object
return {
    email: Email,
    password: Password
  };
};


/*Do not change anything below*/

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var query;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    //size=parseInt(inputArr[0]);
  }

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const [Email, Password] = inputArr[0].split(" ");
  console.log(CreateUserObject(Email, Password));
}


