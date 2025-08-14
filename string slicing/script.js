// string-slicing = creating a substring from a portion of another string;

//  string.slice(start, end)

// const fullName = "Weston Sululu";

//let firstName = fullName.slice(0, 6);
//let lastName = fullName.slice(9)
//
//let firstChar = fullName.slice(0, 1);
//let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(" ")) // it will detect when there is a space then stop b4 that, since a name and a surname have a space btwn them.
// let lastName = fullName.slice(fullName.indexOf(" ") + 1) // will start after the space
// 
// console.log(firstName);
// console.log(lastName);

// an Exercise

const email = "sululuweston@gmail.com";

let username = email.slice(0, email.indexOf("@")) // .indexOf() will search for the first instence whre @ shows up
let extension = email.slice(email.indexOf("@")+1)

console.log(username);
console.log(extension);
