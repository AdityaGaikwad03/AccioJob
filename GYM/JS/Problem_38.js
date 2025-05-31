/* Agent Binod
You are required to take input a string agentName, and finally print the line "Hi my name is Agent insert agentName".

Input Format
First line contains a string which is the name of the agent.

Output Format
One line output of format "Hi my name is Agent insert agentName"

Example 1
Input

Binod
Output

Hi my name is Agent Binod
Explanation
The user has given input as Binod. Hence the output is as shown above.
Example 2
Input

Binod Bhushan
Output

Hi my name is Agent Binod Bhushan
Explanation
The user has given input as Binod Bhushan. Hence the output is as shown above.
Constraints
1 <= agentName.size <= 100000 */




const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', agentName => {
  // Your code here
  agentName = String(agentName);
  console.log("Hi my name is Agent",agentName)
  readline.close();
});
