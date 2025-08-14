// string methods = allow you to manipulate and work with text (strings)

let userName = "Weston Sululu";
//console.log(userName.charAt(0)) // (0) => index position
// charAt shows you the character in that position

//.indexOf()
// it shows you the first index which that character appears

//console.log(userName.indexOf("o"))

// if you want to check the last position it appears, use .lastIndexOf()

//console.log(userName.lastIndexOf("o"));

// .length 
// to get the length of a string

//console.log(userName.length);

//.trim()
// to trim the whitespaces after/ b4

//userName = userName.trim();
//
//.toUpperCase()
// to make all characters uppercase
//userName = userName.toUpperCase();

//.toLowerCase()
// to make all caharacters lowercase
//userName = userName.toLowerCase();

// .repeat()
// to repeat a string
//userName = userName.repeat(3); // this repeats a string 3 times 

// .startsWith()
//let result = userName.startsWith(" ");
//console.log(result);
//
//if (result) {
//    console.log("Your username can't begin with ' ' ")
//} else {
//    console.log(userName);
//}

// .endsWith()


//let result = userName.endsWith(" ");
//
//if (result) {
//    console.log("Your username can't end with ' '");
//}else{
//    console.log(userName);
//}

// .includes()

//let result = userName.includes(" ");
//
//if (result){
//    console.log("Your username can't include ' '");
//} else {
//    console.log(userName);
//}

// replace all => replaces a certain characters in a string with other characters 
let phoneNumber = "123-456-7890";

//phoneNumber = phoneNumber.replaceAll("-","");
//console.log(phoneNumber);

// .padStart() // adding characters to a string until they reach a specified number

//phoneNumber = phoneNumber.padStart(15, "0");

// .padEnd() // add characters at the end of a string until they reach the specified number

phoneNumber = phoneNumber.padEnd(15,0);
console.log(phoneNumber);




