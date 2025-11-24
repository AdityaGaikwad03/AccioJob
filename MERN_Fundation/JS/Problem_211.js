/* Compound interest
Write a program to find the compound interest for given principal amount P, time Tm(in years), and interest rate R.

Input Format
The input contains three integers P, R, and Tm.

Output Format
Print the compound interest by 2 decimal places.

Example 1
Input

 100 1 2
Output

 2.01
Explanation

Interest calculated for the given parameters is 2.01.

Example 2
Input

 1 99 2

Output

 2.96
Explanation

for given principal, rate and time compound interest calculated is 2.96.

Constraints
1 < = P < = 10^3

1 < = R < = 100

1 < = Tm < = 20 */



 function compoundinterest(P, R, T) {
  const amount = P * Math.pow(1 + R / 100, T);
  const CI = amount - P;

  let str = CI.toFixed(2);  
  if (str.endsWith(".00")) {
    return str.slice(0, -3);
  }
  if (str.endsWith("0")) {
    return str.slice(0, -1);  
  }

  return str;
 }

const rl = require('readline')
 

 const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout
 })
 

 reader.on('line', (line) => {
  const [a, b,c] = line.split(" ")
 
  const P=parseInt(a)
  const R=parseInt(b)
  const T=parseInt(c)
 

  
  console.log(compoundinterest(P, R,T));
 

 })