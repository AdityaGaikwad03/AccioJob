// **multiplication table**

// const { json } = require("stream/consumers");

// let n =10 //prompt("enter no");
// for(let i = 1; i <= 10; i++){
//     console.log(n + " x " + i + " = " + n * i);
// }

// **check no is positive nagative or zero**

// let n = 10
// if(n > 0) console.log("positive")
// else if(n < 0) console.log("negative")
//     else console.log("zero")

// **find factoreal of an no**
// let n = 5
// let fact = 1
// for(let i = 1; i <= n; i++)
//     fact = fact * i
// console.log("factorial of " + n + " is " + fact)

// **count number of digits in number
//  let n = 12345
//  let count = 0
//  for(let i = n; i != 0; i = Math.floor(i / 10))
//     count++
// console.log("number of digits in " + n + " is " + count)

//swap number with temp
// let a = 10
// let b = 20
// let temp
// temp = a
// a = b
// b = temp
// console.log("a = " + a + " b = " + b)

//swap number without temp
// let a = 5
// let b = 3

// a = a + b
// b = a - b
// a = a - b

// console.log("a = " + a + " b = " + b)

// check if no is prime or not

// let n = 10;
// let flag = 0;
// for (let i = 2; i = n - 1; i++)
// {
//     if(n % i != 0){
//         console.log(n + " is a prime number");
//     }
// }

// reaverse a number

//  let n = 12345
//  let rev = 0
//   for(let i = n; i != 0; i = Math.floor(i / 10)){
//     rev = rev * 10 + i % 10
//   }
//   console.log("reverse of " + n + " is " + rev)

// with while
// let rev = 0
// let n = 123
// while(n != 0){
//     rev = rev * 10 + n % 10
//     n = Math.floor(n / 10)
//     }
//     console.log("reverse of " + n + " is " + rev)

// check for palendrom

// let n = 212
// let rev = 0
// for(let i = n; i != 0; i = Math.floor(i / 10)){
//      rev = rev * 10 + i % 10
// }
// if(rev === n){
//         console.log(n + " is a palendrom")
//      }
//      else{
//         console.log(n + " is not a palendrom")
// }

// let n = 5;
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         console.log(j)
//     }
// }

// let a = 10;
// let b = 20;

// console.log("sum of a and b is ", a + b);
// console.log("sub of a and b is ", a - b);
// console.log("mul of a and b is ", a * b);
// console.log("div of a and b is ", a / b);
// console.log("mod of a and b is ", a % b);

// session 1 : variabel

// 1) print name

// let name = "john"
// console.log(name)

// 2) change variabel value

// let age = 25
// age = 30
// console.log(age)

// 3) check type of veriabel

// let x = 42
// let y = "hello"
// let z = true
// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)

// 4) primitive data type

//  var a = 25;      // number
//  var b = "Aditya"; // string
//  var c = true; // boolean
//  var d;        // undefine
//  var e = null; // null
//  console.log(a,"\n",b,"\n",c,"\n",d,"\n",e);

// 5) undefine vs null

// let a;
// let b = null;
// console.log(a,", data type : ",typeof(a));
// console.log(b,", data type : ",typeof(b));

// 6) define multiple var in one line

// let firstName = "jane", lastName = "deo", age = 28
// console.log("\nfirstName :",firstName,"\nlastName :",lastName,"\nage :",age)

// 7) swap number without temp
// let a = 5, b = 3
// a = a + b
// b = a - b
// a = a - b
// console.log("a = " + a + " b = " + b)

//swap number with temp
// let a = 10
// let b = 20
// console.log("original : a = ", a," b = ",b)
// let temp
// temp = a
// a = b
// b = temp
// console.log("swap no : a = ", a," b = ",b)

// 8) chec string datatype

// let city = "mumbai"
// console.log(typeof(city))

// ***Arithmatic operator

// let a = 10;
// let b = 20;
// console.log("sub of a and b is ", a - b);
// console.log("mul of a and b is ", a * b);
// console.log("sum of a and b is ", a + b);
// console.log("div of a and b is ", a / b);
// console.log("mod of a and b is ", a % b);
// console.log("exponent of a and b is ", a ** b);

// 9) order of operation

// let a= 10,b=2,c=5;
// console.log("order of operation : ", a + b * c);

// 10) perentheses to change order

// let a = 10, b = 2, c = 5;
// console.log("order of operation : ", (a + b) * c);

// 11) negative number and arithmatic

// let a = -5, b = 3, c = 2;
// console.log("neg number : ", a + b * c);

// 12) multiply and add in one line
// let a = 3, b = 4, c = 5;
// let x = 20,
// console.log("mul and add : ", a * b + c);

// console.log((true * "3"))

// arithmatic oprators

//increment and ddecriment a++, ++a, a--, --a
// let a = 10;
// console.log("a = ", a++);
// console.log("a = ", a);
// console.log("a = ", ++a);
// console.log("a = ", a--);
// console.log("a = ", a);
// console.log("a = ", --a);
// console.log("a = ", a);

// logical operator

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// console.log(!true);
// console.log(!false);

//conditional loops

// 1) if
// let a = 10;
// if (a >= 10){
//    console.log("true");
//}

// 2) if else
// let a = 10;
// if (a >= 10){
//    console.log("true");
// }
// else{
//      consol.log("false");
// }

// 3) else if

// let age = 10;
// if (age >= 18){
//    console.log("adult");
// }
// else if(age <= 18){
//      console.log("tennager");
// }
// else{
//      console.log("child");
// }

// 4)switch case
// let day = "thursday";
// switch(day){
//     case "monday" : console.log("we will learn html");
//     break;
//     case "tuesday" : console.log("we will learn css");
//     break;
//     case "wednesday" : console.log("we will learn js");
//     break;
//     case "thursday" : console.log("we will learn react");
//     break;
//     case "friday" : console.log("we will learn node");
//     break;
//     default : console.log("we will learn something else");
// }

// admin login

// let userName = "Admin";
// let password = "1234";
// if(userName === "Admin" && password === "1234"){
//     console.log("login success");
// }
// else{
//     console.log("login failed");
// }

