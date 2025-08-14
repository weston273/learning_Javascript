// Given the following array:

let numbers = [5, 10, 3, 8, 6];

// ✔ Your Task

// . Use a for loop
// . Add all the numbers together
// . Store the total in a variable called sum
// . Print the final result

// 🧠 Hint

// . Start with let sum = 0;
// . Then inside the loop: sum += numbers[i];

// the expected output is 32.
let sum = 0;

for (i = 0; i <= numbers.length - 1; i++) {
    //console.log(numbers[i]);
    sum =  sum + numbers[i];
}

console.log("The sum is " + sum);



