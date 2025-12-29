/* Quadratic Probing
Quadratic probing is a collision handling technique in hashing. Quadratic probing says that whenever a collision occurs, search for i^2 position.

In this question, we''''ll learn how to fill up the hash table using Quadratic probing technique. You are given hash table size which you''''ll use to insert elements into their correct position in the hash table i.e.(arr[i]%hashSize). You are also given an array arr[] of size N. You need to fill up the hash table using Quadratic probing and print the resultant hash table.

Note:

All the positions that are unoccupied are denoted by -1 in the hash table.
An empty slot can only be found if load factor < 0.5 and hash table size is a prime number.
The given testcases satisfy the above condition so you can assume that an empty slot is always reachable.
Input Format
The first line of input contains T denoting the number of testcases. T testcases follow. Each testcase contains 2 lines of input. The first line contains size of the hashtable and size of array. The third line contains elements of the array.

Output Format
For each testcase, in a new line, print the hash table.

Example 1
Input

2
11 4
21 10 32 43
11 4
880 995 647 172 
output

10 -1 -1 32 -1 -1 -1 -1 43 -1 21
880 -1 -1 -1 -1 995 -1 172 -1 647 -1 
Explanation

 Explanation:

Testcase1: 21%11=10 so 21 goes into hashTable[10] position. 
10%11=10. hashTable[10] is already filled so we try for (10+1)%11=0 position. 
hashTable[0] is empty so we put 10 there. 32%11=10. hashTable[10] is filled. 
We try (32+1)%11=0. But hashTable[0] is also already filled. We try (32+4)%11=3. 
hashTable[3] is empty so we put 32 in hashTable[3] position. 43 uses (43+9)%11=8. 
We put it in hashTable[8].
 

Testcase2: Using the similar approach as used in above explanation we will get the output 
like 880 -1 -1 -1 -1 995 -1 172 -1 647 -1 .
constraints
1 <= T <= 100

2 <= hashSize (prime) <= 97

1 <= sizeOfArray < hashSize*0.5

0 <= Array[i] <= 10^5 */

function quadraticProbing(array, hashsize, n) {
  let hashTable = new Array(hashsize).fill(-1);

  for (let i = 0; i < n; i++) {
    let value = array[i];

    // 🔴 Skip duplicates
    if (hashTable.includes(value)) continue;

    let index = value % hashsize;

    if (hashTable[index] === -1) {
      hashTable[index] = value;
    } else {
      for (let j = 1; j < hashsize; j++) {
        let newIndex = (index + j * j) % hashsize;
        if (hashTable[newIndex] === -1) {
          hashTable[newIndex] = value;
          break;
        }
      }
    }
  }

  return hashTable;
}                                                                     
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
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }
  //Exit Condition
  if (lineNumber == 2 * size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let T = parseInt(inputArr[0].trim());
  //let str1 = inputArr[1].trim();
  for (let i = 1; i <= 2 * T; i += 2) {
    let [a, b] = inputArr[i].split(" ").map((x) => parseInt(x));
    let Arr = inputArr[i + 1]
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    // console.log(n, Arr,k);
   console.log(quadraticProbing(Arr, a, b).join(" "));
  }
}