// calender app - leep year checkar
//  let year = 2020;
//  if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
//     console.log(`${year} is a leap year`);
//     }
// else{
//     console.log(`${year} is not a leap year`);
//     }

// age gate for movie website
// let age = 18;
// let eligibility = (age >= 18) ? "Adult" : "Minor";
// console.log(eligibility)

// game scoreboard - highest score finder
// let scores = [90, 100, 70, 60, 50];
// let highestScore = Math.max(...scores);
// console.log("The highest score is", highestScore);

// let a = 80;
// let b = 69;
// let c = 90;

// if(a >= b && a >= c){
//     console.log("a is highest");
// }
// else if(b >= a && b >= c){
//     console.log("b is highest");
// }
// else{
//     console.log("c is highest");
// }

// office managemet system - day scheduler
// let no = 3;

// switch(no){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// // smart traffic control system

// let color = "red";
// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("go slow");
//         break;
//     case "green":
//         console.log("go");
//         break;
//     default:
//         console.log("invalid color");
// }

// payment system valid amount check
// let amount = 1000;
// if(amount % 5 === 0){
//     console.log("valid amount");
//}
// else{
//     console.log("invalid amount");
//}

// password length checker

// let password = "1234567890";
// if(password.length >= 8)
// {
//     console.log("Strong password");
// }
// else{
//     console.log("Week password");
// }

// fizzBuzz activity
// let num = 9;
// if(num % 3 === 0 && num % 5 === 0){
//     console.log("FizzBuzz");
// }
// else if(num % 5 === 0){
//     console.log("Buzz");
// }
// else if(num % 3 === 0){
//     console.log("Fizz");
// }else{
//     console.log(num);
// }

// temperature labeling
// let temperature = 30;
// if (temperature >= 30) {
//   console.log("Hot");
// } else if (temperature <= 20) {
//   console.log("Cold");
// } else {
//   console.log("Normal");
// }

//  case detection
// let caseCheck = "Ab";
// if(caseCheck === caseCheck.toUpperCase()){
//     console.log(caseCheck,"is Uppercase");
// }
// else if(caseCheck === caseCheck.toLowerCase()){
//     console.log(caseCheck,"is lowercase");
// }
// else{
//     console.log(caseCheck,"is Mixed");
// }

// age renge checker
// let age = 25;
// if(age >= 10 && age <= 50){
//     console.log("accepted");
// }
// else{
//     console.log("not accepted");
// }

// e-commerce checkout - discount rule on 1000 10% descount
// let price = 1000;
// let discount = 0.1;
// if(price >= 1000){
//     let finalPrice = price - (price * discount);
//     console.log(finalPrice);
// }
// else{
//     console.log("no discount prise remains same ",price);
// }

// age group classification
// let age = 25;
// if(age >= 1 && age <= 12)
// {
//     console.log("child");
// }
// else if(age >= 12 && age <= 20)
// {
//     console.log("youth");
// }
// else if(age >= 20 && age <= 59)
// {
//     console.log("adult");
// }
// else {
//     console.log("senior");
//}

//time based greeting
// let time = 10;
// if(time >= 7 && time <= 12)
// {
//     console.log("good morning");
// }
// else if(time >= 12 && time <= 16)
// {
//     console.log("good afternoon");
// }
// else if(time >= 16 && time <= 21)
// {
//     console.log("good evening");
// }
// else{
//     console.log("good night");
// }

//multi-platform login - email or phone
// let login = "email";
// if(login === "email"){
//     console.log("enter your email");
// }
// else if(login === "phone"){
//     console.log("enter your phone number");
// }
// else{
//     console.log("invalid login");
// }

// loops

// 1. display square of no.
//  let num = 10;
//  for(let i = 1; i <= num; i++){
//         console.log(`square of ${i} is ${i * i}`)
//     }

// 2. sum of even numbers from 1 to 50
// let sum = 0;
// for(let i = 2; i <= 50; i += 2){
//          sum = sum + i;
// }
// con0sole.log(sum)

// for(let i = 10; i <= 100; i += 10){
//     console.log(i+"%")
// }
// let charg = 10;
// while(charg <= 100){
//     console.log(charg+"%");
//     charg += 10;
// }

// countdown timer from 10 to 1

// time = 10
// while(time >= 0){
//     console.log(time)
//     time--
// }

// calclate sum of digit of a number
// let num = 12345;
// let sum = 0;
// while(num != 0){
//     let rem = num % 10;
//     sum = sum + rem;
//     num = Math.floor(num / 10);
// }
// console.log(sum)

// print all charater of the string one by one
// let str = "hello"
// for(let i = 0; i < str.length; i++){
//     console.log(str[i])
// }

// factorial of an no
// let num = 5;
// let fact = 1;
// for(let i = 1; i <= 5; i++){
//     fact = fact * i;
// }
// console.log(fact)

// count how many number between 1 to 50 divisible by 7
// let count = 0;
// for(let i = 1; i <= 50; i++)
// {
//     if(i % 7 == 0)
//     {
//         count++;
//     }
// }
// console.log(count)

//reverse a no and check wheter it is palendrom or Not
// let num = 12321;
// let rev = 0;
// let n = num;
// while (n != 0) {
//   let rem = n % 10;
//   rev = rev * 10 + rem;
//   n = Math.floor(n / 10);
// }
//  console.log(rev)
// if (num == rev) {
//   console.log("palendrom");
// } else {
//   console.log("not palendrom");
// }
// // let num = 12321;

// treditional function

// imp :-- **if funtion not return anything which means it return undefine**

// function sum(a,b){
//     //console.log(a+b);
//     return a+b;
// }
// let add = sum(5,7);
// console.log(add)

// var is a functional and global scope

// let a = 2;
// console.log(a)   //2

// function one(){
//     console.log(a)  //2
//     let b = 4
//     console.log(b)     // 4
// }
// console.log(b)      // error
// if(true){
//     let c = 6;
//     console.log(c)      // 6
// }
// console.log(c)

