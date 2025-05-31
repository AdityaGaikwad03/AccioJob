/* Bubble Sort
Given an Integer N and a list arr. Sort the array using bubble sort algorithm.. First take input of size of the array i.e. N, followed by N numbers which represent the array elements.

Note: Use of inbuilt sort function is not permitted.

Time complexity: There are N elements in the array and for every element we make N iterations , hence N*N iterations which gives us a Time complexity of O(N^2) in the worst case.

Space Complexity: Since this algorithm works without the use of any additional storage space apart from the input, we can say that the Space Complexity will be O(1)

Input Format
First line contains integer N denoting the size of array arr[]

Second line contains N array integers each separated by a space denoting elements of arr[]

Output Format
Output N integers of the sorted array separated by a space in a single line

Example 1
Input

5
1 4 3 7 2
Output

1 2 3 4 7
Explanation

1<2<3<4<7

Example 2
Input

6
5 2 1 4 6 3 
Output

1 2 3 4 5 6
Explanation

1<2<3<4<5<6

Constraints
1 <= n <= 1000

1 <= arr[i] <= 1000 */




const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', N => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    bubbleSort(N, arr);
    console.log(arr.join(' '));
    readline.close();
  });
});

function bubbleSort(N, arr) {
  // Write your code here
  var i, j, temp;
    var swapped;
    for (i = 0; i < N - 1; i++){
        swapped = false;
        for (j = 0; j < N - i - 1; j++){
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (swapped == false)
        break;
    }
}