const readlineSync = require("readline-sync");

let arr1 = []; //for first array
let counter1 = 1; //for first array
let arr2 = []; //for second array
let counter2 = 100; //for second array


while(counter1 <= 15){ //for first array
    arr1.push(counter1);
    console.log(arr1);
    counter1 ++;
}

while(counter2 <= 303){ //for second array
    arr2.push(counter2 = counter2 + 1);
    console.log(arr2);
}