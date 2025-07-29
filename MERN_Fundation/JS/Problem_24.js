/* Temperature Conversion
Given the temperature of a city in celsius(C), your task is to convert the temperature to Fahrenheit(F) and return it.

Formula : (C* (9/5)) + 32 = F

Note: It is guaranteed that the temperature in celsius, C, will be a multiple of 5.

Input Format
An integer C, represents the temperature in Celsius which is a multiple of 5.

Output Format
Return an integer containing the converted temperature in Fahrenheit.

Example 1
Input

25
Output

77
Explanation

The formula is (C* (9/5)) + 32 = F. Here C=25 and hence using the formula 25 * 9/5 + 32 = 77 we get 77 as the answer. Hence 77 is the output

Example 2
Input

-40
Output

-40
Explanation

The formula is (C* (9/5)) + 32 = F. Here C=-40 and hence using the formula -40 * 9/5 + 32 = -40 we get -40 as the answer. Hence -40 is the output

Constraints
-1000 <= C <= 1000 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', tempInCelsius => {
  //Write your code here and print the required output
  let C = Number(tempInCelsius);
   f = C * 9/5 + 32;
   console.log(f)

  readline.close();
});
