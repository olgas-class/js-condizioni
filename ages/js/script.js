// chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

// INPUT
// Chiedo all'utente l'eta delle 2 persone con due propmt
const firstUserAge = parseInt(prompt("Quanti anni ha la prima persona?"));
const secondUserAge = parseInt(prompt("Quanti anni ha la seconda persona?"));
console.log(firstUserAge, secondUserAge);

// LOGICA
// Se l'età della prima persona è maggiore della seconda
//      scrivo "La prima persona è più grande"
// Altrimenti Se le due persone hanno l'età uguale
//      scrivo sono coetanei
// Altrimenti 
//      scrivo "La prma persona è la più piccola"
let message = "";
if (firstUserAge > secondUserAge) {
    message = "La prima persona è la più grande";
} else if (firstUserAge === secondUserAge) {
    message = "Le due persone sono coetanei";
} else {
    message = "La prima persona è la più piccola";
}

// OUTPUT
console.log(message);