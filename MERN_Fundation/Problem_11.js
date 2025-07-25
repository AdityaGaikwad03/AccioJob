/* Celsius to Fahrenheit 2
Given a temperature in Celsius, output the fahrenheit equivalent of it. This is similar to the Celsius to Fahrenheit 1 question, read the note below carefully.

Note

Print complete answer up to 6 decimal places.

To do so, you can use the System.out.printf() function in Java For example,

float myFloat = 76.45678f;
System.out.printf("%.3f", myFloat);
%.3f is the format specifier used in System.out.printf. It indicates that the value of myFloat should be printed as a floating-point number with three decimal places. The output is rounded to three decimal places: 76.457.

Input Format
Input consists of 1 line of a decimal number.

Output Format
Output consists of a single line of temperature in Fahrenheit.

EXAMPLE 1
Input:

32
Output::

89.600000
EXPLANATION:

To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.

EXAMPLE 2
Input:

25
Output:

77.00000
EXPLANATION:

To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.

Constraints
-100000 <= C <= 100000 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', C => {
  readline.close();
  // Your code here
  C = Number(C);
  F = C * 9/5 + 32
  console.log(F.toFixed(6))
});