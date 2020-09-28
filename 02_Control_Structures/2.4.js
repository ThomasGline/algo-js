const readlineSync = require("readline-sync");

let i = 1;


while (i <= 100){
    if (i % 2 == 0){
        console.log(i / 2);
    }   else{
            console.log(i * 3);
        }
        i = i + 1;
}


//de 1 à 100. 
//Pour chaque nombre pair, afficher le résultat de leur division par 2
//Pour chaque nombre impair, afficher le résultat de leur multiplication par 3