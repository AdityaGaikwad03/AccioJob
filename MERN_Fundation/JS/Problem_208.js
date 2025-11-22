/* JS Promise - 2
Complete the function checkCanIVote Such that it takes a number as first argument(time) and a number as second argument(age). It returns a promise which resolves or rejected after time milliseconds and if age >= 18, it resolves to "You can vote" else it rejects to "You can not vote".

Note:- You only have to implement the function, in the example it shows how your implemented question will be run.

Input Format
Function will take two arguments

1st argument will be a number which tells after how many milliseconds promise will be resolved or rejected.

2nd argument will be a number (age)

Output Format
Function returns a promise which resolves to "You can vote" or rejects to "You can not vote". If age >= 18 resolves to "You can vote" else rejects to "You can not vote".

Example 1
Input

200 19

Output

true You can vote */

const readline = require("readline");

function checkCanIVote(time, age) {
    // Return a promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve("You can vote");
            } else {
                reject("You can not vote");
            }
        }, time);
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on("line", function (line) {
    const args = line.split(" ");
    const time = parseInt(args[0], 10);
    const age = parseInt(args[1], 10);   // FIXED: convert to number

    let start = Date.now();

    checkCanIVote(time, age)
        .then((msg) => {
            let end = Date.now();
            console.log(time < end - start && end - start < time + 200, msg);
        })
        .catch((err) => {
            let end = Date.now();
            console.log(time < end - start && end - start < time + 200, err);
        })
        .finally(() => {
            rl.close();
        });
});
