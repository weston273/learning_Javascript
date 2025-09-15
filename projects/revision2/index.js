const ageTextBox = document.getElementById("ageTextBox");
const submitBtn = document.getElementById("submitBtn");
const ageOutput = document.getElementById("ageOutput");

submitBtn.onclick = function() {
    let input = ageTextBox.value.trim();
    if (input === "") {
        ageOutput.textContent = "please enter your age";
        return;
    }

    let age = Number(input);

    if (isNaN(age)) {
        ageOutput.textContent = "use only numbers";
    }
    else if (age < 0) {
        ageOutput.textContent = 'not yet born'
    } else if (age === 0) {
        ageOutput.textContent = "a baby"
    } else if (age < 18) {
        ageOutput.textContent = "a minor"
    } else if (age < 50) {
        ageOutput.textContent = "an adult"
    } else if (age >= 50) {
        ageOutput.textContent = "Ancestor"
    } 
}