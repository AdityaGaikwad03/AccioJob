/* Quotient and Remainder Calculation
Declare two variables as a and b. Initialize the values those variables as 1042 and 7 respectively.

Declare another two variables quo and rem that will store the quotient and remainder of these numbers taking a as dividend and b as divisor.

Print quo and rem in a line separated by a space.

Input Format
No input. User has to declare the variables themselves.

Output Format
Print the quotient and remainder of these numbers by taking a as dividend and b as divisor.

Output:

148 6 

Explanation
a is assigned the value 1042 and b is assigned 7. The remainder when dividing 1047 by 7 is 6, while the quotient is 148. Hence these are shown in the output.

 */



// your code here
const a = 1042;
const b = 7;
let quo;
let rem;
quo = a / b;
rem = a % b;
console.log(Math.floor(quo), rem);
