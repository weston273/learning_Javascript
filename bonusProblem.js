// Given an array of numbers, print only the even numbers that are greater than 10.

let numbers = [4, 12, 7, 18, 3, 22, 9, 14, 5];

// Your task :

// . Loop through the array
// . Check if each number is both even AND greater than 10.
// . Print only those numbers.

//for (numbers <= numbers.length - 1 ; numbers++;) {
//    if (numbers % 2 === 0 && numbers > 10) {
//        console.log(numbers)
//    }
//}

//Why the ABOVE CODE is wrong;

// 1. for loop syntax is off:
// The loop control should have 3 parts:
// for (initialisation, condition, increment) {}
// 2. You need a loop variable(e.g. i ) to track index
//3. Inside the loop, you want to check the value at index i, i.e,, numbers[i]

// Correct Version

for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % 2 === 0 && numbers[i] > 10) {
        console.log(numbers[i]);
    }
}
