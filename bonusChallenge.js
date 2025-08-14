// Find the second largest Number in an Array

// given this array

// Your task: 

// write code to find the second largest number in the array.
// Print it out

// 💡 Tips:

// . The largest number is 35
// . The second largest number is 34
// . Don't sort the array directly (try solving with loops and conditionals)
// . Think about tracking the largest and second largest numbers as you loop

let numbers = [12, 35, 1, 10, 34, 1];
let largestNumber = -Infinity;
let secondNumber = -Infinity;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        secondNumber = largestNumber;
        largestNumber = numbers[i]
    } else if (numbers[i] > secondNumber && numbers[i] < largestNumber) {
        secondNumber = numbers[i]
    }
    console.log(largestNumber, secondNumber)
}
console.log(largestNumber)
console.log(secondNumber)












//for (i = 0;i < numbers.length; i++) {
//    if (numbers[i] > largestNumber) {
//        largestNumber = numbers[i]
//} 
//}
//
//for (i = 0;i < numbers.length; i++) {
//    if (numbers[i] > secondNumber && numbers[i] !== largestNumber) {
//        secondNumber = numbers[i];
//    }
//}
//
//console.log("The second largest number is: " + secondNumber)
//

