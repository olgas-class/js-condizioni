// pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

// INPUT
// Chiedere all'utente pari o dispari
const userChoice = (prompt("Pari o dispari?")).toLowerCase();
// Chiedere all'utente un numero da 1 a 9 e lo trasformaimo in numero
const userNumber = parseInt(prompt("Dimmi un numero da 1 a 9"));
console.log(userChoice, userNumber);
// SE user number non è NaN allora continuo
if (!isNaN(userNumber)) {
  console.log("E' numero. Posso continuare");
  // Generare un numero casuale del computer
  const computerNumber = Math.floor(Math.random() * 9) + 1;
  console.log(computerNumber);

  // LOGICA
  // Calcolo la somma dei due numeri
  const numbersSum = userNumber + computerNumber;
  console.log(numbersSum);

  // Se la somma è divisibile per 2
  //      risultato è "pari"
  // Altrimenti
  //      risultato è "dispari"
  let result = "";
  if(numbersSum % 2 === 0) {
    result = "pari";
  } else {
    result = "dispari";
  }
  console.log(result);

  // Se la scelta dell'utente è uguale al risultato
  //      Ha vinto utente
  // Altrimenti
  //      Utente ha perso
  let message = ""
  if (userChoice === result) {
    message = "CONGRATULAZIONI! Hai vinto!!!";
  } else {
    message = ":( Hai perso. Ritenta, sarai più fortunato";
  }

  // OUTPUT
  // Stampo l'esito
  console.log(message);
  document.getElementById("result").innerHTML = message;

} else {
  console.log("Non è un numero. Ricarica la pagina");
  document.getElementById("result").innerHTML = "Non è un numero. Ricarica la pagina";
}

/*
totale = 12 
sconto = 45%

prezzo scontato = 12 * 0.45 = 5.4
prezzo finale = totale - prezzo scontato = 12 - 5.6 = 6.6

*/