/* Student Records - 1
We are given JSON object of student data, in the form depicted below in the sample data.

[
  {"name": "John", "id": 123, "marks": 98},
  {"name": "Baba", "id": 101, "marks": 23},
  {"name": "yaga", "id": 200, "marks": 45},
  {"name": "Wick", "id": 115, "marks": 75}
]
complete the StudentRecords() where we want to get the details of student's name in caps.

Input Format
There is only one array containing student records.

Output Format
Return details of the student's name in caps.

Example 1
Input

[
  {"name": "John", "id": 123, "marks": 98},
  {"name": "Baba", "id": 101, "marks": 23},
  {"name": "yaga", "id": 200, "marks": 45},
  {"name": "Wick", "id": 115, "marks": 75}
]
Output

[ 'JOHN', 'BABA', 'YAGA', 'WICK' ]
Explanation Names are only returned in caps.

Constraints:
1 <= Size of the Array <=100000 */

function StudentRecords(Data) {
   let studentNamesInCaps = Data.map(Data => Data.name.toUpperCase()); 
  return studentNamesInCaps;
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

