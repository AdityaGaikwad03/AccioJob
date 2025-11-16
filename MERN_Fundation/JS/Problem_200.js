/* Average Temperature
You are working on a project for a local weather station. The station has a list of temperature readings for different cities, stored in a 2D array. Your task is to create a function that takes in a 2D array of temperatures and returns an array of the average temperature for each city.

Input Format
A 2D array of integers, arr, where each subarray represents a city and has the following format:

[city, temperature1, temperature2, ...]

Output Format
An array of integers containing the average temperature for each city in arr.

Example 1
Input

[["City1", 10, 20, 30],["City2", 15, 20, 25], ["City3", 10, 10, 10]] 

Output

20 20 10


Explanation

Average is calculated for all the days

Constraints:

1 <= N <= 10000 */


function averageTemperatures(arr) {
  const result = [];
  for (let cityData of arr) {
    const temps = cityData.slice(1);
    const sum = temps.reduce((acc, val) => acc + val, 0);
    const avg = sum / temps.length;
    result.push(avg);
  }
  return result;
}

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
 
  if (lineNumber ==  0) {
    logic("s");
    readline.close();
  }
}



function logic(input) {
    let arr=JSON.parse(inputArr[0]);
    console.log(averageTemperatures(arr).join(" "));
    
}


