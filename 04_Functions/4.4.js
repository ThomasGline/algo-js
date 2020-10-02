const readlineSync = require("readline-sync");

//function
function average(arr){ //Déclaration de la fonction average.
    let length = arra.length; //Déclaration de la varable length qui est égale à la longeur du tableau arra.
    let counter = 0; //Déclaration de la variable counter qui est égale à 0.
    let averageTotal = 0; //Déclaration de la variable averageTotal qui est égale à 0.
    while (counter < length){ //Tant que counter est plus petit que length faire.
        averageTotal = averageTotal + arra[counter]; //averageTotal prend la valeur de de averageTotal + la case counter du tableau arra.
        counter ++; //Incrémenter la variable counter.
    }
    averageTotal = averageTotal / length; //averageTotal prend la valeur de averageTotal / length.
    console.log("Array average : " + averageTotal); //Afficher "Array average : " + la variable averageTotal.
}


function min(arr){ //Déclaration de la fonction min.
    console.log("Minimum number of table : " + Math.min.apply(Math, arra)); //afficher "Minimum number of table : " + le plus petit nombre du tableau arra.
}


function max(arr){ //Déclaration de la fonction max.
    console.log("Minimum number of table : " + Math.max.apply(Math, arra)); //afficher "Minimum number of table : " + le plus grand nombre du tableau arra.
}



//exercise
function ex44(){
    function rand10(number) {
        let num = readlineSync.question("Enter a number : ");
        function multiRand(n){
            let arra = [];
            let counter = 0;
            while(num > 0){
                arra[counter] = Math.floor(Math.random() * 10) +1;
                counter ++;
                num --;
            }
            function average(arr){
                let length = arra.length;
                let counter = 0;
                let averageTotal = 0;
                while (counter < length){
                    averageTotal = averageTotal + arra[counter];
                    counter ++;
                }
                averageTotal = averageTotal / length;
                console.log("Array average : " + averageTotal);
            }
            function min(arr){
                console.log("Minimum number of table : " + Math.min.apply(Math, arra)); 
            }
            function max(arr){
                console.log("Minimum number of table : " + Math.max.apply(Math, arra)); 
            }
            console.log(arra);
            average();
            min();
            max();
        }
        multiRand();
    }
    rand10();
}
ex44();