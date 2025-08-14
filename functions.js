// 🧠 concept:

// Reusable block of code

// Syntax:

function greet(name) {
    console.log('Hello ' + name + " ! ");
}

greet('Wendy') 
// (name) is a parameter
// (Wendy) is an argument

// in short Parameter is a placeholder for a value that we pass into a function when we call it
// Argument is the actual value that we pass into a function when we call it

//✔ Task

function add(a,b){
    return a + b;
}

console.log(add(5,3)) // function add is to add two arguments 5 and 3

// mini-challenge

// write a function that:

// . takes a number as an input
// . Returns 'Even' if the number is even, and 'Odd' if the number is odd

//let num = prompt('Enter a number'); // propmpt is a browser only function and it won't work when using node
//
//num = Number(num) // don't forget to change number from a string to a number for its default form is that of a string
//
//function evenOrOdd(num) {
//    if (num % 2 == 0) {
//        return 'Even' ;
//    } else if (num == 0) {
//        return '0 is neither Even or Odd'
//    } else {
//        return 'Odd' ;
//    }
//};
//
//console.log(evenOrOdd(num));

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a number: ", function (input) {
  const num = Number(input);

  function evenOrOdd(num) {
    if (num === 0) {
      return "0 is neither Even nor Odd";
    } else if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  console.log(evenOrOdd(num));
  readline.close();
});
