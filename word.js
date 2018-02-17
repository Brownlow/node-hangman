
// Require Stuff ===================================
var Letter = require('./letter.js');
var wordList = require('./word_list.js');


// Get Word and build array
var wordArray = [];
var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

for (var i=0; i< chosenWord.length; i++){
	wordArray.push('_');
}

console.log(chosenWord);
console.log(wordArray);


var Word = function(letter){

	this.displayWord = function(){
		

		
	}
	
	this.guessLetter = function(){

		for (i=0; i<wordArray.length; i++){
			var chars = new Letter(letter)
		}
	}
}

module.exports = Word;

// * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)


