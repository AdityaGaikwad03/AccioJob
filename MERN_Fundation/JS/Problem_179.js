/* Sort JSON Array by Library ID
You are given a JSON Array of the format below

[ 
  {
    "title": "sampleTitle1",
    "author": "sampleAuthor1",
    "libraryID": 345
  },
  {
    "title": "sampleTitle2",
    "author": "sampleAuthor2",
    "libraryID": 123
  },
  {
    "title": "sampleTitle3",
    "author": "sampleAuthor3",
    "libraryID": 567
  }
]
Given a JSON array of objects in the format shown below, your task is to write a function called AscendingSort() that sorts this array based on the 'libraryID' key in ascending order. The function should return the sorted array.

The input to the function will be a JSON array of objects, each with three properties: 'title', 'author', and 'libraryID'.

The function should return a sorted array of strings, each string being a concatenation of the 'title', 'author', and 'libraryID' properties of each object, separated by hyphens. The array should be sorted in ascending order of the 'libraryID' property.

Input Format
First line contains the JSON array of objects, in compact form(in a single line)

Output Format
If there are n objects, then there are n line printed in output in the format sampleTitle1-sampleAuthor1-345

Example 1
Input

[{"title":"Bill Gates","author":"The Road Ahead","libraryID":1254},{"title":"Steve Jobs","author":"Walter Isaacson","libraryID":4264},{"title":"Mockingjay: The Final Book of The Hunger Games","author":"Suzanne Collins","libraryID":3245}]
Output

Bill Gates-The Road Ahead-1254
Mockingjay: The Final Book of The Hunger Games-Suzanne Collins-3245
Steve Jobs-Walter Isaacson-4264
Explanation

The JSON object for this testcase is

[
  {
    "title": "Bill Gates",
    "author": "The Road Ahead",
    "libraryID": 1254
  },
  {
    "title": "Steve Jobs",
    "author": "Walter Isaacson",
    "libraryID": 4264
  },
  {
    "title": "Mockingjay: The Final Book of The Hunger Games",
    "author": "Suzanne Collins",
    "libraryID": 3245
  }
]
So we can after sorting the objects on the basis of libraryID, we get the output in the format given above.

Constraints
1 <= Size of Input Array <= 1000 */


function AscendingSort(a, b) {
   //write your code here
  return a.libraryID - b.libraryID
}

var readline = require("readline").createInterface(process.stdin);
readline.on("line", readInputs);

function readInputs(line) {
  let obj = JSON.parse(line);
  var sortedObj = obj.sort(AscendingSort)
  for(var i = 0; i < sortedObj.length; i++) {
    console.log(sortedObj[i].title + "-" + sortedObj[i].author + "-" + sortedObj[i].libraryID);
  }
  readline.close();
}