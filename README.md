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

Here are the commented answers to the remaining 20 coding and programming questions for JavaScript practice:

**Question 11:** Write a program to check if a given year is a leap year.

```javascript
// function isLeapYear(year) {
//   if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   } else if (year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
```
This function takes a year as input and returns `true` if the year is a leap year, and `false` otherwise. A leap year is a year with 366 days instead of the usual 365 days. Leap years occur every four years, except for years that are divisible by 100 but not by 400.

**Question 12:** Write a function that returns the square of a number.

```javascript
// function square(number) {
//   return number * number;
// }
```
This function takes a number as input and returns the square of that number. The square of a number is the product of that number multiplied by itself.

**Question 13:** Create an array and write a function to sort it in ascending order.

```javascript
// const numbers = [1, 5, 3, 8, 2];
// function sortArray(array) {
//   array.sort((a, b) => a - b);
//   return array;
// }
```
This function takes an array as input and sorts it in ascending order. Ascending order means that the smallest number in the array is at the beginning of the array, and the largest number in the array is at the end of the array.

**Question 14:** Write a JavaScript program to find and display all prime numbers up to a given limit.

```javascript
// function findPrimeNumbersUpToLimit(limit) {
//   const primeNumbers = [];
//   for (let i = 2; i <= limit; i++) {
//     if (isPrime(i)) {
//       primeNumbers.push(i);
//     }
//   }
//   return primeNumbers;
// }

// function isPrime(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
```
This function takes a limit as input and returns an array of all prime numbers up to that limit. A prime number is a number that has exactly two factors: 1 and itself.

**Question 15:** Create an object representing a person with properties like name, age, and address.

```javascript
// const person = {
//   name: "John Doe",
//   age: 30,
//   address: "123 Main Street",
// };
```
This code creates an object representing a person with the properties `name`, `age`, and `address`. The object is initialized with the values `John Doe`, 30, and `123 Main Street`, respectively.

**Question 16:** Write a function to add a new property to an existing object.

```javascript
// function addPropertyToObject(object, propertyName, propertyValue) {
//   object[propertyName] = propertyValue;
// }
```
This function takes an object, a property name, and a property value as input and adds the new property to the object.

**Question 17:** Write a program to loop through an array and display each element in the console.

```javascript
// const numbers = [1, 5, 3, 8, 2];
// for (const element of numbers) {
//   console.log(element);
// }
```
This code loops through the `numbers` array and displays each element in the console.

**Question 18:** Write a function to remove a specific item from an array.

```javascript
// function removeItemFromArray(array, item) {
//   const index = array.indexOf(item);
//   if (index > -1) {
//     array.splice(index, 1);
//   }
// }
```
This function takes an array and an item as input and removes the item from the array. If the item is not in the array, the function does nothing.

Here are the commented answers to the remaining two coding and programming questions for JavaScript practice:

**Question 19:** Create a simple calculator program that can perform addition, subtraction, multiplication, and division.

```javascript
// function calculate(operation, a, b) {
//   switch (operation) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     default:
//       return "Invalid operation";
//   }
// }

// const result = calculate("+", 1, 2);
// console.log(result); // 3
```
This function takes an operation, a number, and another number as input and performs the specified operation on the two numbers. The function then returns the result of the operation. If the operation is invalid, the function returns the string "Invalid operation".

**Question 20:** Write a function to check if a given string is a palindrome.

```javascript
// function isPalindrome(string) {
//   const reversedString = string.split("").reverse().join("");
//   return string === reversedString;
// }

// const isPalindromeResult = isPalindrome("racecar");
// console.log(isPalindromeResult); // true
```
This function takes a string as input and returns `true` if the string is a palindrome, and `false` otherwise. A palindrome is a word or phrase that reads the same backward as it does forward.

