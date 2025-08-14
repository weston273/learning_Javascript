//🧠 Concept:

// Repeat a code multiple times

// for loop

for (let i = 1; i <= 5; i++) {
    console.log("Count:",i)
}
 // what the above code simply does is that it first defines i as 1 meaning that the first time the loop runs it will print 1 and then increase i by 1(i++),
 // by saying i <=5 it means the loop will run as long as i is less than or equal to 5, and when i is equal to 5, the loop stops running coz there is no condition telling it to do so.

 // While loop

 let i = 1;
 while (i <= 5) {
    console.log("Count:",i)
    i++;
 }
// works the same as the for loop, but the only difference is that the while loop is used when the number of iterations is unknown.

//✔ Task

//Print numbers from 1 to 10 using both while and for

// using for

console.log()

for (let i = 1; i <=10; i++) {
    console.log(i)
} // this will show numbers from 1 to 10

// now using while

console.log()

let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
} // same result

