/* Spoonerism
A spoonerism is when the first letters / sounds of two words are transposed onto one another. Create a function that takes a two-word string and performs a spoonerism on the phrase.

Input Format
First line contains a string containing two words separated by a space  

Output Format
A single string containing two words separated by a space  

Example 1
Input

loud noises
Output

noud loises
Example 2
Input

chow mein
Output

mow chein
Example 3
Input

history lecture
Output

listory hecture
Constraints
1 <= size of input string <= 100 */

    //Write your code here
   function spoonerise(phrase) {
    let [word1, word2] = phrase.trim().split(/\s+/);

    // get consonant clusters safely
    let m1 = word1.match(/^[^aeiou]+/i);
    let m2 = word2.match(/^[^aeiou]+/i);

    let c1 = m1 ? m1[0] : "";
    let c2 = m2 ? m2[0] : "";

    let rest1 = word1.slice(c1.length);
    let rest2 = word2.slice(c2.length);

    return c2 + rest1 + " " + c1 + rest2;
}

//DO NOT CHANGE THE CODE BELOW
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    let ch = input;

    console.log(spoonerise(ch));
    rl.close();
});