// function two(){
//     if(true){
//         let d = 8;
//         console.log(d)     //8
//     }
//     console.log(d)     // error
// }

// patterns

// let n = 3
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//         process.stdout.write("* ");
//     }
// }

// let n = 5
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//     process.stdout.write("* ");
//     }
//     console.log()
// }

// let n = 5
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//     process.stdout.write(j.toString());
//     // console.log(j)
//     }
//     console.log()
// }

// let n = 5
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//     process.stdout.write(i.toString());
//     // console.log(i)
//     }
//     console.log()
// }

// let n = 5
// for(let i = 1; i <= n; i++){
//     for(let j = n; j >= i; j--){
//     process.stdout.write("* ");
//     }
//     console.log()
// }

// let n = 5
// for(let i = n; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//     process.stdout.write(String(j));
//     }
//     console.log()
// }

// triangle pattern

// let n = 10;
// for(let i = 1; i <= n; i++){
//     for(let j = n; j >= i; j--){
//     process.stdout.write(" ");
//     }
//     for(let k = 1; k <= i; k++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// let n = 4
// let sp = n - 1;
// let st = 1;
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= sp; j++){
//     process.stdout.write(" ");
//     }
//     for(let k = 1; k <= st; k++){
//         process.stdout.write("*");
//     }
//     sp--;
//     st += 2;
//     console.log()
// }

// let n = 4
// let sp = 0;
// let st = n * 2 - 1;
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= sp; j++){
//     process.stdout.write(" ");
//     }
//     for(let k = 1; k <= st; k++){
//         process.stdout.write("*");
//     }
//     sp++;
//     st -= 2;
//     console.log()
// }

// function str1() {
//   let n = 4;
//   let sp = n - 1;
//   let st = 1;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= sp; j++) {
//       process.stdout.write(" ");
//     }
//     for (let k = 1; k <= st; k++) {
//       process.stdout.write("*");
//     }
//     sp--;
//     st += 2;
//     console.log();
//   }
// }
// function str2() {
//   let n = 4;
//   let sp = 0;
//   let st = n * 2 - 1;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= sp; j++) {
//       process.stdout.write(" ");
//     }
//     for (let k = 1; k <= st; k++) {
//       process.stdout.write("*");
//     }
//     sp++;
//     st -= 2;
//     console.log();
//   }
// }
// str1();
// str2();

// let n = 4;
// let sp = n - 1;
// let st = 1;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= sp; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= st; k++) {
//     process.stdout.write("*");
//   }
//   if (i <= n - 1) {
//     sp--;
//     st += 2;
//   }
//   if (i == n) {
//     sp = 0;
//     st = 2 * n - 1;
//   } else {
//     sp++;
//     st -= 2;
//   }
//   console.log();
// }

// push multiple elements in arr
// let arr = [3,5,2,1]
// let arr2 = [...arr, 4, 6, 7, 8]
// console.log(arr2)

// let a = [1,4,6,7,8]
// function evenCount(a){
//   let count = 0;
//   // for(let i = 0; i < a.length; i++){
//   //   if(a[i] % 2 === 0){
//   //     count++
//   //   }
//   for(let elem of arr){
//     if(elem % 2 === 0){
//       count++;
//   }
//   }
//   return count;
// }
// console.log(evenCount(a))

// arr reverse and return new arr without inbuild reverse function
// let arr = [1,2,3,4,5]
// function reverseArray(arr) {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--)
//   {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }
// console.log(reverseArray(arr))


// fine element in arr
// let arr = [1,2,3,4,5]
// function findElement(arr, target) {
//   for (let i = 0; i < arr.length; i++)
//   {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log("element found at",findElement(arr, 3),"position")

// return number of elements of an arr
// let arr = [1,2,3,4,5]
// function countElements(arr) {
//   return arr.length;
// }
// console.log(countElements(arr))


// last element of an arr
// let arr = [1,2,3,4,5]
// function lastElement(arr) {
//   return arr[arr.length - 1];
// }
// console.log(lastElement(arr))

// 0th elements of an arr
// let arr = [1,2,3,4,5]
// function firstElement(arr) {
//   return arr[0];
// }
// console.log(firstElement(arr))

// filter number is greter than 5 return new arr without 5
// let arr = [1,2,3,4,5,6,7,8]
// function filterArray(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++)
//   {
//     if (arr[i] > 5)
//     {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(filterArray(arr))



// double each Element using map
// let arr = [1,2,3,4,5]
// function doubleElements(arr) {
//   return arr.map((element) => {
//     return element * 2;
//   });
// }
// console.log(doubleElements(arr))


// get only evevn numbers using filter
// let arr = [1,2,3,4,5,6,7,8]
// function getEven(arr) {
//   return arr.filter((element) => {
//     return element % 2 === 0;
//   }
// )};
// console.log(getEven(arr))


//add hi before each name using map
// let arr = ['John', 'Anna', 'Peter', 'Linda']
// function addHi(arr) {
//   return arr.map((element) => {
//     return 'Hi ' + element;
//   }
// )};
// console.log(addHi(arr))

// count positive number using foreach
// let arr = [1,2,3,4,-2,-6,5,6,7,8]
// function countPositive(arr) {
//   let count = 0;
//   arr.forEach((element) => {
//     if (element > 0){
//       count++;
//     }
//   }
// );
//   return count;
// }
// console.log(countPositive(arr))  

//convert all strings to upper case
// let arr = ['hello', 'world', 'python', 'javascript']
// function convertToUpperCase(arr) {
//   return arr.map((element) => {
//       return element.toUpperCase();
//     }
//   )}; 
//   console.log(convertToUpperCase(arr))


// find all elememts greater than 50 using filter
// let arr = [10, 20, 30, 40, 50,60,70,80,90,100]
// function greater(arr){
//   return arr.filter((elem) => {
//     return elem > 50
//   });
// }
// console.log(greater(arr))

// print each elememt with its index using foreach
// let arr = ['apple', 'banana', 'cherry', 'date']
// function printIndex(arr) {
//   arr.forEach((element, index) =>
//       console.log("Index "+ index + ': ' + element)
//   );
// }
// printIndex(arr)


// add 10 to each element using map
// let arr = [1,2,3,4,5,6,7,8]
// function addTen(arr) {
//   return arr.map((element) => element + 10 );
// }
// console.log(addTen(arr))


//access a value from 2d array
// let data = [[10,20],[30,40],[50,60]]
// console.log(data[1][1])

//change the value
// let data = [[10,20],[30,40],[50,60]]
// data[1][1] = 100
// console.log(data)

//print all values(row by row) using for of
// let data = [[10,20],[30,40],[50,60]]
// for (let row of data) {
//   for (let value of row) {
//     console.log(value)
//   }
// }

//use forEach
// let data = [[10,20],[30,40],[50,60]]
// data.forEach((row) =>
//     row.forEach((value) =>
//         console.log(value)
//   )
//)


//count total elements
// let data = [[10,20],[30,40],[50,60]]
// let total = 0
// for (let row of data) {
//   for (let value of row) {
//     total += 1
//   }
// }
// console.log(total)

//using single loop
// let data = [[10,20],[30,40],[50,60]]
// let total = 0
// for (let row of data) {
//   total += row.length
// }
// console.log(total)

//use forEach
// let data = [[10,20],[30,40],[50,60]]
// let total = 0
// data.forEach((row) =>
  //     row.forEach((value) =>
    //         total += 1
//     )
// )
// console.log(total)


//sum of all elemets
// let data = [[10,20],[30,40],[50,60]]
// let sum = 0
// for (let row of data) {
//   for (let value of row) {
//     sum += value
//   }
// }
// console.log(sum)

// using normal for loop
// let data = [[10,20],[30,40],[50,60]]
// let sum = 0
// for (let i = 0; i < data.length; i++){
//   for (let j = 0; j < data.length; j++){
//     sum += data[i][j]
//   }
// }
// console.log(sum)


// flatten the nested array using for loop
// let data = [[10,20],[30,40],[50,60]]
// let flatData = []
// for (let row of data) {
//   for (let value of row) {
//     flatData.push(value) 
//   }
// }
// console.log(flatData)

// use normal for loop
// let data = [[10,20],[30,40],[50,60]]
// let flatData = []
// for (let i = 0; i < data.length; i++){
//   for (let j = 0; j < data.length; j++){
//     flatData.push(data[i][j])
//   }
// }
// console.log(flatData)

// let data = [[10,20],[30,40],[50,60]]
// let flatData = data.flat()
// console.log(flatData)


//get first element of each inner array without creating new array
// let data = [[10,20],[30,40],[50,60]]
// for(let i = 0; i < data.length; i++){
//   console.log(data[i][0]) 
// }

//using new array
// let data = [[10,20],[30,40],[50,60]]
// let firstElements = []
// for (let row of data) {
//   firstElements.push(row[0])
// }
// console.log(firstElements)

//replace all even number with 0
// let data = [[10,20],[30,40],[50,60]]
// for (let i = 0; i < data.length; i++){
//   for (let j = 0; j < data.length; j++){
//     if(data[i][j] % 2 == 0){
//       data[i][j] = 0
//     }
//   }
// }
// console.log(data)


//count how many odd number are ther
// let data = [[10,20],[30,40],[50,60]]
// let count = 0
// for (let i = 0; i < data.length; i++){
//   for (let j = 0; j < data.length; j++){
//     if(data[i][j] % 2 != 0){
//       count++
//     }
//   }
// }
// console.log(count)


//add new inner array
// let data = [[10,20],[30,40],[50,60]]
// data.push([70,80])
// console.log(data)


// count even number from let board = [[1,5,7], [8, 2, 9], [11, 54,-9]];
// let board = [[1,5,7], [8, 2, 9], [11, 54, -9]];

// let evenCount = 0;

// for (let i = 0; i < board.length; i++) {
//   for (let j = 0; j < board[i].length; j++) {
//     if (board[i][j] % 2 === 0) {
//       evenCount++;
//     }
//   }
// }

// console.log( evenCount); // Output: 3


// find transppose of matrix array
// let matrix = [[1, 2, 3],
//               [4, 5, 6], 
//               [7, 8, 9]];
// let transpose = [];  
// for (let i = 0; i < matrix[0].length; i++) {
//   transpose[i] = [];
//   for (let j = 0; j < matrix.length; j++) {
//     transpose[i][j] = matrix[j][i];
//   }
// }
// console.log(transpose); // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]


//[[1, 2, 3],[4, 5, 6],[0, 1, 0]] find the row with the maximum sum
// let matrix = [[1, 2, 3],
//               [4, 5, 6], 
//               [0, 1, 0]];
// let maxRowSum = 0;
// let maxRowIndex = 0;
// for (let i = 0; i < matrix.length; i++) {
//   let rowSum = 0;
//   for (let j = 0; j < matrix[i].length; j++) {
//     rowSum += matrix[i][j];
//   }
//   if (rowSum > maxRowSum) {
//     maxRowSum = rowSum;
//     maxRowIndex = i;
//   }
// } 
// console.log("index:", maxRowIndex,"with sum:",maxRowSum); // Output: Row with maximum sum is at index: 1 with sum: 15


//matrix : [[1,2,3],[4,5,6]]; output : [[1,5],[2,6],[3,4]]
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];
// let row1 = matrix[0];
// let row2 = matrix[1].slice().reverse();
// let result = [];
// for (let i = 0; i < row1.length; i++) {
//   result.push([row1[i], row2[i]]);
// }
// console.log(result);


