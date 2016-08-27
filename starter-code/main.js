
// Declare a variable that consists of 4 elements qqkk
var cards = ["queen", "queen", "king", "king"];
// Declare a variable those value is an empy array
var cardInPlay = [];


/* if (cardOne === cardTwo) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
*/

// Create the HTML for the cards using JS 
var gameBoard = document.getElementById('game-board');

for (var i=0; i<4; i++) {
	gameBoard.createElement('div', 'card');
};
document.getElementByClassName('board').appendChild(gameBoard);


// Create functions to organise the code

fucntion createBoard() {
	for (var i=0; i<card.length; I++) {
		document.querySelector('card')[i].innerHTML = " ";
// Loop through the cards array and attribute each element with card value
		cardElement.setAttribute('data-card', cards[i]);
	}
	document.getElementByClassName('board').appendChild(createBoard);	
};
return createBoard();

//Add a click event listener to each card element 
function isTwoCards() {
	for (var i=0; i<cards.length; i++) {
		cardElement.addEventListener('click', isTwoCards);
	}
// check if two cards are in play
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
	} 
	cardsInPlay = [];
};

//Create a function to test if two cards in play are a match
function isMatch() {

};



  
