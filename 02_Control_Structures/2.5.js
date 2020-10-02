const readlineSync = require("readline-sync");

let x;

while(x != 42){
    x = readlineSync.question("What's your favorite number? ");
    console.log("Are you sure? ");
}
