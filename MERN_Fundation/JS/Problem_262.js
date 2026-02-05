/* Chocolates
Everyone loves having chocolates. Saloni loves having chocolates more than anyone. She has n bags having a[1], a[2], ..., a[n] number of chocolates. In one unit time, she can choose any bag a[i], eat all a[i] chocolates and then fill the bag with floor(a[i]/2) chocolates.

Input Format
The first line of the input contains an integer n and k, the number of bags Saloni has and the units of time she will eat. The second line of input contains n integers, the number of chocolates in ith bag.

Output Format
Output a single integer, the maximum number of chocolates she can have in k units of time.

Example 1
Input

3 3
7 5 1 
output

15
Explanation

 In 1st unit time, she will eat from 1st bag (7 chocolates)
 In 2nd unit time, she will eat from 2nd bag (5 chocolates)
 In 3rd unit time, she will eat from 1st bag (3 chocolates)
constraints
1 <= n, k <= 10000

1 <= a[i] <= 1000000000 */

const chocolate = (n, k, Arr) => {

  // Max Heap implementation
  class MaxHeap {
    constructor() {
      this.heap = [];
    }

    insert(val) {
      this.heap.push(val);
      this.bubbleUp();
    }

    bubbleUp() {
      let idx = this.heap.length - 1;
      while (idx > 0) {
        let parent = Math.floor((idx - 1) / 2);
        if (this.heap[parent] >= this.heap[idx]) break;
        [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
        idx = parent;
      }
    }

    extractMax() {
      if (this.heap.length === 1) return this.heap.pop();

      let max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return max;
    }

    bubbleDown() {
      let idx = 0;
      let length = this.heap.length;

      while (true) {
        let left = 2 * idx + 1;
        let right = 2 * idx + 2;
        let largest = idx;

        if (left < length && this.heap[left] > this.heap[largest]) {
          largest = left;
        }

        if (right < length && this.heap[right] > this.heap[largest]) {
          largest = right;
        }

        if (largest === idx) break;

        [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]];
        idx = largest;
      }
    }
  }

  let heap = new MaxHeap();

  for (let val of Arr) {
    heap.insert(val);
  }

  let total = 0;

  for (let i = 0; i < k; i++) {
    let maxChoco = heap.extractMax();
    total += maxChoco;

    heap.insert(Math.floor(maxChoco / 2));
  }

  return total;
};


/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 1) {
    //size = parseInt(inputArr[0].trim());
  }
  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let [n,k]=inputArr[0].trim().split(" ").map(x=>+x)
  let Arr=inputArr[1].trim().split(" ").map(x=>+x);
  console.log(chocolate(n,k,Arr));
}
