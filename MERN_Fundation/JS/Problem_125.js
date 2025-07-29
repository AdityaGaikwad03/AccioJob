/* Ptice
Adrian, Bruno and Goran wanted to join the bird lovers’ club. However, they did not know that all applicants must pass an entrance exam. The exam consists of n questions, each with three possible answers: A, B and C.

Unfortunately, they couldn’t tell a bird from a whale so they are trying to guess the correct answers. Each of the three boys has a theory of what set of answers will work best:

Adrian claims that the best sequence is: A, B, C, A, B, C, A, B, C, A, B, C ...

Bruno is convinced that this is better: B, A, B, C, B, A, B, C, B, A, B, C ...

Goran laughs at them and will use this sequence: C, C, A, A, B, B, C, C, A, A, B, B ...

Write a program that, given the correct answers to the exam, determines who of the three was right – whose sequence contains the most correct answers.

Input Format
First line contains an integer n denoting number of questions.

Second line contains a string of n letters ‘A’, ‘B’ and ‘C’. These are, in order, the correct answers to the questions in the exam.

Last line contains the indices separated by space.

Output Format
On the first line, output m, the largest number of correct answers one of the three boys gets.

After that, output the names of the boys (in alphabetical order) whose sequences result in m correct answers.

Example 1
Input

5
BAACC
Output

3
Bruno
Explanation

Here only Bruno has most correct answers i.e. 3.

Example 2
Input

9
AAAABBBBB
Output

4
Adrian
Bruno
Goran
Explanation

Here all 3 have 4 correct answers.

Constraints
1 <= n <= 100 */


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function ptice(n, key) {
  // Write your code here and print output in this function
   const patterns = {
    Adrian: 'ABC',
    Bruno: 'BABCBABC',
    Goran: 'CCAABBCCAABB'
  };

  const scores = {
    Adrian: 0,
    Bruno: 0,
    Goran: 0
  };

  for (let i = 0; i < n; i++) {
    if (key[i] === patterns.Adrian[i % patterns.Adrian.length]) scores.Adrian++;
    if (key[i] === patterns.Bruno[i % patterns.Bruno.length]) scores.Bruno++;
    if (key[i] === patterns.Goran[i % patterns.Goran.length]) scores.Goran++;
  }

  const maxScore = Math.max(scores.Adrian, scores.Bruno, scores.Goran);
  console.log(maxScore);

  for (let name of ['Adrian', 'Bruno', 'Goran']) {
    if (scores[name] === maxScore) {
      console.log(name);
    }
  }
}

readline.question('', n => {
  readline.question('', key => {
    ptice(parseInt(n), key);
    readline.close();
  });
});