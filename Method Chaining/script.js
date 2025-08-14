// Method Chaining = Calling one method after another in one continuos line of code

let username = window.prompt("Enter Your Username")
//...........No Method CHAINING.........


//
//username = username.trim();
//let letter = username.charAt(0);
//letter = letter.toUpperCase();
//
//let extraChars = username.slice(1);
//extraChars = extraChars.toLowerCase();
//username = letter +extraChars
//
//console.log(username)


//.............Method CHAINING..........

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);
