/* Anagram Strings
Given N strings and Q queries, for each query you will be given a string, your task is to print all the anagrams of the string from the given N strings. If no anagrams exist then print -1.

Note:- Given string may contain duplicated strings you should print it as many times as it occurs.

Input Format
First line of input contains a single integer N, second line of input contains N space separated strings. Third line of input contains a single integer Q, next Q line contains a single string each.

Output Format
For each query in a new line print the anagrams in lexicographical order separated by spaces.

Example 1
Input

6
cat tea pet tac act eat
4
cat
tca
eee
tea
output

act cat tac
act cat tac
-1
eat tea
Explanation

act cat tac are the anagrams of cat present in the string.
constraints
1 < = N < = 1000

1 < = |String| < = 10

1 < = Q < = 100000

Note:-String will only contain lower case English letters */


const AnagramStrings = (N, StringArray, Q, Arr) => {
 // do not return 
// console.log here
 const anagramMap = new Map();
  for (let word of StringArray) {
    const sorted = word.split("").sort().join("");
    if (!anagramMap.has(sorted)) {
      anagramMap.set(sorted, []);
    }
    anagramMap.get(sorted).push(word);
  }
  for (let [key, value] of anagramMap.entries()) {
    value.sort();
  }
  for (let query of Arr) {
    const sortedQuery = query.split("").sort().join("");
    if (anagramMap.has(sortedQuery)) {
      console.log(anagramMap.get(sortedQuery).join(" "));
    } else {
      console.log("-1");
    }
  }
};

/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var query = 100000;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber === 2) {
    query = parseInt(inputArr[2]);
  }

  if (lineNumber === 2 + query) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = parseInt(inputArr[0]);
  const StrArray = inputArr[1].split(" ");
  const q = query;
  inputArr.shift();
  inputArr.shift();
  inputArr.shift();

  //console.log(N,StrArray,q,inputArr);

  AnagramStrings(N, StrArray, q, inputArr);
}