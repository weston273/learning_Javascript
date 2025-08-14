const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter something: ", function (input) {
  // Do something with input
  console.log("You entered:", input);

  readline.close();
});
