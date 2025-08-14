
//console.log(`Hello`);
//console.log(`I like pizza!`);

// to create an alert box
//window.alert('This is an alert')
//window.alert(` I like Pizza`)

//document.getElementById("myH1").textContent ="Hello";// you can use Javascript to write o the website instead of Html
//document.getElementById("myP").textContent = `I like Pizza`;

// Variable = A container that stores a value
//            Behaves s if t were the value that it contains

//1. declaration        let x;
//2. assignment         x = 200;

//let x;
//let x; // variable names need to be unique, can't have more than two variables with the same name
//x = 123;

// If you want to declare and assign at the same time you just do this:
//let x = 123;
//
//console.log(x);
//
//// to show the type of a variable:
//console.log(typeof x); // this shows the variable data type of x

//let fullName = "Weston N Sululu";
//let age = 20;
//let isStudent = true;
//
//document.getElementById("p1").textContent = `Your name is:   ${fullName}`;
//document.getElementById('p2').textContent = `Your age is : ${age}`;
//document.getElementById(`p3`).textContent = `is a student = ${isStudent}`;

// How to accept user input

// 1. Easy Way = window prompt
//2. Professional Way = HTML textbox

// Easy Way

//let username;
//username = window.prompt("What's your username?")
//console.log(username)

// Professional Way

// document.getElementById("mySubmit").onclick = function(){
    // username = document.getElementById("myText").value;
    // document.getElementById("myH1").textContent = `Hello ${username}`
    // }

// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

//let age = window.prompt("How old are you?")
//age = Number(age);
//age+=1;
//console.log(age, typeof age) 

// creating a program which calculate the are of a circle

//const pi = 3.14159; // a constant is a value that cannot be changed
//let radius;
//let circumference ;
//
//
//document.getElementById("mySubmit").onclick = function(){
//    radius = document.getElementById("myText").value;
//    radius = Number(radius);
//    circumference = 2 * pi * radius;
//    document.getElementById("myH3").textContent = circumference + "cm";
//}

// Math = built-in object that provides a collection of properties and methods

// if you want the value of PI
Math.PI

//console.log(Math.PI)
//console.log(Math.E)

// let x= 3.21;
// let y = 2;
// let z;

//z= Math.round(x); // to round-off
//z = Math.floor(x); // to round down
//z = Math.ceil(x); // to round-up
//z = Math.trunv(x); // to remoce any decimal part
//z = Math.pow(x,y); // raises x to the power of y
//z= Math.sqrt(x);
// z= Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x); absolute value (no -ve)
//z = Math.sign(x);
// let max = Math.max(x,y,z) // find the maximum value of the 3
// let min = Math.min(x,y,z) // minimum value of the 3
// 
// console.log(max);

//. checked = property that determines the checked state of an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {

    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed!";
    } else {
        subResult.textContent = "You are not subscribed!";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You have paid via Visa";
    } else if(masterCardBtn.checked){
        paymentResult.textContent = "You have paid via MasterCard";
    } else if (payPalBtn.checked) {
        paymentResult.textContent = "You have paid via PayPal";
    } else {
        paymentResult.textContent = " You must select a payment type"
    }

}