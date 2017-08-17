//main.js cc Nathaniel Sena
console.log("up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);
if(cardsInPlay.length ===2) {
	if(cardsInPlay[1] === cardsInPlay[2]){
		alert("You Found a match!");
	}
	else {
		alert("sorry, no match");
	}
}

