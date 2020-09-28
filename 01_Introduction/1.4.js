const readlineSync = require("readline-sync");

let name = readlineSync.question('What is your name? ');
let firstname = readlineSync.question('What is your firstname? ');
let city = readlineSync.question('Where do you live? ');

console.log('Your name is ' + name + ' ' + firstname + ' ' + 'and you live in ' + city + '.');