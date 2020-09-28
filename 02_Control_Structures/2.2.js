const readlineSync = require("readline-sync");

let min = readlineSync.question("Write a minimum number : ");
let max = readlineSync.question("Write a maximum number : ");
let current = readlineSync.question("Write a number between minimum and maximum : ");

if ((current > min ) && (current < max)){
    console.log(current + " is well between " + min + " and " + max + ".");
}   else if (min > max){
    console.log("You are an idiot.");
}