// let matrix = [ [1, 2, 3],[4, 5, 6],[7, 8, 9],[10,11,12]]; print the element in continuous manner like 1,2,3,6,5,4,7,8,9.....

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12]
// ];
// let result = [];
// for (let i = 0; i < matrix.length; i++) {
//   if (i % 2 === 0) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       result.push(matrix[i][j]);
//     }
//   } else {
//     for (let j = matrix[i].length - 1; j >= 0; j--) {
//       result.push(matrix[i][j]);
//     }
//   }
// }
// console.log(result.join(',')); // Output: 1,2,3,6,5,4,7,8,9,11,12,10


//slot game using 2-D array
// let slots = [
//   ['🍒', '🍒', '🍒'],
//   ['🍌', '🍒', '🍎'],
//   ['🍒', '🍎', '🍌']
// ]; 
// function checkWin(slots) {
//   for (let i = 0; i < slots.length; i++) {
//     if (slots[i][0] === slots[i][1] && slots[i][1] === slots[i][2]) {
//       return `You win! Row ${i + 1} has all matching symbols:${slots[i][0]}`;
//     }
//   }
//   for (let j = 0; j < slots[0].length; j++) {
//     if (slots[0][j] === slots[1][j] && slots[1][j] === slots[2][j]) {
//       return `You win! Column ${j + 1} has all matching symbols:${slots[0][j]}`;
//     }
//   }
//   return "No winning combination found.";
// }
// console.log(checkWin(slots)); // Output: You win! Row 1 has all matching symbols: 🍎

