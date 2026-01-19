/* Convert To Title Case
Complete the toTitleCase function which converts the given string str to title case.

Title case is a capitalization convention for text that involves capitalizing the first letter of each word, except for small words such as articles, conjunctions, and prepositions (unless they are the first word of a title). The purpose of title case is to make the text easier to read and to give it a more formal appearance.

Input Format
First line contains string str.

Output Format
First line contains title case version of string str.

Example 1
Input

hello world
Output

Hello World
Explanation

In title case, the first letter of each word in a string is capitalized, while the remaining letters are lowercase. Using the example of "hello world", the first letter of the first word "hello" would be capitalized to create "Hello", while the first letter of the second word "world" would also be capitalized to create "World". Therefore, the title case of "hello world" would be "Hello World".

Example 2
Input

mRS. sMITH
Output

Mrs. Smith
Explanation

When it comes to proper nouns like names, there are additional rules to follow. For example, titles such as "Mr.", "Mrs.", and "Dr." should always have the first letter capitalized, regardless of where they appear in a sentence. Using the example of "mRS. sMITH", we would capitalize the "M" in "Mrs." and the "S" in "Smith" to create "Mrs. Smith".

Constraints
The input string may contain alphanumeric characters, punctuation, and/or whitespace.

Topics */

function toTitleCase(str) {
  // write your code here
   return str
    .toLowerCase()
    .split(" ")
    .map(word => {
      if (word.length === 0) return word;
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

/* Do not change the code below  */

const rl = require("readline");
const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line) {
  console.log(toTitleCase(line));
  reader.close();
});
