// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

 //impostazione
//Preparazione:
//A 1- chiedo il livello difficolta da 1 a 3
// B 2- se 1:100 2: 81 3: 49
//C 3- genero 16 bombe
//D 4 creo condizioni vittoria gameEnd - 16 bombe

// fase logica
// Durante gioco
 // chiedo numero all'utente con prompt
 // Se il numero è una bomba fine gioco perdi
 //altroimenti metto numero in array se non presente
 //se l'array è piena gameEnd - 16 ---> alert hai vinto

 //A
 const userLevel = prompt('Dimmi livello da 1 a 3');
  
 let gameEnd;
 // B

if(userLevel === '1') {
	gameEnd = 100;
}else if(userLevel === '2'){
	gameEnd = 81;
}else if(userLevel === '3') {
	gameEnd = 49;
	
}


// C Funzione 1
const bomb = generatedBomb(16, 1, gameEnd);
console.log(bomb);
function generatedBomb(bombNumber, minBomb, maxBomb){
	const randomBombArray = [];
	while(randomBombArray.length < bombNumber) {
		const randomNumber = getRndInteger(minBomb, maxBomb);
		if(!randomBombArray.includes(randomNumber)){
			randomBombArray.push(randomNumber);
		}
	}
	console.log(randomBombArray);
	return randomBombArray;
}
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// D
const endGame = gameEnd - 16;
let gamePlay = true;
const numberCorrect = [];
while(gamePlay){
	const userNumber = parseInt(prompt('numero'));
	
	//use = bomba
	if(bomb.includes(userNumber)){
		gamePlay = false;
		alert('Perdi');
	} else {
		
		if(!numberCorrect.includes(userNumber)){
			
			numberCorrect.push(userNumber);
		}
		if (numberCorrect.length === endGame){
			gamePlay = false;
			alert('Vinci');
		}
	} 

}