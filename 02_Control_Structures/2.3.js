const readlineSync = require("readline-sync");

let i = 1;

//version while
while (i <= 100){
    if (i % 2 == 0){
        console.log(i);
    }
    i = i + 1;
}

//version for
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
