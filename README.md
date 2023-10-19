# 2-hoursjavascriptractice_basics
Here are the commented answers to the 30 coding and programming questions for JavaScript practice:

**Question 1:** Write a function that takes in a string and returns the number of vowels in that string
```javascript
// const vowels = ["a","e","i","o","u"]
// let vowelsCount=0
// function vowelsCount(str){
//  for(let i=0;i<str.length;i++){
//   if(str[i]===vowels){
//    vowelsCount++
//   }
//  }
//  return vowelsCount
// }
```
This function works by creating an array of vowels and then iterating over the string, checking if each character in the string is a vowel. If it is, the function increments a counter. Finally, the function returns the value of the counter.

**Question 2:** Write a JavaScript program to print "Hello, World!" to the console.
```javascript
// console.log("Hello, World!");
```
To print "Hello, World!" to the console in JavaScript, you can use the `console.log()` function.

**Question 3:** Write a JavaScript function to add two numbers.
```javascript
// function add(a, b) {
//   return a + b;
// }
```
This function takes two numbers as input and returns the sum of those numbers.

**Question 4:** Write a function that takes an array as an argument and returns the sum of its elements.
```javascript
// function sumArray(array) {
//   let sum = 0;
//   for (const element of array) {
//     sum += element;
//   }
//   return sum;
// }
```
This function takes an array as input and returns the sum of all the elements in the array.

**Question 5:** Write a program to find the maximum of two numbers.
```javascript
// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
```
This function takes two numbers as input and returns the larger of the two numbers.

**Question 6:** Write a function to check if a number is even or odd.
```javascript
// function isEven(number) {
//   return number % 2 === 0;
// }
```
This function takes a number as input and returns `true` if the number is even, and `false` if the number is odd.

**Question 7:** Write a JavaScript program to generate and display the Fibonacci series.
```javascript
// function fibonacci(n) {
//   if (n === 0 || n === 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }
```
This function takes a number as input and returns the nth Fibonacci number. The Fibonacci series is a sequence of numbers where each number is the sum of the two previous numbers in the sequence. The first two numbers in the sequence are 0 and 1.

**Question 8:** Create an array of numbers and write a function to find the largest number in the array.
```javascript
// const numbers = [1, 5, 3, 8, 2];
// function findLargestNumber(array) {
//   let largestNumber = array[0];
//   for (const element of array) {
//     if (element > largestNumber) {
//       largestNumber = element;
//     }
//   }
//   return largestNumber;
// }
```
This function takes an array of numbers as input and returns the largest number in the array.

**Question 9:** Write a program to reverse a string.
```javascript
// function reverseString(string) {
//   let reversedString = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedString += string[i];
//   }
//   return reversedString;
// }
```
This function takes a string as input and returns the reversed string.

**Question 10:** Write a function to find the factorial of a number.
```javascript
// function factorial(number) {
//   if (number === 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// }
```
This function takes a number as input and returns the factorial of that number. The