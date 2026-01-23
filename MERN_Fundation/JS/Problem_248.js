/* Logic Gates
Logic gates are electronic circuits that perform logical operations on one or more binary inputs to produce a single binary output.

AND gate outputs a high signal (1) only when all of its inputs are high. OR gate outputs a high signal (1) when at least one of its inputs is high. NOT gate outputs the opposite value of its input, i.e., if the input is high (1), the output will be low (0), and vice versa.

Your task is to implement Logic Gate using JavaScript Operators. You will be provided by a string operation that can be AND, OR or NOT. Then the next line will be inputs in form of an array input.

Input Format
First line contains the string operation

Second line contains one or two input integers based on the logic gate.

Output Format
Print a single integer using console.log()

Example 1
Input

OR
1 0
Output

1
Example 2
Input

NOT
0
Output

1
Constraints
operation ∈ {AND, OR, NOT}
1 <= input.size() <= 2
AND and OR will have two inputs, where as NOT will only have one input */

function solve(operation, input) {
    // Write your code here
    let result
    if(operation == "AND"){
        result = input[0] && input[1]
    }
    else if(operation == "OR"){
        result = input[0] || input[1]
    }
    else if (operation === "NOT") {
        result = input[0] === 0 ? 1 : 0;
    }

    console.log(result);

}

/* Do not change the code below  */


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let operation = "";
let intInputArr = [];

rl.on('line', (input) => {
    if (!operation) {
        operation = input;
    } else {
        intInputArr = input.split(' ').map(x => parseInt(x));
        solve(operation, intInputArr)
        rl.close();
    }
});
