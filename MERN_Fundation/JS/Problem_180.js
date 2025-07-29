/* Minimum Deletions to Anagram
Two girls are writing a word each on separate pieces of paper. The words may or may not hold any meaning and can be of different lengths. They both are starting to learn about anagrams. An anagram of a string is basically a string which is its permutation. However, they face a lot of issues in this process. Your task is to help them find the minimum number of deletions to be made in those words (total count of deletions in both strings) such that both the words are anagrams of each other.

Input Format
The first line contains a single string. The second line contains a single string.

Output Format
A single integer denoting the minimum number of deletions to be made in both strings.

Example 1
Input


tars
star
 
Output

0

Example 2
Input


tarzan
star
 
Output

4

Explanation

Testcase 1: We don''t need to delete any character hence the answers is zero.

Testcase 2: We need to delete minimum 4 characters to make them anagrams.

Constraints:

1<= |s1|, |s2|<=10000

It is guaranteed that both the strings consist of lowercase English letters, ascii[a- z].

Note:- String will not contain any spaces */


function minDeletions(word1, word2) {
  let freq1 = Array(26).fill(0);
  let freq2 = Array(26).fill(0);
  for (let char of word1) {
    freq1[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  for (let char of word2) {
    freq2[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  let deletions = 0;
  for (let i = 0; i < 26; i++) {
    deletions += Math.abs(freq1[i] - freq2[i]);
  }
  return deletions;
}

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
 
  if (lineNumber ==  1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
    let word1=inputArr[0];
    let word2=inputArr[1];
    console.log(minDeletions(word1, word2));
    
}



