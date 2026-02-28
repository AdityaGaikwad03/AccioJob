/* Vowel Sort
You want to implement a function that takes an array of strings and returns a new array with all the strings sorted in lexicographic order, but with the restriction that the strings that start with a vowel should come before the strings that start with a consonant.

Input Format
First line contain a number N denoting the size of the array followed by an array of strings in the next line.

Output Format
An array of strings representing the elements of arr sorted in lexicographic order, with the strings that start with a vowel coming before the strings that start with a consonant.

Example 1
Input

4
godly inder ploma sxewqa
Output

inder godly ploma sxewqa

Explanation

Testcase1: although g is lexicographically smaller than i but inder comes before godly because the problem states that we have to consider strings starting with vowels smaller than those starting with consonant.

Constraints:

1 <= N <= 100000

1 <= |S| <= 100 */

function vowelSort(arr) {
  const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
  arr.sort((a, b) => {
    const aVowel = vowels.has(a[0]);
    const bVowel = vowels.has(b[0]);
    if (aVowel && !bVowel) return -1;
    if (!aVowel && bVowel) return 1;
    return a.localeCompare(b);
  });

  return arr;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
 

    let Arr = inputArr[1].split(" ").map((x) => (x));

    console.log(vowelSort(Arr).join(" "));
  }



