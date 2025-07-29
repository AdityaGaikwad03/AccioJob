/* Total Book price
You are working on a project for a local bookstore. The bookstore has a list of books and their corresponding prices, stored in an array of objects. Your task is to create a function that takes in an array of books and returns the total price of all the books.

Input Format
An array of objects, arr, where each object has the following properties:

title (string): the title of the book
price (number): the price of the book
Output Format
A number representing the total price of all the books in arr.

Example 1
Input

[
  { title: "Book 1", price: 10 },
  { title: "Book 2", price: 20 },
  { title: "Book 3", price: 30 }
]
output

60
Example 2
Input

[
  { title: "Book A", price: 15 },
  { title: "Book B", price: 25 },
  { title: "Book C", price: 35 }
]
output

75
Explanation

testcase 1 : (10 + 20 + 30) = 60

testcase 2: (15 + 25 + 35) = 75
constraints
0 < = Size of array < = 100 */

function totalPrice(arr) {
  //Write your solution here
  let total = arr.reduce((acc, book) => acc + book.price, 0);
  return total;
}

// Do not change the code below
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
let inputArr = [];
let lineNumber = -1;
readline.on("line", readInputs);
function readInputs(line) {
    inputArr.push(line);
    lineNumber++;

    // Exit Condition
    if (lineNumber == 0) {
        logic();
        readline.close();
    }
}
function logic() {
    let str = JSON.parse(inputArr[0].trim().replace(/\\/g, ""));
    console.log(totalPrice(str));
}