// Esercizio 1 //
/* 
let number1 = 25;
let number2 = 26;
if (number1<number2) {
       console.log("Il numero più grande è: " + number2);
} else{ console.log("il numero più grande è: " + number1);
}
*/
 


// Esercizio 2 //
/*
let num = 20;
if (num < 5) {
    console.log("Tiny");
} else if (num  < 10) {
    console.log("Small");
} else if (num < 15) {
    console.log("Medium");
} else if (num < 20) {
    console.log("Large");
} else { 
    console.log("Huge");
}
*/

//Esercizio 3//
/*
for (let i = 0; i <= 10; i++) {
    if ( i === 3 || i === 8) {
    continue;
    }
   console.log(i);    
}
*/

// Esercizio 4 //
/*
 for (let i = 0; i <=15; i++) {
    if ( i % 2 === 0)  {
        console.log( i + " " + "pari");
    } else { 
        console.log( i + " " + "dispari")
    }
}
*/

// Esercizio extra 1//
/*
let numb1 = parseInt(prompt("Inserisci numb1"));
let numb2 = parseInt(prompt("Inserisci numb2"));
let somma = numb1 + numb2;
let sottrazione = numb1 - numb2;
let sottrazione1 = numb2 - numb1; 
if (
    somma === 8 || 
    sottrazione === 8 ||    
    sottrazione1 === 8 ) {
    console.log("Uno dei numeri o le relative operazioni equivalgono a 8");
}  else{ console.log("Entrambi uguali a 8 o nessuno dei numeri con relative operazioni equivalgono a 8 ")}
*/

// Esercizio extra 2 //
/* 
let totalShoppingCart = parseInt(prompt("Inserisci un numero"));
 let checkout = totalShoppingCart + 10;
 let gratis = totalShoppingCart;
  if (totalShoppingCart > 50) {
     console.log("Carrello senza  spese di spedizione = " + gratis);
} else { console.log("Carrello con spese di spedizione = " + checkout );
}
*/


//Esercizio extra 3 //
/*
let totalShoppingCart = parseInt(prompt("Inserisci un numero"));
let sconto =  totalShoppingCart - (totalShoppingCart * 0.2);
let checkout = sconto + 10;
console.log(sconto);
if (totalShoppingCart > 50 ) {
     console.log("Carrello senza spese di spedizione = " + sconto);
} else { console.log("Carrello con spese di spedizione = " + checkout );
    
}
*/

//Esercizio extra 4 //
 /*
 isMale = true;
 let gender = isMale?"male": "female";
 console.log(gender)
*/

//Esercizio extra 6 //
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else if ( i % 3 && i % 5 === 0){
        console.log("FizzBuzz");
    } else{console.log(i);}
} 
*/