// object in js
// let person = {
//     name : "Aditya",
//     age : 21,
//     place : "Pune",
// }
// // console.log(person)
// // console.log(person.name)
// // console.log(person["name"])

// console.log(Object.keys(person)) // get all keys
// console.log(Object.values(person)) // get all values
// console.log(Object.entries(person)) // get all key value pairs

// // add new key value pair 
// person["city"] = "Mumbai"
// console.log(person)

// // update value of existing key
// person["age"] = 22
// console.log(person)

// // delete key value pair
// delete person["place"]
// console.log(person)

// // check if key exists
// console.log("name" in person) // true
// console.log("place" in person) // false

// // check if value exists
// console.log(Object.values(person).includes("Aditya")) // true
// console.log(Object.values(person).includes("Pune")) // false

// // forin loop to iterate over object
// for (let key in person) {
//     console.log(`${key} : ${person[key]}`);
// }

// object destructuring
// let person = {
//   name : "Aditya",
//   age : 21,
//   }
//   let {name,age} = person
//   console.log(name,age) // Aditya 21
//   // object destructuring with default value
//   let {name: n = "John", age: a = 20} = person
//   console.log(n, a) // Aditya 21
//   // object destructuring with nested object
//   let person = {
//     name : "Aditya",
//     age : 21,
//     address : {
//       city : "Pune",
//       state : "Maharashtra"
//     }
//   }
//   let {name, address: {city, state}} = person
//   console.log(name, city, state) // Aditya Pune Maharashtra
// // object destructuring with function parameter
// function printPerson({name, age}) { 
//   console.log(`Name: ${name}, Age: ${age}`);
// } 

// spread operator
// let person1 = {
//   name : "Aditya",  
//   age : 21,
//   place : "Pune",
//   }
// let person2 = {
//   ...person1,
//   city : "Mumbai",
//   }
// console.log(person2) // { name: 'Aditya', age: 21, place: 'Pune', city: 'Mumbai' }

//rest operator
// function sum(...args) {
//   let total = 0;
//   for (let arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// map in js
// let map = new Map();
// map.set("name", "Aditya");
// map.set("age", 21);
// map.set("place", "Pune");

// console.log(map.get("name")); // Aditya
// console.log(map.get("age")); // 21
// console.log(map.get("place")); // Pune
// console.log(map.has("name")); // true
// console.log(map.has("city")); // false
// map.delete("name");
// console.log(map.has("name")); // false

// let map = new Map([
//   ["name", "Aditya"],
//   ["age", 21],
//   ["place", "Pune"]
// ]);
// console.log(map.get("name")); // Aditya
// console.log(map.get("age")); // 21
// console.log(map.get("place")); // Pune

// map using new Map()
// let map = new Map();
// map.set("name", "Aditya");
// map.set("age", 21);
// map.set("place", "Pune");
// console.log(map.get("name")); // Aditya 
// console.log(map.get("age")); // 21
// console.log(map.get("place")); // Pune

//traverse map using forof
// let map = new Map([
//   ["name", "Aditya"],
//   ["age", 21],
//   ["place", "Pune"]
// ]);
// for (let [key, value] of map) {
//   console.log(`${key}: ${value}`);
// }

// using forEach
// map.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });

// buildin functions keys(), values(), entries()
// let map = new Map([
//   ["name", "Aditya"],
//   ["age", 21],
//   ["place", "Pune"]
// ]);
// console.log(map.keys()); // MapIterator { 'name', 'age', 'place' }
// console.log(map.values()); // MapIterator { 'Aditya', 21, 'Pune' }
// console.log(map.entries()); // MapIterator { [ 'name', 'Aditya' ], ['age', 21 ], [ 'place', 'Pune' ] }  


//reverse string using for loop
// let str = "hello";
// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }
// console.log(reversed); // "olleh"

//reverse string using inbuild function
// let str = "hello"; 
// let reversed = str.split("").reverse().join("");
// console.log(reversed); // "olleh"


//complete the StudentRecords() where we want to get the details of student's name in caps
// function StudentRecords() {
//   let students = [
//     { name: "John", age: 20 },
//     { name: "Jane", age: 22 },
//     { name: "Jack", age: 19 }
//   ];
//   let studentNamesInCaps = students.map(student => student.name.toUpperCase());
//   return studentNamesInCaps;
// }   
// console.log(StudentRecords()); // Output: [ 'JOHN', 'JANE', 'JACK' ]

//we want to get the details of students who scored more than 50 marks.
// function StudentRecords() {
//   let students = [
//     { name: "John", marks: 45 },
//     { name: "Jane", marks: 55 },
//     { name: "Jack", marks: 60 }
//   ];
  
//   let passedStudents = students.filter(student => student.marks > 50);
  
//   return passedStudents;
// }

//total book prise
// let books = [
//   { title: "Book1", price: 10 },
//   { title: "Book2", price: 20 },
//   { title: "Book3", price: 30 }
// ];
// let total = books.reduce((acc, book) => acc + book.price, 0);
// console.log(total); // Output: 60

