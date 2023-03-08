// const x = 10;
// 
// if (x < 10) {
//     console.log("Il numero è minore di 10");
// } else if (x === 10) {
//     console.log("Il numero è 10");
// } else {
//     console.log("Il numero è maggiore di 10");
// }
// 
// console.log("Continua esecuzione del programma");

// const x = 1;
// const y = 6; 

// Stampare VERO se x è maggiore di 0 AND y è maggiore di 5
// console.log(x > 0 && y > 5);
// if (x > 0 && y > 5) {
//     console.log("VERO");
// } else {
//     console.log("FALSO");
// }

// Stampare VERO se x è 5 oppure y è 5

// console.log(x === 5 || y === 5);
// if (x === 5 || y === 5) {
//     console.log("VERO");
// } else {
//     console.log("FALSO");
// }
// 
// console.log(true && true && false );

// Per qualsiasi numero diverso da 5 scrivi OK
// altrimenti scrivi KO

// const x = 5;
// 
// // !(true) ---> false
// if (!(x === 5)) {
//     console.log('OK');
// } else {
//     console.log('KO');
// }
// 
// let loggedIn = false;
// 
// //      false
// if (loggedIn) {
//     // 500 righe di codice
// }
// 
// //    ![false] --> true
// if (!loggedIn) {
//     // 500 righe di codice
// }

// Scope delle variabili

const x = 5;
let word = "Ciao";

if (x === 5) {
    const word = "Hello";
    const innerWord = "Arrivederci";
    console.log(word);
    console.log(innerWord);
}

console.log(word);
console.log(innerWord);