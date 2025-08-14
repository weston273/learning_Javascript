// Number Guessing Game
// 1. Guess
// 2. Answer
// 3. attempts
// 4. min number & max number
// 5. going to use while loop
// 6. running variable

const maxNumber = 100;
const minNumber = 1;
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)

let guess;
let running = true;
let attempt = 0;


while (running) {

    guess = window.prompt(`Guess a number between ${minNumber} and ${maxNumber}`)
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert(`${guess} is not a number. Please select a valid number between ${minNumber} and ${maxNumber}`);
    } else if (guess > maxNumber || guess > maxNumber)  {
        window.alert(`Please select a valid number that is between ${minNumber} and ${maxNumber}`)
    } else {
        attempt ++ ;
        if (guess < answer) {
            window.alert(`The number you guessed is  lower`);
        } else if(guess > answer ) {
            window.alert(`The number you selected is  higher`)
        } else {
            window.alert(`You have guessed the correct number after ${attempt} attempts, the number is indeed ${answer}`);
            running = false;
        }
    }
   
}