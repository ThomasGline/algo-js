const readlineSync = require("readline-sync");

let x;
const monday = "Monday";
const tuesday = "Tuesday";
const wednesday = "Wednesday";
const thursday = "Thursday";
const friday = "Friday";
const saturday = "Saturday";
const sunday = "Sunday";

x = readlineSync.question("Enter a number between 1 and 7: ");
if(x == 1){
    console.log(monday);
}
if(x == 2){
    console.log(tuesday);
}
if(x == 3){
    console.log(wednesday);
}
if(x == 4){
    console.log(thursday);
}
if(x == 5){
    console.log(friday);
}
if(x == 6){
    console.log(saturday);
}
if(x == 7){
    console.log(sunday);
}
