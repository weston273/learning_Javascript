// Function Declaration

function greet(name) {
    return 'Hello, ${name}!';
}

// Function Expression

//const greet = function(name) {
//    return 'Hello, ${name}!';
//}

// Arrow Function

const greet = (name) => 'Hello, ${name}!';

// Default parameters

function greet(name = "Guest") {
    return 'Welcome, ${name}!';
}

// ✔ 2. Arrays and Array methods

// let's say we have :

const numbers = [1, 2, 3, 4, 5];

// map() - Transforms array

const squared = numbers.map(n=> n*n);
// [1,2,9,25]

