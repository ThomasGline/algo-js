const readlineSync = require("readline-sync");
let length;
let width;

function calcSurface(surface) { //Déclaration de la fonction calcSurface.
    console.log("the area of the rectangle is " + length * width + " cm²."); //Affichage message de fin + calcul surface.
}

length = readlineSync.question("What is the length of the rectangle in centimeters ? "); //Attribution de la longueur par l'utilisateur.
width = readlineSync.question("What is the width of the rectangle in centimeters ? "); //Attibution de la largeur par l'utilisateur.
calcSurface(); //Appel de la fonction calcSurface.