const readlineSycn = require("readline-sync");

let number = readlineSycn.question("Enter a number : ");
let counter = 1;
let factorial = 1;

while (counter <= number) {
    factorial = factorial * counter;
    counter++;
}
console.log("The factorial of the number " + number + " is : " + factorial);
