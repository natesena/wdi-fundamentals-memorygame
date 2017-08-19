//main.js cc Nathaniel Sena
//console.log("up and running!");
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
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
	console.log(" User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log("of " + cards[cardId].suit);
	console.log("with image file " + cards[cardId].cardImage);
	if(cardsInPlay.length ===2) {
		checkForMatch();
	}
}
flipCard(0);
flipCard(1);





