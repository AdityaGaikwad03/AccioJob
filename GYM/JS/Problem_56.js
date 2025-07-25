/* Conditional Problem 4
You are given a letter of English alphabets. Write a program using switch case to print the following outputs for different inputs as :

If input is 'A' , print "I am the first letter", 
If input is 'B' , print "I am the second letter", 
If input is 'C' , print "I am the third letter",
If input is 'D' , print "I am the fourth letter", 
If input is 'E' , print "I am the fifth letter",
For any other input character, print "I don't belong here". 
Note that, Input characters will only be Capital Letters.

Input Format
First line contains a character

Output Format
Return the sentence related to the character as per description.

Example1
Input

A
Output

I am the first letter
Example 2
Input

G
Output

I don't belong here
Constraints
character c is always uppercase English letter. */


var readline = require("readline").createInterface(process.stdin);

readline.question('', (line) =>{
	conditionalProblem(line[0]);
	readline.close()
});

function conditionalProblem(letter) {
	
	// Write your code here
	switch(letter){
		case 'A':
			console.log("I am the first letter");
			break;
		case 'B':
			console.log("I am the second letter");
			break;
		case 'C':
			console.log("I am the third letter");
			break;
		case 'D':
			console.log("I am the fourth letter");
			break;
		case 'E':
			console.log("I am the fifth letter");
			break;
		default:
			console.log("I don't belong here");
	}
			
}