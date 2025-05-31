/* Shopping
Toros went to the supermarket to buy K items. There were a total of N items. Each item had a distinct price Pi. He is cost-effective, so he would buy the K cheapest item. But he knows that the more cheaper an item is, the more is the chances that it can be defective. So he planned to ignore 2 cheapest items and buy K from the remaining ones. Find the total cost of all items that he would buy.

Input Format
The first line contains two integers N and K, denoting the total number of items in the supermarket and the number of items Toros is going to buy. The second line contains N distinct integers Pi , denoting the prices of the items

Output Format
Print a single integer denoting the total cost of items Toros would buy.

Example 1
Input

 5 2
 4 1 2 3 5

Output

7

Explanation

 Toros will ignore items with price 1 and 2 and would buy items with price 4 and 3.

Constraints:
1 <= N <= 100000

1 <= K <= N - 2

1 <= Pi <= 1000000 */



function supermarket(prices, n, k) {
  // Sort the prices in ascending order
  prices.sort((a, b) => a - b);

  // Skip the two cheapest items and pick the next k
  const selected = prices.slice(2, 2 + k);

  // Return total cost of selected items
  return selected.reduce((sum, price) => sum + price, 0);
}

// Input Handling (Node.js)
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputArr = [];
let A, B;

readline.on("line", function (line) {
  inputArr.push(line.trim());

  if (inputArr.length === 2) {
    [A, B] = inputArr[0].split(" ").map(Number);
    const prices = inputArr[1].split(" ").map(Number);
    const result = supermarket(prices, A, B);
    console.log(result);
    readline.close();
  }
});
