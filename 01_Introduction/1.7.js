const readlineSync = require('readline-sync');

let size = readlineSync.question('What is your shoe size ? ');
let birthYear = readlineSync.question('What is your year of birth ? ');

size = size * 2;
console.log('size * 2 = ' + size);

size = size + 5;
console.log('size + 5 = ' + size);

size = size * 50;
console.log('size * 50 = ' + size);

size = size - birthYear;
console.log('size - birthYear = ' + size);

size = size + 1766;
console.log('size + 1766 = ' + size);


