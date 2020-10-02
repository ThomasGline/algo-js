const readlineSync = require("readline-sync");

function rand10(number) { //Déclaration de la fonction rand10.
    let rand = Math.floor(Math.random() * 10) +1; //Attibution à la variable rand d'un chiffre aléatoire entre 1 et 10.
    console.log(rand); //Affichage de la variable rand.
}

rand10(); //Appel de la fonction rand10.