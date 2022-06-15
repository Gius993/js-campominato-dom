










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