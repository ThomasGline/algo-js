const readlineSync = require("readline-sync");


function rand10(number) { 
    let rand = Math.floor(Math.random() * 10) +1;
    console.log(rand);
    function multiRand(n){ //Déclaration de la fonction multiRand.
        let arr = []; //Déclaration du tableau arr.
        let counter = 0; //Déclaration de la variable counter d'une valeur de 0.
        while(rand > 0){ //Tant que rand est plus grand que 0 faire.
            arr[counter] = Math.floor(Math.random() * 10) +1; //La case counter du tableau prend la valeur  d'un nombre aléatoire entre 1 et 10.
            counter ++; //incrémenter la variable counter.
            rand --; //décrémenter la variable rand
        }
        console.log(arr); //afficher le tableau arr.
    }
    multiRand(); //Exécuter la fonction multiRand.
}
rand10(); //Exécuter la fonction rand10.




