// Given this array

let numbers = [4, 9, 7, 12, 3, 8, 11, 6];

// ✔ Your Task:

// . Loop through the array
// . Check if each number is odd (number % 2!== 0)
// . Cout how many odd numbers are there
// . Print "There are X odd numbers" (replace X with an actual number)

// 💡 Hint:
// . Start with let count = 0;
// use an if condition to check for odd numbers;
// . Increment the code if it's odd

let count = 0;
for (let i = 0; i < numbers.length; i ++) {
    if (numbers[i] % 2 !==0) {
        count ++;
    }
};

console.log("The number of odd numbers are  : " + count);