const readlineSync = require("readline-sync");


//method 1
let arr = ["one", "two", "three", "for", "five"];
let arr2 = [];
let counter = 0;


console.log("array 1 - method 1 " + arr);
while(counter < arr.length){
    arr2[counter] = arr[counter];
    counter ++;
}
console.log("array 2 - method 1 " + arr2);
//end


//method 2 - push
let arr3 = [];
let counter3 = 0;

while(counter3 < arr.length){
    arr3.push(arr[counter3]);
    counter3 ++;
}
console.log("array 3 - method 2 " + arr3);
//end


//method 3 - slice
let arr4 = ["one", "two", "three", "for", "five"];
let copyArr4 = arr4.slice(0, 5);

console.log("array 4 - method 3 " + copyArr4);
//end