// json
// let data = {
//   name: "John",
//   age: 20,
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA"
//   }
// };
// let jsonData = JSON.stringify(data); // convert to JSON string
// console.log(jsonData); // Output: {"name":"John","age":20,"address":{"street":"123 Main St","city":"Anytown","state":"CA"}}
// let parsedData = JSON.parse(jsonData); // convert back to JavaScript object
// console.log(parsedData); // Output: { name: 'John', age: 20, address: { street: '123 Main St', city: 'Anytown', state: 'CA' } }*

//json propertie checker hasOwnProperty
// let data = {
//   name: "John", 
//   age: 20,
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA"
//   }
// };
// console.log(data.hasOwnProperty("name")); // Output: true
// if(data.hasOwnProperty("name")){
//   console.log(data.name); // Output: John
// }


// function findPath(obj, path) {
//   const keys = path.split('.');
//   let current = obj;

//   for (let key of keys) {
//     if (current && typeof current === 'object' && key in current) {
//       current = current[key];
//     } else {
//       return undefined;
//     }
//   }

//   return current;
// }


// count vowels in a string
// let str = "hello world";
// function countVowels(str){
//   let count = 0;
//   let viowels = "aeiouAEIOU";
//   for(let char of str){
//     if(viowels.includes(char)){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels(str));

//reverse a string without using inbuild function
// let str = "hello world";
// function reverseString(str){
//   let reversed = "";
//   for(let i = str.length - 1; i >= 0; i--){
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseString(str)); // Output: "dlrow olleh"


// check if a string is palindrome return true or false
// let str = "madam";
// function isPalindrome(str){
//   let reversed = "";
//   for(let i = str.length -1; i >= 0; i--){
//     reversed += str[i];
//   }
//   if(reversed === str){
//     return true;
//   }
//   return false;
// }
// console.log(isPalindrome(str)); // Output: true


//repleace all spaces with underscore withaout using inbuild function
// let str = "hello world";
// function replaceSpaces(str){
//   return str.replace(" ", "_");
//   // let newStr = "";
//   // for(let char of str){
//   //   if(char === " "){
//   //     newStr += "_";
//   //   } else {
//   //     newStr += char;
//   //   }
//   // }
//   // return newStr;
// }
// console.log(replaceSpaces(str)); // Output: "hello_world"


//count words in a string
// let str = "i love programming in javascript";
// function countWords(str){
//   let count = 1;
//   for(let char of str){
//     if(char === " "){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countWords(str)); // Output: 5

//  print "pangram" if string contains every letter of the alphabet else "not pangram".
// let str = "We promptly judged antique ivory buckles for the prize";
// function isPangram(str) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   str = str.toLowerCase();
//   for (let char of alphabet) {
//     if (!str.includes(char)) {
//       return "not pangram";
//     }
//   }
//   return "pangram";
// }
// console.log(isPangram(str)); // Output: "pangram"


// set in js
// let mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(1); // duplicate value, will not be added
// console.log(mySet); // Output: Set { 1, 2, 3 }
// console.log(mySet.has(1)); // Output: true
// console.log(mySet.has(4)); // Output: false
// mySet.delete(2);
// console.log(mySet); // Output: Set { 1, 3 }
// console.log(mySet.size); // Output: 2
// mySet.clear();
//console.log(mySet); // Output: Set {}

//traverse set using for of and forEach
// let mySet = new Set([1, 2, 3, 4, 5]);
// for (let value of mySet) {
//   console.log(value); // Output: 1 2 3 4 5
// }
// mySet.forEach((value) =>{
//   console.log(value); // Output: 1 2 3 4 5
// });


//rejex contifier {n, } : matches n or more times
// let text = "aaabaaa";
//     let pattern = /a{2,}/g;
//     console.log(pattern.exec(text));
//     console.log(pattern.exec(text));


//{n, m} : matches between n and m times
// let text = "aaabaaa";
//     let pattern = /a{2,4}/g;
//     console.log(pattern.exec(text));
//     console.log(pattern.exec(text));

// let text = "say hello to the world";
// let pattern = /hello/;
// console.log(pattern.test(text)); // Output: true

//replace all occurrences of a cat with dog
// let text2 = "The cat sat on the mat. The cat is cute.";
// let replacedText = text2.replace( /cat/g, "dog");
// console.log(replacedText); // Output: "The dog sat on the mat. The dog

// match any digit in a string atleast once digit
// let text3 = "My phone number is 123-456-7890.";
// let pattern = /\d+/g;
// let matches = text3.match(pattern);
// console.log(matches); // Output: [ '123', '456', '7890' ]

//match a word that starts with h specific letter check of the string started with the word hello using ^ anchor
// let text4 = "hello world";
// let pattern = /^hello/;
// console.log(pattern.test(text4)); // Output: true

// split a string to an array
  // let text = "red, green, blue";
  // let pattern = /,\s*/; // split by comma and optional space
  // let result = text.split(pattern);// Output: [ 'red', ' green', ' blue' ]


// case insensitive match for hello check if "HELLO" is matched using regex
// let text5 = "HELLO world";
// let pattern = /hello/i; // 'i' flag for case-insensitive match
// console.log(pattern.test(text5)); // Output: true

// match if a string ends with "world"
// let text = "hello world";
// let pattern = /world$/; // '$' anchor for end of string
// console.log(pattern.test(text)); // Output: true

// find all occurences of a letter "a"
// let text6 = "banana apple apricot";
// let pattern = /a/g; // 'g' flag for global search
// let matches = text6.match(pattern);
// console.log(matches); // Output: [ 'a', 'a', 'a', 'a' ]

// mach any character between "c" and "t" use a character set to check the middle letter is a vowel "cut"
// let text7 = "cut cat cot";
// let pattern = /c[aeiou]t/;
// let matches = text7.match(pattern);
// console.log(matches); 

// match single character using dot
// let text = "cat"
// let pattern = /c.t/; // matches any character in place of '.'
// let matches = text.match(pattern);
// console.log(matches); // Output: [ 'cat' ]

