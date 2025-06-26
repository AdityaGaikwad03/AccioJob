/* Student Records - 2
We are given JSON object of student data, in the form depicted below in the sample data.

[
  {"name": "John", "id": 123, "marks": 98},
  {"name": "Baba", "id": 101, "marks": 23},
  {"name": "yaga", "id": 200, "marks": 45},
  {"name": "Wick", "id": 115, "marks": 75}
]
complete the StudentRecords() function , where we want to get the details of students who scored more than 50 marks.

Input Format
There is only one array containing student records.

Output Format
Return an array containing details of students who scored more than 50 marks..

Example 1
Input

[
  {"name": "John", "id": 123, "marks": 98},
  {"name": "Baba", "id": 101, "marks": 23},
  {"name": "yaga", "id": 200, "marks": 45},
  {"name": "Wick", "id": 115, "marks": 75}
]
Output

[
  { name: 'John', id: 123, marks: 98 },
  { name: 'Wick', id: 115, marks: 75 }
]


Explanation

'Jhon' and 'Wick' have marks greater than 50.
Constraints:
1 <= Size of the Array <=100000 */

function StudentRecords(Data) {
  //return using return method
 // do not console.log here
 let passedStudents = Data.filter(Data => Data.marks > 50);
  return passedStudents;
}


const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  let str = line;
  str = str.replace(/\\/g, "");
  const A = JSON.parse(str);

  console.log(StudentRecords(A));
});

