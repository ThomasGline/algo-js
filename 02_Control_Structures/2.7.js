const readlineSync = require("readline-sync");

let counter;
let number;
let calculation = 0;

counter = readlineSync.question("Enter a number : ");
while(counter != 0){
    console.log("There are " + counter + " number(s) left to write.");
    number = readlineSync.question("Enter a number :");
    calculation = calculation + number;
    counter = counter - 1;
    
}
console.log(calculation);