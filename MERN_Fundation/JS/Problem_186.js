/* Simple sorting
An array of 5 string is given where each string contains 2 characters, Now you have to sort these strings using insertion sort, like in a dictionary.

Input Format
Input contains 5 strings of length 2 separated by spaces. String contains only uppercase English letters.

Output Format
Print the sorted array.

Example 1
Input

AS KF ER DD JK
Output

AS DD ER JK KF
Explanation

Simple alphabetical order will print the above output
Constraints
1 <= n <= 10000000 */

function Main(input) {
  
  const inputs = input.split("\n");
  //const N = Number(inputs[0]);
  const arr = inputs[0].split(' ');
 

  let res = easySorting(arr);
  print(res);
 

  function print(res)
  {
  for(let i = 0; i < 5; i++)
  process.stdout.write(res[i] + " ");
  }
// You need to return the sorted String array
 // Backend code will print the result
 // arr: Arrays of 5 strings 
 function easySorting(arr)
  {
  // Your code here
  for(let i = 1; i < 5; i++){
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > key){
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
}
 

 Main(require("fs").readFileSync("/dev/stdin", "utf8"));