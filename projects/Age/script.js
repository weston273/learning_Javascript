const ageTextbox = document.getElementById("ageTextbox");
const submitBtn = document.getElementById("submitBtn");
const ageOutput = document.getElementById("ageOutput");
const ageLabel = document.getElementById("ageLabel");
let age;

submitBtn.onclick = function() {
    age = Number(ageTextbox.value);
    if (age < 0) {
        ageOutput.textContent = "not yet born";
        console.log("not born yet")
    } else if (age === 0) {
        ageOutput.textContent = "baby";
        console.log("baby")
    } else if (age < 18) {
        ageOutput.textContent = "minor";
        console.log("minor")
    } else if (age >= 18 && age <=50 )  {
        ageOutput.textContent = "adult";
        console.log
    } else if (age >50 && age < 100) {
        ageOutput.textContent = "old";
        console.log("old")
    } else {
        ageOutput.textContent = "ancestor!";
        console.log("ancestor")
    }
}
