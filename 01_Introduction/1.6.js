const readlineSync = require("readline-sync");

let fistNumber = readlineSync.question('Enter a first integer number ');
let secondNumber = readlineSync.question('Enter a second integer number ');

console.log('Here is the rest of the division : ' + fistNumber % secondNumber);