// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// definisco array vuoto e inizializzo contatore;
var n_comp = [];
var n_utente;
var i = 0;


// il computer genera casualmente 16 numeri diversi tra loro
while(i < 16){
  var n = Math.floor((Math.random() * 90) + 1);
  var is = n_comp.indexOf(n);
  if (is < 0) {
    n_comp.push(n);
    i++;
  }
}
console.log("Numeri generati dal computer:", n_comp);

var vittorie = 0;

for (i = 1; i < 84; i++) {
  var tent = parseInt(prompt("Inserisci un numero da 1 a 100"));

  if (n_comp.includes(tent)) {
    alert("Hai perso, partita finita! Punteggio: ", vittorie);
  }
  else {
    alert("Ottimo continua");
    vittorie = vittorie + 1;

  }
  console.log(vittorie);
}



// come fare in modo che il gioco finisca?
// perchè il contatore "vittorie" non funziona?
