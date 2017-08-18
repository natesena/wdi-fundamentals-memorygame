//main.js cc Nathaniel Sena
//console.log("up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("You Found a match!");
		}
	else {
		console.log("sorry, no match");
	}
}

var flipCard = function(cardId) {
	console.log(" User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if(cardsInPlay.length ===2) {
		checkForMatch();
	}
}
flipCard(0);
flipCard(1);





