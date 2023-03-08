// Chiediamo all'utente due parole in successione.
// Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.

// INPUT
// Chiedo all'utente le due parole con due prompt
const firstWord = prompt("Dimmi la prima parola");
const secondWord = prompt("Dimmi la seconda parola");
console.log(firstWord, secondWord);

// LOGICA
// Calcolo la lunghezza delle due parole
const firstWordLength = firstWord.length;
const secondWordLength = secondWord.length;
console.log(firstWordLength, secondWordLength);

// SE la prima parola è più lunga
//      creo il messaggio "La prima parola è più lunga"
// ALTRIMENTI SE le due parole sono della stessa lunghezza
//      creo il messaggio "hanno lunghezze uguali"
// ALTRIMENTI
//      creo il messaggio "La seconda parola è la più lunga"
let message = "";
// Qui è lo scope globale
if (firstWordLength > secondWordLength) {
  // Qui è il blocco
  message = "La prima parola è più lunga";
} else if (firstWordLength === secondWordLength) {
  message = "hanno lunghezze uguali";
} else {
  message = "La seconda parola è la più lunga";
}

// OUTPUT
// stampo il messaggio
console.log(message);
