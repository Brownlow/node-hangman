
// Require Stuff ===================================
var Letter = require('./letter.js');


var Word = function(){
	this.newWord = [];
	this.getWord = function(){

		var emptyArray = [];

		var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
		
		for (var i=0; i< chosenWord.length; i++){

			var wordLetter = new Letter(letter, guess);
			emptyArray.push('_');
			return emptyArray;
		}
	}
	this.guessLetter = function(letter){
		letter.correctGuess();
	}
}

module.exports = Word;

// * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)


