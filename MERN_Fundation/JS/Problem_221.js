/* JS String - 2
Implement the function correctMistake, which should take a string which will be the string we want to change the mistake in, and another string which is the wrong word or character, and third string which is the correct version and return its result as a string with mistakes (Use JS In built functions)

Input Format
Function will take 3 args

line arg which is the string with mistakes

incorrectWord(or char) which is the char/word which needs to be replaced

toBeReplacedWithChar which is a string

Output Format
Function will return string with corrected mistakes

Example 1
Input

Hi World world,world,of coding 
Output

Hi World of coding
Explanation "world" is replaced by "of coding"

Example 2
Input

hi hi hi, hi, hello
Output

hello hello hello
Explanation

"hi" is replaced by "hello" */


function correctMistake(line, charToBeReplaced, what) {
  //Write your code here
   return line.split(charToBeReplaced).join(what);
  }
  const rl = require('readline')
  const reader = rl.createInterface({
   input: process.stdin,
   output: process.stdout
  })
  reader.on('line', (line) => {
   const [line1, ch, hc] = line.split(",")
   console.log(correctMistake(line1, ch, hc));
  })