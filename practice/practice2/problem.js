var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
 

    let Arr = inputArr[1].split(" ").map((x) => parseInt(x));

    console.log(smallestGreaterElements(Arr).join(' '));
  }

function smallestGreaterElements(arr) {
  const n = arr.length;
  const result = new Array(n).fill(-10000000); // initialize result array with -10000000
  
  for (let i = 0; i < n; i++) {
    let smallestGreater = -10000000;
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i] && (smallestGreater === -10000000 || arr[j] < smallestGreater)) {
        smallestGreater = arr[j];
      }
    }
    result[i] = smallestGreater;
  }
  
  return result;
}
