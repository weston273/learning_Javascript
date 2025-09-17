// while loop = repeat some code WHILE some condition is true

// let username = "";
// 
// while (username === "" || username === null){
    // username = window.prompt('Enter your name')
// }
// 
// console.log(`Hello ${username}`);

// Variation of a while loop, a do while loop

// let username;

// in a do while loop it does not matter even if the variable is undefined unlike the while loop, because the do while loop does the code first
// then check the variable at the end

// do{
//     username = window.prompt(`Enter your name`);
// } while(username === '' || username === null)

// console.log(`Hello ${username}`);

let loggedIn = false;
let username;
let password;

// while(!loggedIn){
//     username = window.prompt('Enter your username');
//     password = window.prompt('Enter your password');

//     if(username === 'User' && password === 'pass'){
//         loggedIn = true;
//         console.log(`You are logged in`)
//     } else {
//         console.log(`Invalid credentials! Please try again`)
//     }
// }

// The DO While Version


do{
    username = window.prompt('Enter your username');
    password = window.prompt('Enter your password');

    if(username === 'User' && password === 'pass'){
        loggedIn = true;
        console.log(`You are logged in`)
    } else {
        console.log(`Invalid credentials! Please try again`)
    }
}while(!loggedIn)

// the difference now is that we can set the variable logged in to true and the code will still work, while the While Loop will not work because 
// the loogedIn variable was never false to begin with, so we never enter the loop.

// while loop => checks variable first
// do while => checks variable later, after loop