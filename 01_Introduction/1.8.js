const readlineSync = require('readline-sync');

let counter = 4;

console.log('There are ' + counter + ' questions left');
let nameDog = readlineSync.question('What is the name of your dog ? ');
counter = counter - 1

console.log('There are ' + counter + ' questions left');
let ageDog = readlineSync.question('How old is your dog ? ');
counter = counter - 1

console.log('There are ' + counter + ' questions left');
let foodDog = readlineSync.question("What is your dog's favorite food ? ");
counter = counter - 1

console.log('There are ' + counter + ' question left');
let toyDog = readlineSync.question("What is your dog's favorite toy ? ");

console.log("Your dog's name is " + nameDog + ". He is 8 years old. He likes to eat " + foodDog + " and he likes to play with " + toyDog + ".");


