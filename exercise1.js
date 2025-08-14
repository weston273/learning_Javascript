// Eexercise 1

// write a function called greetUser that takes a name and returns => ("Hello, Weston. Welcome back!")
// replace Weston with the input name

//const readline = require("readline").createInterface({
//    input: process.stdin,
//    output: process.stdout,
//});
//
//readline.question("Please enter your name: ", function greetUser(name){
//    console.log("Hello, " + name + "." + " Welcome back!")
//})
//
//readline.close();
//
//greetUser("Weston")

//corrections

// problem with the above code

//Problem 1: "I'm calling greetUser("Weston") at the end, but   geetUser is defined inside the callback and not available outside.
//Problem 2: You're closing readline immediately after defining the question, which doesn't give it time to wait for the user to answer.

// ✔ Correct cleaned up version

const readline = require("readline").createInterface({
    input: process.stdin,
    output:process.stdout,
})

const greetUser = name => {
    return `Hello, ${name}. Welcome back` // tips from a senior dev => use only backticks (`) when injecting a variable to use ($) or writing multi-line strings
    // 🧠 Memory trick => Backticks bring in the backstage crew - variables sneak in behind the curtains.
}

readline.question("Please enter your name: ", function(name){
    console.log(greetUser(name));
    readline.close();
})

 