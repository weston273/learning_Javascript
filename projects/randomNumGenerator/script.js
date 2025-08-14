const label1 = document.getElementById("label");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const myButton = document.getElementById("randomButton");
const max = 6;
const min = 1;
let randomNum1;
let randomNum2;
let randomNum3;

randomButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floot(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}