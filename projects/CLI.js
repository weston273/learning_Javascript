// Even or Odd number Checker

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Enter a number: ", function(number){
    const num = Number(number);

    if(num  == 0){
        console.log("The number is zero, neither even or odd");

    } else if (num % 2 == 0 ){
        console.log("The number is an even number")
    } else {
        console.log("The number is odd")
    }

    readline.close();
})