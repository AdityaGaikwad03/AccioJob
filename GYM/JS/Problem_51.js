/* Lucky Sevens
Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7

Input Format
The First line consists of the array.

Output Format
Print true if such triplet exists summing to 7 else print false

Example 1
Input

5
2 1 5 1 0
Output

 true

Explanation

1+5+1 = 7

Example 2
Input

2
1 6
Output

false

Explanation

No 3 consecutive numbers so false

Constraints:
1 <= array length <= 10000 */





function lucky_sevens(arr) {
    for (let i = 0; i <= arr.length - 3; i++) {
        const a = arr[i];
        const b = arr[i + 1];
        const c = arr[i + 2];
        const sum = a + b + c;
        if (sum === 7) {
            if (!( (a === 0 && c === 0 && b === 7) )) {
                return true;
            }
        }
    }
    return false;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputArr = [];
readline.on("line", function (line) {
    inputArr.push(line.trim());
});

readline.on("close", function () {
    let arr = inputArr[1].split(" ").map(Number); 
    const result = lucky_sevens(arr);
    console.log(result);
});
