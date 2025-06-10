/* Binary To Decimal
Given binary representation of number in the form of string, convert it to decimal representation.

Note : String will be given such that output will fit in int

Input Format
First line contains t number of test cases

Next t lines contain string s denoting binary representation

You need to complete binToDec function which contains binary string input s (binary representation) and print/return its decimal representation

Output Format
Print decimal representation of each string in different line

EXAMPLE 1
Input:

2
10
111
Output::

2
7
EXPLANATION:

10 is the binary representation of 2

111 is the binary representation of 7

EXAMPLE 2
Input:

1
11011
Output::

27
EXPLANATION:

11011 is the binary representation of 27

CONSTRAINTS
1 <= t <= 10^3 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let t;

rl.on('line', (input) => {
  if (!t) {
    t = parseInt(input);
  } else {
    let ans = binToDec(input);
    console.log(ans);
    t -= 1;
    if (t === 0) {
      rl.close();
    }
  }
});

function binToDec(s) {
  //Write code here
  let power = 0;
  let decimal = 0
  s = s.toString();
  for(let i = s.length-1; i >= 0; i--){
     if (s[i] === '1') {
      decimal += Math.pow(2, power);
    }
    power++;
  }
  
  return decimal;
}