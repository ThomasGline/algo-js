const readlineSync = require("readline-sync");

let firstNumber = readlineSync.question('Enter a decimal number ');
let secondNumber = readlineSync.question('Enter a second decimal number ');

firstNumber = Math.trunc(firstNumber);
console.log("Here is the first nomber without decimals " + firstNumber);

console.log("Here is the multiplication of the two numbers " + firstNumber * secondNumber);