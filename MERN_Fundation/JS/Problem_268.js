/* Student Records - 7
We are given JSON object of student data, in the form depicted below in the sample data.

[
  {"name": "John", "id": 123, "marks": 98},
  {"name": "Baba", "id": 101, "marks": 23},
  {"name": "yaga", "id": 200, "marks": 45},
  {"name": "Wick", "id": 115, "marks": 75}
]
This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50. complete the StudentRecords() to return the sum of marks of the students with marks greater than 50 after proper grace marks addition.

Input Format
There is only one array containing student records.

Output Format
Print the sum of marks of the students with id > 120.

Example 1
Input

[
  {"name": "John", "id": 123, "marks": 98},
  {"name": "Baba", "id": 101, "marks": 23},
  {"name": "yaga", "id": 200, "marks": 45},
  {"name": "Wick", "id": 115, "marks": 75}
]
Output

233 
Explanation

Here Jhon and Wick have marks greater than 50 but since Baba and yaga have marks less than 50 so, 
their marks will be 23+15=38 and 45+15=60, now yaga also have marks more than 50. as 98+75+60=233.
Constraints:
1 <= Size of the Array <=100000 */

function StudentRecords(Data) {
   return Data
    .map(Data => {
      // add grace if marks < 50
      if (Data.marks < 50) {
        return { ...Data, marks: Data.marks + 15 };
      }
      return Data;
    })
    .filter(Data => Data.marks > 50)
    .reduce((sum, Data) => sum + Data.marks, 0);
}

const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  let str = line;
  const A = JSON.parse(str.trim());

  console.log(StudentRecords(A));
});