//entire string content only digits
// let text8 = "1234567890";
// let pattern = /^\d+$/;
// console.log(pattern.test(text8)); // Output: true


// use exec() to find multiple "h" characters in a string
// let text9 = "hello there, how are you?";
// let pattern = /h/g;
// console.log(pattern.exec(text9)); // Output: [ 'h', index: 0, input: 'hello there, how are you?', groups: undefined ]
// console.log(pattern.exec(text9)); // Output: [ 'h', index: 13, input: 'hello there, how are you?', groups: undefined ]
// console.log(pattern.exec(text9)); // Output: null (no more matches)?

//match  word boundary for "the" using \b
// let text10 = "the quick brown fox jumps over the lazy dog";
// let pattern = /\bthe\b/;
// console.log(pattern.test(text10)); // Output: true

// match lower caase letters using [a-z]
// let text11 = "hello world";
// let pattern = /[a-z]+/g; // matches one or more lowercase letter
// console.log(text11.match(pattern));

// basic email validation using regex
// let text12 = "john.doe@example.com";
// let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
// console.log(pattern.test(text12)); // Output: true

// indien phone number validation using regex
// let text13 = "+91-9876543210";
// let pattern = /^\+91-\d{10}$/;
// console.log(pattern.test(text13)); // Output: true

//password validation using regex at least 6 charaters long and conteins at least one one ditgit
// let text14 = "Password123";
// let pattern = /^(?=.*\d)[a-zA-Z\d]{6,}$/; 
// console.log(pattern.test(text14)); // Output: true

//count vowels in a string using regex and print the count
// let text = "hll wrld";
// let pattern = /[aeiou]/gi; // matches any vowel
// console.log(text.match(pattern).length || []);
 // Output: 3

// replace multiple spaces with a single space
// let text = "Hello    World!   This is   a test.";
// console.log(text.replace(/\s+/g, " ")); 

//rturn true is first character of str is an uppercase english letter
// let str = "hello World";
// console.log(/^[A-Z]/.test(str))

// return true is first character of every single letter in the str is an uppercase english letter
// let str = "Hello world";
// console.log(/^[A-Z][a-z]*$/.test(str));

// extract file extension from a file name
// let fileName = "document.pdf";
// let pattern = /\.([a-zA-Z0-9]+)$/; // matches the file extension
// let match = fileName.match(pattern);
// if (match) {
//   console.log(match[1]); // Output: pdf
// } else {
//   console.log("No file extension found.");
// }  


// hoisting in js

// console.log(a);
// console.log(hello);
// hello();
// let a = 5;
// let hello = () =>{
//   console.log("Hello, World!");
// }
// console.log(a); // Output: 5
// hello(); // Output: Hello, World!


//recoursion in js

//print dicreaseing order of 5
// function pd(n){
//   if(n === 0){
//     return
//   }
//   console.log(n);
//   pd(n - 1);
// }
// pd(5)

//print increasing order of 5
// function pi(n){
//   if(n === 0){
//     return
//   }
//   pi(n - 1);
//   console.log(n);
// }
// pi(5);

//factorial of a number using recursion
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));


// print array using recursion
// function printArray(arr, index = 0){
//   if(index === arr.length){
//     return;
//     }
//   console.log(arr[index]);
//   printArray(arr, index + 1);

// }
// let arr = [1, 2, 3, 4, 5];
// printArray(arr);


//find max element in an array using recursion
// function findMax(arr, index = 0, max = -Infinity) {
//   if (index === arr.length) {
//     return max;
//   }
//   if (arr[index] > max) {
//     max = arr[index];
//   }
//   return findMax(arr, index + 1, max);
// }
// let arr = [2, 6, 3, 8, 1, 5];
// console.log(findMax(arr)); 


//let arr = [1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9]; let target = 5; find first index of a target element in a array with dublicate elements using binary search without recursion
// function findFirstIndex(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   let firstIndex = -1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
    
//     if (arr[mid] === target) {
//       firstIndex = mid; 
//       right = mid - 1; 
//     } else if (arr[mid] < target) {
//       left = mid + 1; 
//     } else {
//       right = mid - 1;
//     }
//   }
  
//   return firstIndex;
// }
// let arr = [1, 2, 3, 4, 5, 5, 5, 5, 6];
// let target = 5;
// console.log(findFirstIndex(arr, target));


//let arr = [1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9]; let target = 5; find last index of a target element in a array with dublicate elements using binary search without recursion
// function findLastIndex(arr, target){
//   let left = 0;
//   let right = arr.length - 1;
//   let lastIndex = -1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
    
//     if (arr[mid] === target) {
//       lastIndex = mid; 
//       left = mid + 1; 
//     } else if (arr[mid] < target) {
//       left = mid + 1; 
//     } else {
//       right = mid - 1;
//     }
//   }
  
//   return lastIndex;
// }
// let arr = [1, 2, 3, 4, 5, 5, 5, 5, 6];
// let target = 5;
// console.log(findLastIndex(arr, target)); // Output: 7

// count max frquency of a string 
// function countFreq(str){
//   let map = new Map();
//   for(let char of str){
//     if(map.has(char)){
//       map.set(char, map.get(char) + 1);
//     } else {
//       map.set(char, 1);
//     }
//   }
//   let maxFreq = 0;
//   let maxChar = '';
//   for(let [char, freq] of map){
//     if(freq > maxFreq){
//       maxFreq = freq;
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }
// let str = "hello world";
// console.log(countFreq(str)); // Output: { char: 'l', frequency: 3 }


//Write a function that returns the first non-repeating character in a string. If all characters repeat, return null.
// function firstNonRepeatingChar(str) {
//   let charCount = new Map();
  
//   for (let char of str) {
//     charCount.set(char, (charCount.get(char) || 0) + 1);
//   }
  
//   for (let char of str) {
//     if (charCount.get(char) === 1) {
//       return char;
//     }
//   }
  
//   return null; // If all characters repeat
// }
// let str = "swiss";
// console.log(firstNonRepeatingChar(str)); // Output: 'w' (the first non-repeating character)



