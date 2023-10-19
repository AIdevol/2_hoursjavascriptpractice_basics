// Certainly! Here are 30 coding and programming questions for JavaScript practice:
//______________________________________________________________________________________________


// Question 1: Write a function that takes in a string and returns the number of vowels in that string
// const vowels = ["a","e","i","o","u"]
// let vowelsCount=0
// function vowelsCount(str){
//   for(let i=0;i<str.length;i++){
//     if(str[i]===vowels){
//       vowelsCount++
//     }
//   }
//   return vowelsCount
// }
function countVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"]
  let vowelCount = 0;
  for (const character of string) {
    if (vowels.includes(character.toLowerCase())) {
      vowelCount++;
    }
  }
  return vowelCount;
}


// Write a JavaScript program to print "Hello, World!" to the console.
// Create a variable and store your name in it. Display it in the console.
// Write a JavaScript function to add two numbers.
// Write a function that takes an array as an argument and returns the sum of its elements.
// Write a program to find the maximum of two numbers.
// Write a function to check if a number is even or odd.
// Write a JavaScript program to generate and display the Fibonacci series.
// Create an array of numbers and write a function to find the largest number in the array.
// Write a program to reverse a string.
// Write a function to find the factorial of a number.
// Write a program to check if a given year is a leap year.
// Write a function that returns the square of a number.
// Create an array and write a function to sort it in ascending order.
// Write a JavaScript program to find and display all prime numbers up to a given limit.
// Create an object representing a person with properties like name, age, and address.
// Write a function to add a new property to an existing object.
// Write a program to loop through an array and display each element in the console.
// Write a function to remove a specific item from an array.
// Create a simple calculator program that can perform addition, subtraction, multiplication, and division.
// Write a program to find and display the length of a string.
// Write a function that returns the sum of all numbers from 1 to n.
// Create an array of strings and write a function to find the longest string in the array.
// Write a program to check if a given number is a prime number.
// Write a function to calculate the average of numbers in an array.
// Create an object representing a book with properties like title, author, and publication year.
// Write a function to update the title of a book.
// Write a program to find the common elements between two arrays.
// Create an array of objects, each representing a person with name and age properties. Write a function to find the youngest person in the array.
// Write a function to generate a random number between a specified range.
// Create a program that simulates a simple quiz game with questions and answers.
// Write a function to check if a given string is a palindrome.
// Write a function to find the longest common prefix of two strings.
// Write a program to find the smallest number in an array of numbers.
// Write a  function to check if a given number is prime.
// Write a function to find the smallest common multiple of two numbers.
// Create an array of objects, each representing a book with properties like title, author, and publication year. Write a function to find the oldest book in the array.
