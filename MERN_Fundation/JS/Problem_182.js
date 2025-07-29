/* EVM Machine
During the elections, Bob is in charge of conducting voting in his village, but the EVM system malfunctioned, and there was a long line of voters waiting outside to vote. The following is how the Advanced EVM Machine works. Each time when a voter scans his VoterId Card and votes for the party of his choice, the Voter''s id and Party Name are registered in the background, and if the same voter votes again, the EVM does not capture his vote, then the vote is skipped and the vote given the first time is used. Now that you are Bob''s best mate, you can''t bear to see him in such a strained situation when outside voters are being very aggressive and screaming at him. Can you easily write a piece of code to save your friend''s life while Bob is busy calming down the outside situation?

Note that 20 has a maximum of 4 smaller elements on the right side. Other elements have less count, for example 10 has 3 smaller elements on the right side.

Input Format
The number N (1 ≤ N ≤ 1e5) appears on the first line. The queries to the machine are included in the next n lines. Each request consists of two strings and is written on a non- empty line. The first string is an Voter Card Id, and the second string is the Party Name, all of which are atmost 32 characters long both upper case and lower case possible.

Output Format
Output a single line indicating which party has won and by how many votes. In case of a draw between parties print all the parties with the same winning vote, in lexographically increasing order on basis of Party Name.

Example 1
Input

4
12678345 BJP
57891082 Congress
12678345 AAP
65489 TMC
output

BJP 1
Congress 1
TMC 1
Explanation

As Winning Parties here as BJP, Congress, TMC with 1 vote(s) each, but AAP vote is not considered because the same VoterId - 12678345 has done a vote again.
constraints
1 ≤ N ≤ 100000

1 ≤ Voter Id length ≤ 40

1 ≤ PartyName length ≤ 32 */


function countVotes(votes) {
// do not return console.log here as directed in example
// Your code here
 let voterIdSet = new Set();
    let voteCount = new Map();
    for (let i = 0; i < votes.length; i++) {
        let [voterId, party] = votes[i];
        if (!voterIdSet.has(voterId)) {
            voterIdSet.add(voterId);
            voteCount.set(party, (voteCount.get(party) || 0) + 1);
        }
    }
    let sortedVotes = Array.from(voteCount.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [party, count] of sortedVotes) {
        console.log(`${party} ${count}`);
    }
}
/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0].trim());
  }
  //Exit Condition
  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let votes=[];
  for (let i = 1; i <= parseInt(inputArr[0].trim()); i +=1) {
    let v=inputArr[i].trim().split(" ");
    votes.push(v);
  }
  countVotes(votes);
}
