/* Valid String
Wanda and vision are a very unusual couple. During their stay in Westview, they told everyone to make a string S of only ‘a’s and ‘b’s. Later they decided that only those who generated the string according to the following rules would be allowed to enter the house.

a. The string begins with an ''''a’

b. Each ''''a'''' is followed by nothing or an ''''a'''' or "bb"

c. Each "bb" is followed by nothing or an ''''a''''

Vision thought to create a machine that would check the same. Help him write a recursive function that checks the rules and analyse who is allowed and who isn’t.

Input Format
The input contains a single string S.

Output Format
Print "YES" if the string is valid else print "NO".

Example 1
Input

aabba
output

YES
Explanation

begin with ''''a'''' ''''a'''' is followed by ''''a'''' and ''''bb'''' and ''''bb'''' is followed by ''''a''''. 
Example 2
Input

aabbaab
output

NO
Explanation

Not valid as ''''a'''' is followed by ''''b''''
constraints
1 <= |S| <= 100000

Note:- String will contain only lowercase English alphabets */



function checkAB(s) {
  function isValid(s, i) {
    if (i === s.length) return true;

    if (s[i] === 'a') {
      if (i + 2 < s.length && s[i + 1] === 'b' && s[i + 2] === 'b') {
        return isValid(s, i + 3); // 'a' followed by 'bb'
      } else {
        return isValid(s, i + 1); // 'a' followed by another 'a' or end
      }
    }

    if (s[i] === 'b') {
      // Only valid if it's part of a "bb" pattern
      if (i + 1 < s.length && s[i + 1] === 'b') {
        return isValid(s, i + 2); // continue after 'bb'
      } else {
        return false; // single 'b' is invalid
      }
    }

    return false;
  }

  if (s.length === 0 || s[0] !== 'a') return "NO";
  return isValid(s, 0) ? "YES" : "NO";
}



/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    // size = parseInt(inputArr[0].trim());
  }
  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  console.log(checkAB(inputArr[0].trim()));
}

