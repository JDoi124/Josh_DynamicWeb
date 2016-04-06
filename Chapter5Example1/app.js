var cardOneSuit = "hearts",
	cardOneRank = "two",
	cardTwoSuit = "spades",
	cardTwoRank = "ace",
	cardThreeSuit = "spades",
	cardThreeRank = "five",



var cardHandSuits = ["hearts", "spades", "spades", "clubs", "diamonds"],
	cardHandRank = ["two", "ace", "five", "king", "seven"];

	//create a card object with a rank of 'two'
	// and a suit of 'hearts'
	var cardOne = {"rank":"two", "suit":"hearts" };
	// print the rank of cardOne
		console.log(cardOne.rank);

	// print the suit of cardOne

		console.log(cardOne.suit)

	//change the card to the ace of spades

		cardOne.rank = "ace";
		cardOne.suit = "spades";

		console.log(cardOne);
		// => object {rank: "ace, suit: "spades"}

		//create an empty object
		var card = {};

		//set the rank to ace
		card.rank = "ace";

		//set the suit to hearts
		card.suit = "hearts";

		console.log(card);
		// Object {rank: "ace", suit: "hearts"}

// create an empty array
	var cards = [];

	// push the two of hearts onto the array

	cards.push ( {"rank":"two", "suit":"hearts"} );
	cards.push ( {"rank":"ace", "suit":"spades"} );
	cards.push ( {"rank":"five", "suit":"spades"} );
	cards.push ( {"rank":"king", "suit":"clubs"} );
	cards.push ( {"rank":"seven", "suit":"diamonds"} );

// print the first and third card in the hand
console.log(cards[0]);
// Object {rank: "two", suit: "hearts"}

console.log(cards[2]);
//object {rank: "five", suit: "spades"}

//create an array of cards
// with a big array literal

var cards = [
	 {"rank":"two", "suit":"hearts"} 
	 {"rank":"ace", "suit":"spades"} 
	 {"rank":"five", "suit":"spades"} 
	 {"rank":"king", "suit":"clubs"} 
	 {"rank":"seven", "suit":"diamonds"}
];

//create an empty object 

var s = {};

s.name "Josh";

s.age = 20; //a number

s.friends = [ "Andrew", "Braun", "Bruce", "Liam" ];

s.dog = { "name":"Gracie", "breed": "Shepherd Mix"};

console.log(s.age);

console.log(s.friends[1]);

console.log(s.dog);

console.log(s.dog.name);

var g = {
	"name": "Gordan",
	"age": 36,
	"friends": ["Sara", "Andy", "Roger", "Brandon"],
	"dog": {"name":"Pi", "breed": "lab Mix"}
}

console.log(g.name);

console.log(g.friends[2]);

console.log(g.dog.breed);

var b = {
	"name": "John",
	"age": 9000,
	"friends": ["Sara", "Jim"],
	"dog": null

}

var currentPerson = g;

currentPerson = null;

var $headerTag = $("h1");

$headerTag.fadeOut();