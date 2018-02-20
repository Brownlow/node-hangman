
// Require Stuff ===================================
var Letter = require('./letter.js');

var Word = function(letter){
	this.wordHolder = [];

	this.displayWord = function(){

 		for (i=0; i<this.displayWord.length; i++){

 		var newWord.displayLetter = new Letter(letter)
 		}
	}
}

module.exports = Word;

// * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)


