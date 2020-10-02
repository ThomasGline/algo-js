const readlineSync = require("readline-sync");

let arr1 = [1, 2, 3, 4, 5]; //for first array
let length1 = arr1.length; //for first array
let addition1 = 0; //for first array

let arr2 = [100, 101, 102]; //for second array
let length2 = arr2.length; //for second array
let addition2 = 0; //for second array


addition1 = arr1[0] + arr1[1] + arr1[2] + arr1[3] + arr1[4]; //for first array
addition1 = addition1 / length1; //for first array
console.log(addition1); //for first array

addition2 = arr2[0] + arr2[1] + arr2[2]; //for second array
addition2 = addition2 / length2; //for second array
console.log(addition2); //for second array
