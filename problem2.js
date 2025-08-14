// Given this array:
let fruits = ["apple", "banana", "mango", "orange"];

// 👉 1. Print the first fruit
// 👉 2. Print the last fruit
// 👉 3. Print how many fruits are in the list

console.log(fruits[0]); // apple
console.log(fruits[-1]); // this will give you undefined for javascript does not support negative indexing like python
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);
