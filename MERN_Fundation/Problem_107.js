/* Unread Books Tracker
You are given a JSON object Array of the format below

[ 
  {
    "title": "sampleTitle1",
    "author": "sampleAuthor1",
    "readingStatus": false
  },
  {
    "title": "sampleTitle2",
    "author": "sampleAuthor2",
    "readingStatus": true
  },
  {
    "title": "sampleTitle3",
    "author": "sampleAuthor3",
    "readingStatus": false
  }
]
The keys of each object are title which is the name of the book, author which is the author of the book and readingStatus which can be true(if the user has read the book) or false(if the user has not read the book).

Your task is to print the name and author of the books that are not read by the user.

Input Format
First line contains the JSON array of objects, in compact form(in a single line)

Output Format
Print the name and author of the book separated by a dash -

Example:

sampleTitle1-sampleAuthor1
sampleTitle3-sampleAuthor3
Example 1
Input

[{"title":"Bill Gates","author":"The Road Ahead","readingStatus":true},{"title":"Steve Jobs","author":"Walter Isaacson","readingStatus":true},{"title":"Mockingjay: The Final Book of The Hunger Games","author":"Suzanne Collins","readingStatus":false}]
Output

Mockingjay: The Final Book of The Hunger Games-Suzanne Collins
Explanation

The JSON object for this testcase is

[ 
  {
    "title": "Bill Gates",
    "author": "The Road Ahead",
    "readingStatus": true
  },
  {
    "title": "Steve Jobs",
    "author": "Walter Isaacson",
    "readingStatus": true
  },
  {
    "title": "Mockingjay: The Final Book of The Hunger Games",
    "author": "Suzanne Collins",
    "readingStatus": false
  }
]
Here we can see that only third book ie "Mockingjay: The Final Book of The Hunger Games" is not read(readingStatus = False). So we print the information for this book only.

Constraints
1 <= book Objects <= 1000 */


function getInfo(obj) {
  // Loop through each book object
  for (let book of obj) {
    if (book.readingStatus === false) {
      console.log(`${book.title}-${book.author}`);
    }
  }
}

// Don't change the driver code given below
var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  let obj = JSON.parse(line);
  getInfo(obj);
  readline.close();
}
