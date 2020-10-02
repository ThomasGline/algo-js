const readlineSync = require("readline-sync");

let arr = [1, 2, 3, 4, 5];
let counter = 0;

console.log("First box of the array : " + arr[counter]);

while(arr[counter] < arr.length){
    counter ++;
}

console.log("Last box of the array : " + arr[counter]);