//Create a simple React component called Counter that: 1. Displays a count 2.Has buttons to increment and decrement the count
// import React, { useState } from 'react';
// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }
// export default Counter;


// mearge sort example
// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }
// function merge(left, right) {
//   const result = [];
//   let i = 0;
//   let j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   return result.concat(left.slice(i)).concat(right.slice(j));
// }
// let arr = [38, 27, 43, 3, 9, 82, 10];
// console.log(mergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]


// quick sort example
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[arr.length - 1];
//   const left = [];
//   const right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }
// let arr = [38, 27, 43, 3, 9, 82, 10];
// console.log(quickSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]

//dutch national flag problem
// function dutchNationalFlag(arr) {
//   let low = 0;
//   let mid = 0;
//   let high = arr.length - 1;

//   while (mid <= high) {
//     if (arr[mid] === 0) {
//       [arr[low], arr[mid]] = [arr[mid], arr[low]];
//       low++;
//       mid++;
//     } else if (arr[mid] === 1) {
//       mid++;
//     } else {
//       [arr[mid], arr[high]] = [arr[high], arr[mid]];
//       high--;
//     }
//   }
//   return arr;
// }
// let arr = [2, 0, 1, 2, 0, 1, 1, 0];
// console.log(dutchNationalFlag(arr)); // Output: [0, 0, 0, 1, 1, 1, 2, 2]


//hosting in js
// conconsole.log(x) // undefine
// console.log(one) // entire function
// one()   //hello
// var x = 5
// function one(){
//     console.log("hello")
// }
// console.log(x) //5
// one() // hello


// console.log(x) // undefine
// console.log(one) // entire function
// one()   //hello
// let x = 5
// function one(){
//     console.log("hello")
// }
// console.log(x) //5
// one() // hello

// console.log(x) // undefine -- error
// console.log(one) // entire function
// one()   //hello
// const x = 5
// function one(){
//     console.log("hello")
// }
// console.log(x) //5
// one() // hello

// console.log(x); // undefine
// console.log(one); // entire function
// one();   //hello
// var x = 5;
// () => {
//     console.log("hello");
// }
// console.log(x); //5
// one(); // hello


//error handeling in js
// try {
//   // Code that may throw an error
//   let result = riskyFunction();
//   console.log(result);
// } catch (error) {
//   console.error("Error occurred:", error);
// } finally {
//   console.log("This will always execute, regardless of an error.");
// } 
// function riskyFunction() {
//   throw new Error("Something went wrong!");
// }


//reduse in js
// let arr = [1, 2, 3, 4, 5];
// let mul = arr.reduce((accumulator, currentValue) => {
//   return accumulator * currentValue;
// }, 1);
// console.log(mul); // Output: 120 (1 * 2 * 3 * 4 * 5)


//find max from arr using reduce
// let max = arr.reduce((acc, elem) => {
//   return acc > elem ? acc : elem;
// });
// console.log(max);


//pattern
//4 3 2 1
//3 2 1
//2 1
//1
// let n = 5;
// for(let i = n; i > 0; i--){
//   for(let j = i; j > 0; j--){
//     process.stdout.write(j + " ");
//   }
//   process.stdout.write("\n");
// }

//transpose of matrix
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// let transposed = [];
// for (let i = 0; i < matrix[0].length; i++) {
//   transposed[i] = [];
//   for (let j = 0; j < matrix.length; j++) {
//     transposed[i][j] = matrix[j][i];
//   }
// }
// console.log(transposed);


//print right angle trangal
// let n = 4;
// for(let i = 1; i <= n; i++){
//   for(let j = 1; j <= i; j++){
//     process.stdout.write("*");
//   }
//   console.log("")
// }

//print squre
// let n = 4;
// for(let i = 1; i <= n; i++){
//   for(let j = 1; j <= n; j++){
//     process.stdout.write("*")
//   }
//   console.log("")
// }

//print half piramid with number
// let n = 5;
// for(let i = 1; i <= n; i++){
//   for(let j = 1; j <= i; j++){
//    process.stdout.write(j +" ")
//   }
//   console.log("")
// }

//print invertated triangle
// let n = 5;
// for(let i = 1; i <= n; i++){
//   for(let j = n; j >= i; j--){
//     process.stdout.write("*")
//   }
//   console.log("")
// }


//sum of all elements of matrix
// let mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// let sum = 0;
// for(let i = 0; i < mat.length; i++){
//   for(let j = 0; j < mat[i].length; j++){
//     sum += mat[i][j]; 
//   }
// }
// console.log(sum);

//sum of dignolal elements of matrix
// let mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// sum = 0;
// for(let i = 0; i < mat.length; i++){
//   for(let j = 0; j < mat[i].length; j++){
//     if(i === j){
//       sum += mat[i][j]; 
//     }
//   }
// }
// console.log(sum);


// transpose of matrix
//  let mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// let transpose = []
// for(let i = 0; i < mat.length; i++){
//   transpose[i] = [];
//   for(let j = 0; j < mat[i].length; j++){
//     transpose[i][j] = mat[j][i]
//   }
// }
// console.log(transpose)


//fing largest element from matrix
//  let mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// let largest = -Infinity;
// for(let i = 0; i < mat.length; i++){
//   for(let j = 0; j < mat[i].length; j++){
//     if(mat[i][j] > largest){
//       largest = mat[i][j];
//     }
//   }
// }
// console.log(largest);


//print diamond
// let n = 5; 
// for(let i = 1; i <= n; i++){
//   for(let j = 1; j <= n; j++){
//     if(j === n - i + 1){
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   process.stdout.write("\n");
// }

// let n = 10;
// for(let i = 1; i <= n; i++){
//     for(let j = n; j >= i; j--){
//     process.stdout.write(" ");
//     }
//     for(let k = 1; k <= i; k++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// Reverse Number Triangle
 
// For n = 4, print:
 
// 4 3 2 1
// 3 2 1
// 2 1
// 1

let n = 4;
for (let i = n; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    process.stdout.write(j + " ");
  }
  process.stdout.write("\n");
}