// Functions = A selection of reusable code.
//             Declare code once, use it whenever you want.
//             Call a function to execute that code

// function happyBirthday(username, age) {
    // console.log(`Happy Birthday to you!`)
    // console.log(`Happy Birthday to you!`)
    // console.log(`Happy Birthday dear ${username}!`)
    // console.log(`Happy Birthday to you!`)
    // console.log(`You are ${age} years old`)
// }
// 
// happyBirthday("Weston", 20);
// happyBirthday("SponeBob", 30);
// happyBirthday('Patrick', 37)

function add(x,y) {
    let result = x + y;
    return result;
}

function subtract(x,y) {
    return  x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

function isEven(num) {
    if (num == 0 ) {
        return '0 is not even or odd'
    } else if(num % 2 == 0 ) {
        return 'is even'
    } else {
        return 'is odd'
    }
}

function isValidEmail(email) {

    return email.includes('@') ? true : false;
}

console.log(isEven(0));

console.log(isValidEmail('weston@coastline.edu.au'));
console.log(isValidEmail("suluwestongmail.com"))

