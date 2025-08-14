const guessTextBox = document.getElementById("guessTextBox");
const mySubmit = document.getElementById("mySubmit");
const outputP = document.getElementById("outputP");

let output;
let attempts = 0;
// let resume = true;
let minNumber = 1;
let maxNumber = 100;
let guess;
let answer = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
// let answ = Math.floor(Math.random() * (maxNumber-minNumber + 1) + minNumber)

mySubmit.onclick = function () {
    
    guess = Number(guessTextBox.value);
    
    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
        output = `Please put a number between ${minNumber} and ${maxNumber}`;
    } else {
        attempts +=1;
    
        if (guess === answer) {
            output = `You guessed correct! The number is ${answer}, and it took you ${attempts} attempts.`;
            attempts = 0;
            answer=Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
            
        } else if (guess < answer) {
            output = `Your guess is too low.`;
        } else {
            output = `Your guess is too high.`;
        }

    
        
    
    
    outputP.innerText = output;
    guessTextBox.value = "";
    guessTextBox.focus();

    }
}