/* Number of Days
Given the number of the month, your task is to calculate the number of days present in the particular month.

Note:- Consider non-leap year.

Input Format
An integer M, denoting the number of the month.

Output Format
Return the number of days in the month corresponding to the given number. Consider a non-leap year.

Example 1
Input

1
Output

31
Explanation

January has 31 days.

Example 2
Input

3
Output

31
Explanation

March has 31 days.

Constraints
1 <= M <= 12 */



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', month => {
  //Write your code here
 const m = parseInt(month);
 let days;
 if(m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12){
  days = 31;
 }
 else if( m === 4 || m === 6 || m === 9 ||  m === 11){
  days = 30;
 }
 else if(m === 2){
  days = 28;
 }
 else{
  console.log("invalid month");
 }
 console.log(days);


  readline.close();
});