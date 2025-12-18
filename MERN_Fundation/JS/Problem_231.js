/* Set Operations
Given two lists, Your task is to perform following operations

Find length of Union

Find length of intersection

Find length of difference from list 1 to list 2

Find length of difference from list 2 to list 1

Input Format
The first line of the input contains n, m (the size of list1 and list2) Next 2 lines contains the input of list1 and list2 respectively.

Output Format
Print the answer of each operation separated by space in single line.

Example 1
Input


 3 3
 1 2 3
 4 5 6
 
Output

6 0 3 3
Explanation

Union = {1,2,3,4,5,6} intersection={} A-B={1,2,3} B-A={4,5,6}

Constraints:

1 <= n, m <= 1000

1 <= list1[i], list2[i] <= 1000 */


function findUnionIntersectionDifference(list1, list2) {
  const set1 = new Set(list1);
  const set2 = new Set(list2);

  // Union
  const union = new Set([...set1, ...set2]);

  // Intersection
  let intersectionCount = 0;
  for (let val of set1) {
    if (set2.has(val)) intersectionCount++;
  }

  // Difference list1 - list2
  let diff1Count = 0;
  for (let val of set1) {
    if (!set2.has(val)) diff1Count++;
  }

  // Difference list2 - list1
  let diff2Count = 0;
  for (let val of set2) {
    if (!set1.has(val)) diff2Count++;
  }

  return [
    union.size,
    intersectionCount,
    diff1Count,
    diff2Count
  ];
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
   let Arr1=[]
   let Arr2=[]
var lineNumber = -1;

readline.on("line", readInputs);

let n, m;

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  
  if (lineNumber == 0) {
    
    let Arr = inputArr[0].split(" ").map((x) => parseInt(x));
     n=Arr[0];
     m=Arr[1];
  
     
  }

if(lineNumber==1){
       Arr1 = inputArr[lineNumber].split(" ").map((x) => parseInt(x));
      
  }
  if(lineNumber==2){
      Arr2=inputArr[lineNumber].split(" ").map((x) => parseInt(x));
  }
  
  
  if (lineNumber ==  2) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
 

  
  console.log(findUnionIntersectionDifference(Arr1, Arr2).join(" "));
}



